import Image from "next/image";
import React from "react";
import { HeroStyle } from "./Hero.style";
import DonationBadge from "@/components/DonationBadge/DonationBadge";

const Hero = () => {
  return (
    <HeroStyle>
      <div className='wrapper max-width'>
        <Image
          src='/assets/images/about_hero.jpg'
          alt=''
          width={600}
          height={600}
        />
        <div className='text'>
          <h2>About</h2>
          <p>
            Welcome to the Figma Store, a collection of Figma apparel (layers)
            and accessories (components) designed for our community.
          </p>
        </div>
      </div>
      <div className='badge'>
        <DonationBadge />
      </div>
    </HeroStyle>
  );
};

export default Hero;
