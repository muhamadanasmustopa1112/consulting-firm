import CallToAction from "@/components/home/call-to-action";
import MainHome from "@/components/home/main";
import Solutions from "@/components/home/solutions";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <MainHome />
      <Solutions />
      <CallToAction />
    </>
  );
}
