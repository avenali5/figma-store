import { ProductType } from "@/types";
import Image from "next/image";
import React, { Dispatch, SetStateAction, useState } from "react";
import { SingleItemStyle } from "./SingleItem.style";
import { Icon } from "@iconify/react/dist/iconify.js";
import Button from "@/components/Button/Button";

type Props = {
  product: ProductType;
  products: ProductType[];
  setProducts: Dispatch<SetStateAction<never[]>>;
};

const SingleItem = ({ product, products, setProducts }: Props) => {
  // @ts-expect-error
  // const [quantity, setQuantity] = useState(product.quantity);

  const removeProduct = () => {
    // @ts-expect-error
    setProducts(products.filter(el => el._id !== product._id));
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
              onClick={removeProduct}
              className='item-remove'
            />
            {/* @ts-ignore */}
            <Image src={product.main_image} alt='' width={200} height={200} />
            {/* @ts-ignore */}
            <h3>{product.product_name}</h3>
            <div className='options-mobile'>mob</div>
          </div>
          {/* @ts-ignore */}
          <span className='individual-price'>${product.price}</span>
          <div className='quantity-wrap'>
            <Button onClick={() => {}} type='outline'>
              -
            </Button>
            <span>quant</span>
            <Button onClick={() => {}} type='outline'>
              +
            </Button>
          </div>
          <span className='line-price'>$4.00</span>
        </div>
      ))}
      <Image
        src='/assets/images/nice_checkout.svg'
        alt=''
        width={50}
        height={50}
      />
      <div className='totals'>totals</div>
    </SingleItemStyle>
  );
};

export default SingleItem;
