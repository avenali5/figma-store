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
// @ts-ignore
import DocumentMeta from "react-document-meta";

const meta = {
  description: "I am a description, and I can create multiple tags",
  meta: {
    charset: "utf-8",
    name: {
      keywords: "react,meta,document,html,tags",
    },
  },
};

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
      <DocumentMeta {...meta} />
      <Header />
      <Hero />
      <Collection setType={setType} />
      <MicroKeyboard />
      <Products products={products} />
      <Footer />
    </main>
  );
}
