import { Navbar } from "./_components/navbar";

const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-[100dvh] dark:bg-[#1F1F1F]">
      <Navbar />
      <main className="h-[100dvh] pt-12">{children}</main>
    </div>
  );
};

export default MarketingLayout;
