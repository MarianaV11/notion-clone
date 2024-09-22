"use client";

import { useUser } from "@clerk/clerk-react";
import { PlusCircle } from "lucide-react";
import Image from "next/image";
import { Button } from "../../../components/ui/button";

const DocumentsPage = () => {
  const { user } = useUser();

  return (
    <div className="h-full flex flex-col items-center justify-center space-y-4">
      <Image
        alt="empty image in this folder"
        src="/Empty.svg"
        width={500}
        height={500}
      />
      <h2 className="text-lg font-medium">Bem-vindo(a) {user?.firstName}</h2>
      <Button>
        <PlusCircle className="h-4 w-4 mr-2" />
        Criar uma nota
      </Button>
    </div>
  );
};

export default DocumentsPage;
