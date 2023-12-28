import React from "react";
import { ProductStyle } from "./Product.style";
import Image from "next/image";
import Link from "next/link";

type Props = {
  product: any;
};

const Product = ({ product }: Props) => {
  const hashedName = product.product_name
    .toLowerCase()
    .trim()
    .replace(/[\s_-]+/g, "-");

  return (
    <ProductStyle className={`${product.type} product`}>
      <Link
        href={{
          pathname: `/products/${hashedName}`,
          query: {
            id: product._id,
          },
        }}
      >
        <div className='images-wrapper'>
          <img
            src={product.pattern_image}
            className='pattern'
            alt=''
            width={900}
            height={900}
          />
          <img
            src={product.product_image}
            className='single-item'
            alt=''
            width={300}
            height={300}
          />
          <img
            src={product.main_image}
            alt=''
            className='main-pic'
            width={300}
            height={300}
          />
        </div>
        <div className='text-wrapper'>
          <div className='left'>
            {product.new && <span>New!</span>}
            <h3>{product.product_name}</h3>
          </div>
          <div className='price'>
            <h3>${product.price}</h3>
          </div>
        </div>
      </Link>
    </ProductStyle>
  );
};

export default Product;
