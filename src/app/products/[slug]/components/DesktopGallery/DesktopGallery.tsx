import React, { useEffect, useState } from "react";
import { DesktopGalleryStyle } from "./DesktopGallery.style";
import { ProductType } from "@/types";
import Image from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";

const DesktopGallery = ({ gallery }: { gallery: string[] }) => {
  const [imageFeatured, setImageFeatured] = useState(gallery?.[0]);
  const [buttonSelected, setButtonSelected] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImage = (img: string, index: number) => {
    setButtonSelected(index);
    setImageFeatured(img);
    setImageLoaded(false);
  };

  useEffect(() => {
    setImageFeatured(gallery?.[0]);
  }, [gallery]);

  return (
    <DesktopGalleryStyle>
      <div className='image-selector'>
        {gallery?.reverse().map((slide, i) => (
          <button
            className={`${buttonSelected === i ? "selected" : ""}`}
            key={i}
            onClick={() => handleImage(slide, i)}
          >
            <img src={slide} alt='' width={300} height={400} />
          </button>
        ))}
      </div>
      <div className='image-display'>
        {/* {!imageLoaded && <div className='loader' />} */}
        <img
          src={imageFeatured}
          className={!imageLoaded ? "loading" : ""}
          alt=''
          width={500}
          height={500}
          onLoad={() => {
            setImageLoaded(true);
          }}
        />
      </div>
    </DesktopGalleryStyle>
  );
};

export default DesktopGallery;
