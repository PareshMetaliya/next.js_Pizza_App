"use client"

import CustomerReview from "@/components/CustomerReview/CustomerReview";
import HeroSection from "@/components/HeroSection/HeroSection";
import MobileApp from "@/components/MobileApp/MobileApp";
import PopularItems from "@/components/PopularItems/PopularItems";
import WhatWeServe from "@/components/WhatWeServe/WhatWeServe";
import Image from "next/image";
import Link from "next/link";

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {

  useEffect(() => {
    // Initialize AOS when the component mounts
    AOS.init({
      duration: 1000, // Global duration
      easing: 'ease-in-out', // Smooth easing
      once: true, // Only trigger the animation once
    });
  }, []);

  return (
    <>
      <HeroSection />
      <PopularItems />
      <WhatWeServe />
      <CustomerReview />
      <MobileApp />

    </>
  );
}
