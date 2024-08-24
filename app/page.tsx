import CallToAction from "@/components/home/call-to-action";
import MainHome from "@/components/home/main";
import Solutions from "@/components/home/solutions";

export default function Home() {
  return (
    <section className="">
      <MainHome />
      <Solutions />
      <CallToAction />
    </section>
  );
}
