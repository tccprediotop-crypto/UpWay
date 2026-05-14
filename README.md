# UpWay

Sistema web para gestao de encomendas em condominios, com foco em portaria, morador, retirada segura e rastreabilidade administrativa.

## O que esta pronto

- login real por contas salvas no banco, sem credenciais demo na tela de entrada
- bootstrap da primeira conta da portaria em `/cadastro/porteiro`
- cadastro publico de morador em `/cadastro/morador`, com bloco/torre e apartamento
- criacao de novos porteiros dentro do painel em `/porteiro/configuracoes`
- cadastro, edicao e arquivamento de moradores
- cadastro de apartamentos e torres no fluxo da portaria
- validacao de retirada por token manual ou QR via camera
- trilha de auditoria administrativa persistida em banco
- notificacoes internas com extensao para WhatsApp e push
- protecao basica contra repeticao de tentativas de login
- base pronta para SQLite local e PostgreSQL em deploy

## Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- NextAuth Credentials
- Prisma ORM 7
- SQLite local com client dedicado
- PostgreSQL para deploy
- Vitest
- Playwright

## Banco de dados

O projeto usa dois schemas Prisma:

- `prisma/schema.prisma`: SQLite local
- `prisma/schema.postgres.prisma`: PostgreSQL

Clients gerados:

- `src/generated/sqlite-client`
- `src/generated/postgres-client`

## Variaveis de ambiente

Base minima para ambiente local:

```env
DATABASE_PROVIDER="sqlite"
DATABASE_URL="file:./dev-local.db"
AUTH_SECRET="change-me-in-production"
NEXTAUTH_URL="http://localhost:3000"
PROPERTY_NAME="Condominio UpWay"
```

Integracoes opcionais:

```env
WHATSAPP_WEBHOOK_URL=""
WHATSAPP_WEBHOOK_TOKEN=""
WEB_PUSH_PUBLIC_KEY=""
WEB_PUSH_PRIVATE_KEY=""
WEB_PUSH_SUBJECT="mailto:ops@upway.app"
NEXT_PUBLIC_WEB_PUSH_PUBLIC_KEY=""
```

Base minima para deploy com PostgreSQL:

```env
DATABASE_PROVIDER="postgresql"
DATABASE_URL="postgresql://USER:PASSWORD@HOST:5432/upway?schema=public"
DIRECT_DATABASE_URL="postgresql://USER:PASSWORD@HOST:5432/upway?schema=public"
SHADOW_DATABASE_URL="postgresql://USER:PASSWORD@HOST:5432/upway?schema=public"
DATABASE_POOL_MAX="10"
AUTH_SECRET="use-um-segredo-forte"
NEXTAUTH_URL="https://seu-dominio.com.br"
PROPERTY_NAME="Nome do Condominio"
```

Se o destino for Supabase + Vercel, siga o guia detalhado em `docs/supabase-vercel.md`.

## Como rodar localmente

1. Instale dependencias:

```bash
npm install
```

2. Gere os clients Prisma:

```bash
npm run db:generate
```

3. Crie ou atualize o schema local sem apagar dados:

```bash
npm run db:push
```

4. Se quiser recriar o SQLite do zero, use conscientemente o reset destrutivo:

```bash
npm run db:reset:sqlite
```

5. Inicie a aplicacao:

```bash
npm run dev
```

6. Acesse:

```text
http://localhost:3000/login
```

7. Primeiro uso:

- crie a primeira conta da portaria em `/cadastro/porteiro`
- crie contas reais de moradores em `/cadastro/morador`

## Fluxo operacional

- O primeiro porteiro e criado publicamente apenas enquanto nao existe conta operacional ativa.
- Depois disso, novos porteiros passam a ser criados por quem ja esta autenticado em `/porteiro/configuracoes`.
- Moradores podem criar a propria conta informando bloco/torre e apartamento.
- Se a unidade ainda nao existir, ela e criada automaticamente no cadastro publico do morador.

## Deploy

1. Configure as variaveis de ambiente de producao com PostgreSQL.
2. Gere os clients:

```bash
npm run db:generate
```

3. Aplique o schema no banco:

```bash
npm run db:push:postgres
```

4. Suba a aplicacao:

```bash
npm run build
npm run start
```

### Notas para Supabase

- Para comandos Prisma (`db push`, introspeccao, migracoes), prefira `DIRECT_DATABASE_URL` ou a Session pooler string.
- Para o runtime do app no Vercel, prefira a Transaction pooler string e ajuste `DATABASE_POOL_MAX="1"`.
- O projeto ja aceita `DIRECT_DATABASE_URL` e `SHADOW_DATABASE_URL` em `prisma.config.ts`.

## Scripts uteis

```bash
npm run dev
npm run build
npm run start
npm run lint
npm run test
npm run test:e2e
npm run db:generate
npm run db:generate:sqlite
npm run db:generate:postgres
npm run db:push
npm run db:push:postgres
npm run db:reset:sqlite
npm run db:seed
```

## Observacoes

- `npm run db:seed` nao cria contas demo; ele apenas orienta o primeiro acesso.
- O envio interno de notificacoes funciona sempre.
- WhatsApp depende de `WHATSAPP_WEBHOOK_URL`.
- Push depende das chaves VAPID e da ativacao no navegador do morador.
- O arquivamento de morador preserva historico operacional e evita apagar encomendas antigas.
