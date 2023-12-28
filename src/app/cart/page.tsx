"use client";
import Header from "@/components/Header/Header";
import React, { useEffect, useState } from "react";
import Items from "./components/Items/Items";
import { ProductType } from "@/types";

const page = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const savedProducts = localStorage.getItem("products");
    if (savedProducts) {
      setProducts(JSON.parse(savedProducts));
    }
  }, []);

  useEffect(() => {
    if (products.length > 0) {
      localStorage.setItem("products", JSON.stringify(products));
    }
  }, [products]);

  useEffect(() => {
    if (products) {
      let totalQuantity = 0;
      for (let i = 0; i < products.length; i++) {
        /* @ts-ignore */
        totalQuantity += products[i].quantity;
      }
      setTotal(totalQuantity);
    }
  }, [products]);

  useEffect(() => {
    document.title = "Your Shopping Cart";
  }, []);

  return (
    <main>
      <Header />
      <div className='max-width'>
        {/* @ts-ignore */}
        <Items products={products} setProducts={setProducts} />
        {/* {products.length > 0 ? <Checkout total={total} /> : <NoItems />} */}
      </div>
    </main>
  );
};

export default page;
