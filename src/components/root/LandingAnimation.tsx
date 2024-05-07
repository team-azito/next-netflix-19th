"use client";
import Lottie from "react-lottie-player";
import animationData from "#/animation/lottie-netflix.json";
import { useRouter } from "next/navigation";

const LandingAnimation = () => {
  const router = useRouter();
  return <Lottie animationData={animationData} loop={false} play onComplete={() => router.push("/home")} />;
};

export default LandingAnimation;
