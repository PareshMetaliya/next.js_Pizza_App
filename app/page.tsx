import CustomerReview from "@/components/CustomerReview/CustomerReview";
import HeroSection from "@/components/HeroSection/HeroSection";
import MobileApp from "@/components/MobileApp/MobileApp";
import PopularItems from "@/components/PopularItems/PopularItems";
import WhatWeServe from "@/components/WhatWeServe/WhatWeServe";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <HeroSection />
      <PopularItems />
      <WhatWeServe/>
      <CustomerReview/>
      <MobileApp/>

    </>
  );
}
