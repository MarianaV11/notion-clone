import { Button } from "../../components/ui/button";
import { Logo } from "./logo";

export const Footer = () => {
  return (
    <div className="flex items-center w-full bg-indigo-500">
      <Logo textColor="text-white" />
      <div
        className="md:ml-auto md:justify-end
      gap-x-2 text-white hidden md:block"
      >
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
