import Button from "@/components/Button/Button";
import { ProductType } from "@/types";
import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import React, { Dispatch, SetStateAction } from "react";

type Props = {
  product: any;
  products: ProductType[];
  setProducts: Dispatch<SetStateAction<never[]>>;
};

const Item = ({ product, products, setProducts }: Props) => {
  const removeProduct = (prod: ProductType) => {
    // @ts-expect-error
    setProducts(products.filter(el => el._id !== prod._id));
  };

  return (
    <div className='line-item'>
      <div className='item-details'>
        <Icon
          icon='carbon:close-outline'
          onClick={() => removeProduct(product)}
          className='item-remove'
        />
        <img src={product?.main_image} alt='' width={200} height={200} />
        <h3>{product.product_name}</h3>
      </div>
      <span className='individual-price'>${product.price}.00</span>
      <div className='quantity-wrap'>
        <Button
          onClick={() => {
            setProducts((prevProducts: any) =>
              prevProducts.map((el: any) =>
                el._id === product._id
                  ? { ...el, quantity: el.quantity > 1 ? el.quantity - 1 : 1 }
                  : el
              )
            );
          }}
          type='outline'
        >
          -
        </Button>
        <span>{product?.quantity}</span>
        <Button
          onClick={() => {
            setProducts((prevProducts: any) =>
              prevProducts.map((el: any) =>
                el._id === product._id
                  ? { ...el, quantity: el.quantity + 1 }
                  : el
              )
            );
          }}
          type='outline'
        >
          +
        </Button>
      </div>
      <span className='line-price'>
        ${product.quantity * Number(product.price)}.00
      </span>
    </div>
  );
};

export default Item;
