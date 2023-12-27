import { ProductType } from "@/types";
import Image from "next/image";
import React, { Dispatch, SetStateAction, useState } from "react";
import { SingleItemStyle } from "./SingleItem.style";
import { Icon } from "@iconify/react/dist/iconify.js";
import Button from "@/components/Button/Button";
import Checkout from "../Checkout/Checkout";

type Props = {
  products: ProductType[];
  setProducts: Dispatch<SetStateAction<never[]>>;
};

const SingleItem = ({ products, setProducts }: Props) => {
  // const [quantity, setQuantity] = useState(product.quantity);

  const removeProduct = (prod: ProductType) => {
    // @ts-expect-error
    setProducts(products.filter(el => el._id !== prod._id));
    console.log(products);
  };

  return (
    <SingleItemStyle className='single-item'>
      <div className='labels'>
        <h3>Item</h3>
        <h3>Price</h3>
        <h3>Qty</h3>
        <h3>Subtotal</h3>
      </div>
      {products?.map((product: any, i: number) => (
        <div className='line-item'>
          <div className='item-details'>
            <Icon
              icon='carbon:close-outline'
              onClick={() => removeProduct(product)}
              className='item-remove'
            />
            {/* @ts-ignore */}
            <Image src={product.main_image} alt='' width={200} height={200} />
            {/* @ts-ignore */}
            <h3>{product.product_name}</h3>
            <div className='options-mobile'>mob</div>
          </div>
          {/* @ts-ignore */}
          <span className='individual-price'>${product.price}.00</span>
          <div className='quantity-wrap'>
            <Button onClick={() => {}} type='outline'>
              -
            </Button>
            <span>{product.quantity}</span>
            <Button onClick={() => {}} type='outline'>
              +
            </Button>
          </div>
          <span className='line-price'>
            ${product.quantity * Number(product.price)}.00
          </span>
        </div>
      ))}
      <Checkout total={30} />
    </SingleItemStyle>
  );
};

export default SingleItem;
