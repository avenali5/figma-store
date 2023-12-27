import React from "react";
import { LayoutStyle } from "./Layout.style";
import Gallery from "../Gallery/Gallery";
import ProductInfo from "../ProductInfo/ProductInfo";
import Sizes from "../Sizes/Sizes";
import { ProductType } from "@/types";
import MobileGallery from "../MobileGallery/MobileGallery";
import DesktopGallery from "../DesktopGallery/DesktopGallery";

type Props = ProductType & {
  isLoading: boolean;
};

const ProductLayout = ({ product, isLoading }: Props) => {
  const formattedDescription = product?.description?.replace(/\n/g, "<br />");

  return (
    <LayoutStyle className='max-width'>
      <DesktopGallery gallery={product?.gallery} />
      <span className='tag padding-inline'>{product?.tags?.[0]}</span>
      <h2 className='padding-inline'>{product?.product_name}</h2>
      <MobileGallery product={product} />
      <Sizes product={product} />
      <p
        dangerouslySetInnerHTML={{ __html: formattedDescription }}
        className='description padding-inline'
      />
    </LayoutStyle>
  );
};

export default ProductLayout;
