"use client";

import { useState } from "react";
import { LoaderCircle, LockKeyhole, Mail } from "lucide-react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

function resolveSignInError(error?: string | null) {
  if (!error || error === "CredentialsSignin") {
    return "Nao foi possivel autenticar. Revise o e-mail e a senha informados.";
  }

  if (error.startsWith("Muitas tentativas")) {
    return error;
  }

  return "Nao foi possivel autenticar agora. Tente novamente em instantes.";
}

export function LoginForm() {
  const router = useRouter();
  const [pending, setPending] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setPending(true);

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false
    });

    setPending(false);

    if (!result || result.error) {
      toast.error(resolveSignInError(result?.error));
      return;
    }

    toast.success("Acesso liberado. Preparando seu painel.");
    router.refresh();
    router.push("/");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <label className="block space-y-2">
        <span className="text-xs uppercase tracking-[0.22em] text-white/50">E-mail</span>
        <div className="relative">
          <Mail className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/35" />
          <Input
            type="email"
            autoComplete="email"
            className="pl-11"
            placeholder="voce@condominio.com.br"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
      </label>

      <label className="block space-y-2">
        <span className="text-xs uppercase tracking-[0.22em] text-white/50">Senha</span>
        <div className="relative">
          <LockKeyhole className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/35" />
          <Input
            type="password"
            autoComplete="current-password"
            className="pl-11"
            placeholder="Digite sua senha"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
      </label>

      <Button type="submit" size="lg" className="w-full" disabled={pending}>
        {pending ? <LoaderCircle className="h-4 w-4 animate-spin" /> : null}
        {pending ? "Autenticando" : "Entrar no sistema"}
      </Button>
    </form>
  );
}
