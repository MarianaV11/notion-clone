import { Poppins } from "next/font/google";
import Image from "next/image";

import { cn } from "../../lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
});

interface LogoProps {
  textColor?: string;
}

export const Logo = ({ textColor = "text-indigo-500" }: LogoProps) => {
  return (
    <div className="hidden md:flex items-center gap-x-2">
      <Image src="logo.svg" height="40" width="40" alt="Logo" />
      <p className={cn("font-semibold", font.className, textColor)}>FastNote</p>
    </div>
  );
};
