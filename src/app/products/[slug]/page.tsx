"use client";
import Header from "@/components/Header/Header";
import React, { useEffect } from "react";
import ProductLayout from "./components/ProductLayout/ProductLayout";
import { useQuery } from "react-query";
import { getProductById } from "@/services/products";

const ProductPage = ({ searchParams }: { searchParams: { id: string } }) => {
  const productId = searchParams.id;

  const { data: product, isLoading } = useQuery(["prodDetail", productId], () =>
    getProductById(productId)
  );

  useEffect(() => {
    if (product) document.title = product?.product_name;
  }, [product]);

  return (
    <main>
      <Header />
      <ProductLayout product={product} isLoading={isLoading} />
    </main>
  );
};

export default ProductPage;
