"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "../../components/ui/button";
import { useConvexAuth } from "convex/react";
import { Spinner } from "../../components/spinner";
import Link from "next/link";
import { SignInButton } from "@clerk/clerk-react";

export const Heading = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();

  return (
    <div className="max-w-3xl space-y-4 pt-5">
      <h1 className="text-2xl sm:text-2xl md:text-2xl font-bold text-indigo-500">
        Suas ideias, documentos e planos, unificados em apenas um local! Bem
        vindo ao <span className="underline">FastNote</span>
      </h1>
      <h3 className="text-base sm:text-0.5xl md:text-0.5xl font-medium">
        FastNote é um local para aprimorar o seu trabalho e produtividade!
      </h3>
      {isLoading && (
        <div className="w-full flex items-center justify-center">
          <Spinner size="lg" />
        </div>
      )}
      {isAuthenticated && !isLoading && (
        <Button asChild>
          <Link href="/documents">
            Entrar no FastNote
            <ArrowRight className="h-4 w-4 ml-2" />
          </Link>
        </Button>
      )}
      {!isAuthenticated && !isLoading && (
        <SignInButton mode="modal">
          <Button>
            Junte-se ao FastNote de graça!
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </SignInButton>
      )}
    </div>
  );
};
