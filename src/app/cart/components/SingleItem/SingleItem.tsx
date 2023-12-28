import { ProductType } from "@/types";
import Image from "next/image";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { SingleItemStyle } from "./SingleItem.style";
import { Icon } from "@iconify/react/dist/iconify.js";
import Button from "@/components/Button/Button";
import Checkout from "../Checkout/Checkout";
import Item from "../Item/Item";

type Props = {
  products: ProductType[];
  setProducts: Dispatch<SetStateAction<never[]>>;
};

const SingleItem = ({ products, setProducts }: Props) => {
  const totalQuantity = products.reduce(
    // @ts-ignore
    (sum, obj) => sum + obj.quantity * obj.price,
    0
  );

  const [total, setTotal] = useState(totalQuantity);

  useEffect(() => {
    setTotal(totalQuantity);
  }, [totalQuantity]);

  return (
    <SingleItemStyle className='single-item'>
      <div className='labels'>
        <h3>Item</h3>
        <h3>Price</h3>
        <h3>Qty</h3>
        <h3>Subtotal</h3>
      </div>
      {products?.map((product: any, i: number) => (
        <Item product={product} products={products} setProducts={setProducts} />
      ))}
      <Checkout total={total} />
    </SingleItemStyle>
  );
};

export default SingleItem;
