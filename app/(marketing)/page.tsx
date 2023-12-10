import { Button } from "../components/ui/button";
import { Heading } from "./_components/heading";
import { Heroes } from "./_components/heroes";
import { Footer } from "./_components/footer";

const MarketingPage = () => {
  return (
    <div className="min-h-full flex flex-col overflow-hidden dark:bg-[#1F1F1F]">
      <div className="flex flex-col items-center justify-center md:justify-start
      text-center gap-y-6 flex-1 px-5 pb-5 pt-2">
        <Heading />
        <Heroes />
        <Footer />
      </div>
    </div>
  );
}

export default MarketingPage;