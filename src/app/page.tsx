import dynamic from "next/dynamic";

const LandingAnimation = dynamic(() => import("@/components/root/LandingAnimation"), {
  ssr: false,
});
const RootPage = () => {
  return (
    <div className="flex-center h-screen">
      <LandingAnimation />
    </div>
  );
};

export default RootPage;
