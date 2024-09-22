import { Footer } from "./_components/footer";
import { Heading } from "./_components/heading";
import { Heroes } from "./_components/heroes";

const MarketingPage = () => {
  return (
    <div
      className="flex flex-col h-full justify-between items-center
      text-center pt-2"
    >
      <Heading />
      <Heroes />
      <Footer />
    </div>
  );
};

export default MarketingPage;
