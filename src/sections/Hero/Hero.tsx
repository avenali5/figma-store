"use client";
import React from "react";
import { HeroStyle } from "./Hero.style";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import Link from "next/link";
import DonationBadge from "@/components/DonationBadge/DonationBadge";
import useEmblaCarousel from "embla-carousel-react";
import { slides } from "./slides";

const Hero = () => {
  const [emblaRef] = useEmblaCarousel({
    loop: true,
  });

  return (
    <HeroStyle>
      <div className='embla' ref={emblaRef}>
        <div className='embla__container'>
          {slides.map((slide: any, i) => (
            <div className='embla__slide' key={i}>
              <Link href='/'>
                <Image
                  src={`/assets/images/${slide.src}`}
                  alt=''
                  width='0'
                  height='0'
                  sizes='100vw'
                  style={slide.style}
                />
                <span className='description'>{slide.description}</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className='max-width'>
        <DonationBadge />
      </div>
    </HeroStyle>
  );
};

export default Hero;
