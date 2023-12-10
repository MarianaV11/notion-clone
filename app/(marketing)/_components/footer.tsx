import { Button } from "../../components/ui/button";
import { Logo } from "./logo";

export const Footer = () => {
  return (
    <div className="flex items-center w-full bg-background dark:bg-[#1F1F1F]">
      <Logo />
      <div className="md:ml-auto md:justify-end
      gap-x-2 text-muted-foreground hidden md:block">
        <Button variant="ghost" size="sm">
          Políticas de Privacidade
        </Button>
        <Button variant="ghost" size="sm">
          Termos e Condições
        </Button>
      </div>
    </div>
  );
};
