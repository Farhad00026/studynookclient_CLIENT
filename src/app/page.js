import Banner from "@/Component/Banner";
import Testimonials from "@/Component/Testimonials";
import WhyChooseStudyNook from "@/Component/WhyChooseStudyNook";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div>
        <Banner/>
        <WhyChooseStudyNook/>
        <Testimonials/>
      </div>
    </>
  );
}
