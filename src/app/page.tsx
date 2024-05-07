import dynamic from "next/dynamic";

const LandingAnimation = dynamic(() => import("@/components/root/LandingAnimation"), {
  ssr: false,
});
const RootPage = () => {
  return <LandingAnimation />;
};

export default RootPage;
