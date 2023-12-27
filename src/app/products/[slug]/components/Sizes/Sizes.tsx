import Button from "@/components/Button/Button";
import { ProductType } from "@/types";
import React, { useState } from "react";
import { SizesStyle } from "./Sizes.style";
import { useRouter } from "next/navigation";

const Sizes = ({ product }: ProductType) => {
  const [quantity, setQuantity] = useState(1);
  const router = useRouter();

  const addToCart = () => {
    const savedProducts = localStorage.getItem("products");

    if (savedProducts) {
      localStorage.setItem(
        "products",
        JSON.stringify([...JSON.parse(savedProducts), { ...product, quantity }])
      );
    } else {
      localStorage.setItem(
        "products",
        JSON.stringify([{ ...product, quantity }])
      );
    }

    router.push("/cart");
  };

  return (
    <SizesStyle className='padding-inline'>
      {product?.tags?.[0] === "Layers" && (
        <div className='inputs'>
          <div>
            <input type='radio' name='size' id='s' />
            <label htmlFor='s'>S</label>
          </div>
          <div>
            <input type='radio' name='size' id='m' />
            <label htmlFor='m'>M</label>
          </div>
          <div>
            <input type='radio' name='size' id='l' />
            <label htmlFor='l'>L</label>
          </div>
          <div>
            <input type='radio' name='size' id='xl' />
            <label htmlFor='xl'>XL</label>
          </div>
        </div>
      )}

      <div className='quantity'>
        <button
          className='quantity-button'
          onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
        >
          -
        </button>
        <span>{quantity}</span>
        <button
          className='quantity-button'
          onClick={() => setQuantity(quantity + 1)}
        >
          +
        </button>
      </div>

      <Button onClick={addToCart} type='outline'>
        ADD ${quantity * Number(product?.price)}
      </Button>
    </SizesStyle>
  );
};

export default Sizes;
