"use client";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import SingleItem from "../SingleItem/SingleItem";
import { ItemsStyle } from "./Items.style";
import { ProductType } from "@/types";

type Props = {
  products: ProductType[];
  setProducts: Dispatch<SetStateAction<never[]>>;
};

const Items = ({ products, setProducts }: Props) => {
  return (
    <ItemsStyle>
      <h3>{products.length} items in Cart</h3>
      <hr />
      {/* {products?.map((prod: any, i: number) => ( */}
      <SingleItem
        // product={prod}
        setProducts={setProducts}
        products={products}
      />
      {/* ))} */}
    </ItemsStyle>
  );
};

export default Items;
