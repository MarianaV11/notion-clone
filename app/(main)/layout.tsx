"use client";

import { useConvexAuth } from "convex/react";
import React from "react";
import { Spinner } from "../components/spinner";
import { redirect } from "next/navigation";
import Navigation from "./_components/navigation";
import Image from "next/image";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated, isLoading } = useConvexAuth();

  if (isLoading) {
    return (
      <div className="h-full items-center flex justify-center flex-col gap-2
                      bg-gradient-to-b from-primary-foreground to-secondary">
        <div className="flex flex-col items-center">
          {/* <Image src="/cloud.png" alt="cloud" width="150" height="150" /> */}
          <p style={{ filter: "drop-shadow(1px 1px 1px gray)" }}>Carregando seus documentos!</p>
        </div>
        <Spinner size="lg" />
      </div>
    );
  }

  if (!isAuthenticated) return redirect("/");

  return (
    <div className="h-full flex dark:bg-[#1F1F1F]">
      <Navigation />
      <main className="flex-1 h-full overflow-y-auto">{children}</main>
    </div>
  );
};

export default MainLayout;
