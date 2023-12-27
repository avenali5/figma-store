"use client";
import React, { useEffect, useState } from "react";
import { ProductsStyle } from "./Products.style";
import Product from "@/components/Product/Product";
import axios from "axios";
import { ProductType } from "@/types";

const Products = ({ products }: { products: ProductType[] }) => {
  return (
    <ProductsStyle className='max-width' id='shop'>
      <div className='grid'>
        {products?.map((product, i) => (
          <Product product={product} key={i} />
        ))}
      </div>
    </ProductsStyle>
  );
};
export default Products;
