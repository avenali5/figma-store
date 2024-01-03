"use client";
import Header from "@/components/Header/Header";
import Collection from "@/sections/Collection/Collection";
import Footer from "@/sections/Footer/Footer";
import Hero from "@/sections/Hero/Hero";
import MicroKeyboard from "@/sections/MicroKeyboard/MicroKeyboard";
import Products from "@/sections/Products/Products";
import { getAllProducts } from "@/services/products";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";

export default function Home() {
  const [type, setType] = useState("");

  const { data: products } = useQuery(
    ["products", type],
    () => getAllProducts(type),
    {
      enabled: true,
    }
  );

  useEffect(() => {
    document.title = "The Figma Store | by Alejo Avenali";
  }, []);

  return (
    <main>
      <Header />
      <Hero />
      <Collection setType={setType} />
      <MicroKeyboard />
      <Products products={products} />
      <Footer />
    </main>
  );
}
