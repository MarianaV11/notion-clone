"use client";

import { useConvexAuth } from "convex/react";
import { redirect } from "next/navigation";
import React from "react";
import { Spinner } from "../../components/spinner";
import Navigation from "../_components/navigation";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated, isLoading } = useConvexAuth();

  if (isLoading) {
    return (
      <div
        className="h-full items-center flex justify-center flex-col gap-2
                      bg-gradient-to-b from-primary-foreground to-secondary"
      >
        <div className="flex flex-col items-center"></div>
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
