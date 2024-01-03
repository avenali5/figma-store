"use client";
import React, { useEffect } from "react";
import Hero from "./components/Hero/Hero";
import Header from "@/components/Header/Header";
import Donated from "./components/Donated/Donated";
import Faq from "./components/Faq/Faq";
import Footer from "@/sections/Footer/Footer";
import CustomerCare from "./components/CustomerCare/CustomerCare";

const page = () => {
  useEffect(() => {
    document.title = "About";
  }, []);

  return (
    <div>
      <Header />
      <Hero />
      <Donated />
      <Faq />
      <CustomerCare />
      <Footer />
    </div>
  );
};

export default page;
