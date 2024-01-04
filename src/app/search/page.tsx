"use client";
import Header from "@/components/Header/Header";
import Products from "@/sections/Products/Products";
import React, { useEffect } from "react";
import Term from "./components/Term/Term";
import { useRouter } from "next/navigation";
import { SearchTermType } from "@/types";
import NoResults from "./components/NoResults/NoResults";
import { useQuery } from "react-query";
import { searchProduct } from "@/services/products";

const page = ({ searchParams }: { searchParams: SearchTermType }) => {
  const { term } = searchParams;
  const router = useRouter();

  useEffect(() => {
    if (!term) router.push("/");
  }, [term]);

  const { data: products, isLoading } = useQuery(
    ["searchProducts", term],
    () => searchProduct(term),
    {
      enabled: true,
    }
  );

  useEffect(() => {
    document.title = `Search: ${products?.length} result${
      products?.length > 1 || products?.length === 0 ? "s" : ""
    } found for "${term}"`;
  }, [term, products]);

  return (
    <div>
      <Header />
      {!isLoading && products?.length > 0 && <Term term={term} />}
      {!isLoading && products?.length === 0 ? (
        <NoResults term={term} />
      ) : (
        <Products products={products} />
      )}
    </div>
  );
};

export default page;
