import { ProductType } from "@/types";
import Image from "next/image";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { MobileGalleryStyle } from "./MobileGallery.style";

const MobileGallery = ({ product }: ProductType) => {
  const [emblaRef] = useEmblaCarousel();
  return (
    <MobileGalleryStyle>
      <div className='embla' ref={emblaRef}>
        <div className='embla__container'>
          {product?.gallery?.reverse().map((slide, i) => (
            <div className='embla__slide' key={i}>
              <img
                src={slide}
                alt=''
                width={300}
                height={400}
                //   style={slide.style}
              />
            </div>
          ))}
        </div>
      </div>
    </MobileGalleryStyle>
  );
};

export default MobileGallery;
