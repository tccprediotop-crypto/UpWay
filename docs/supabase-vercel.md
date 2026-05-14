# Migracao para Supabase + Vercel

Este guia assume a estrategia mais segura para o UpWay:

- continuar usando Prisma ORM
- continuar usando NextAuth Credentials
- usar o Supabase apenas como PostgreSQL gerenciado

## O que foi preparado no projeto

- `prisma.config.ts` agora aceita `DIRECT_DATABASE_URL` e `SHADOW_DATABASE_URL`
- o runtime do app continua lendo `DATABASE_URL`
- o adapter PostgreSQL agora aceita `DATABASE_POOL_MAX`
- no Vercel, o projeto passa a funcionar melhor com pool pequeno (`1`) em ambiente serverless

## Mapa das URLs

Use conexoes diferentes para usos diferentes:

- `DATABASE_URL`: URL usada pelo app em runtime
- `DIRECT_DATABASE_URL`: URL usada por comandos Prisma (`db push`, introspeccao, migracoes)
- `SHADOW_DATABASE_URL`: opcional; pode repetir a `DIRECT_DATABASE_URL`

Recomendacao pratica:

- Local com app apontando para Supabase: Session pooler (`5432`)
- Comandos Prisma locais: Session pooler (`5432`) ou direct connection, se sua rede suportar IPv6
- Vercel runtime: Transaction pooler (`6543`)

## Fase 1: criar o projeto Supabase

1. Entre no painel do Supabase.
2. Crie um novo projeto.
3. Escolha uma regiao proxima da regiao em que seu projeto ficara hospedado no Vercel.
4. Guarde a senha master do banco em um gerenciador seguro.
5. Aguarde o banco ficar ativo.

## Fase 2: criar um usuario proprio para o Prisma

No Supabase, abra `SQL Editor` e rode este script:

```sql
create user "prisma" with password 'SUA_SENHA_FORTE' bypassrls createdb;
grant "prisma" to "postgres";
grant usage on schema public to prisma;
grant create on schema public to prisma;
grant all on all tables in schema public to prisma;
grant all on all routines in schema public to prisma;
grant all on all sequences in schema public to prisma;
alter default privileges for role postgres in schema public grant all on tables to prisma;
alter default privileges for role postgres in schema public grant all on routines to prisma;
alter default privileges for role postgres in schema public grant all on sequences to prisma;
```

Depois:

1. Clique em `Connect`.
2. Copie a `Session pooler string` na porta `5432`.
3. Copie a `Transaction pooler string` na porta `6543`.
4. Se sua rede suportar IPv6 e o Supabase mostrar `Direct connection`, copie tambem essa URL.

## Fase 3: configurar o ambiente local para testar contra o Supabase

No arquivo `.env`, substitua o bloco do banco por algo neste formato:

```env
DATABASE_PROVIDER="postgresql"
DATABASE_URL="COLE_AQUI_A_SESSION_POOLER_STRING_COM_USUARIO_PRISMA"
DIRECT_DATABASE_URL="COLE_AQUI_A_SESSION_OU_DIRECT_CONNECTION_COM_USUARIO_PRISMA"
SHADOW_DATABASE_URL="COLE_AQUI_A_SESSION_OU_DIRECT_CONNECTION_COM_USUARIO_PRISMA"
DATABASE_POOL_MAX="10"
AUTH_SECRET="troque-por-um-segredo-forte"
NEXTAUTH_URL="http://localhost:3000"
PROPERTY_NAME="Nome do Condominio"
```

Se o seu Supabase oferecer direct connection e a sua rede suportar IPv6, prefira:

- `DATABASE_URL`: Session pooler `5432`
- `DIRECT_DATABASE_URL`: Direct connection `5432`
- `SHADOW_DATABASE_URL`: Direct connection `5432`

Observacoes:

- A string copiada do painel normalmente vem com o usuario padrao. Substitua o trecho de usuario para `prisma.PROJECT_REF` e use a senha que voce criou para o usuario `prisma`.
- Se a senha tiver `@`, `:`, `/`, `#`, `%` ou espacos, ela deve ser URL-encoded.
- O app local usa `DATABASE_URL`.
- O comando `npm run db:push:postgres` usara `DIRECT_DATABASE_URL` quando ela existir.

## Fase 4: subir o schema no Supabase

No terminal do projeto:

```bash
npm run db:generate
npm run db:push:postgres
```

Depois rode a aplicacao local:

```bash
npm run dev
```

Valide estes fluxos:

- `/cadastro/porteiro`
- `/login`
- `/cadastro/morador`
- criacao de encomenda
- consulta de dashboard

## Fase 5: decidir se o banco ira limpo ou com migracao de dados

### Opcao A: banco novo e limpo

Use esta opcao se ainda nao existem dados reais que precisem ser preservados.

Passos:

1. Continue com o banco Supabase vazio.
2. Crie a primeira conta da portaria em `/cadastro/porteiro`.
3. Cadastre moradores reais depois.

### Opcao B: migrar dados do PostgreSQL atual

Use esta opcao se o banco local ja tem usuarios, moradores, encomendas ou historico que precisam ser preservados.

Fluxo sugerido:

1. Fazer backup do banco atual com `pg_dump`.
2. Restaurar o dump no Supabase.
3. Conferir a contagem das tabelas principais.
4. Subir o app local apontando para o Supabase.
5. Validar login e consultas.

Se voce escolher essa opcao, faca a migracao antes de apontar o Vercel para o Supabase.

## Fase 6: configurar o Vercel

No projeto do Vercel, crie estas variaveis em `Production`:

```env
DATABASE_PROVIDER=postgresql
DATABASE_URL=COLE_AQUI_A_TRANSACTION_POOLER_STRING_COM_USUARIO_PRISMA
DATABASE_POOL_MAX=1
AUTH_SECRET=SEU_SEGREDO_FORTE_E_ESTAVEL
NEXTAUTH_URL=https://seu-dominio-ou-app.vercel.app
PROPERTY_NAME=Nome do Condominio
```

Sobre a `DATABASE_URL` de producao:

- ela deve ser a `Transaction pooler string`
- ela deve usar a porta `6543`
- use o usuario `prisma`, nao `postgres`

Variaveis opcionais:

```env
WHATSAPP_WEBHOOK_URL=
WHATSAPP_WEBHOOK_TOKEN=
WEB_PUSH_PUBLIC_KEY=
WEB_PUSH_PRIVATE_KEY=
WEB_PUSH_SUBJECT=mailto:ops@upway.app
NEXT_PUBLIC_WEB_PUSH_PUBLIC_KEY=
```

## Fase 7: preview e seguranca

Recomendacao:

- producao: um projeto Supabase proprio
- preview: outro projeto Supabase, se voce realmente usar preview deploys com banco real

Se quiser simplificar no comeco:

1. configure apenas `Production`
2. faca o primeiro deploy estavel
3. so depois crie um banco separado para `Preview`

Nunca use o banco de producao para experimentos ou branches de preview.

## Fase 8: primeiro deploy

1. Garanta que o schema ja foi aplicado no Supabase.
2. Configure as env vars no Vercel.
3. Faca o deploy.
4. Teste:
   - abrir `/login`
   - criar a primeira conta da portaria se o banco estiver vazio
   - entrar no painel
   - cadastrar um morador
   - cadastrar uma encomenda

## Fase 9: rollback

Se algo sair errado:

1. nao apague o banco antigo imediatamente
2. mantenha o banco anterior intacto ate a homologacao final
3. volte as variaveis do app para a configuracao anterior, se necessario

## Checklist final

- projeto Supabase criado
- usuario `prisma` criado
- session pooler copiada
- transaction pooler copiada
- `.env` local ajustado
- `npm run db:push:postgres` executado com sucesso
- app local validado contra Supabase
- env vars de producao configuradas no Vercel
- deploy realizado
- fluxo de login e encomendas validado
