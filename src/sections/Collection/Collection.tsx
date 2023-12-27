"use client";
import Image from "next/image";
import React, { Dispatch, SetStateAction } from "react";
import { CollectionStyle } from "./Collection.style";

type Props = {
  setType: Dispatch<SetStateAction<string>>;
};

const Collection = ({ setType }: Props) => {
  return (
    <CollectionStyle className='max-width'>
      <div className='wrapper'>
        <span>FIGMA'S</span>
        <Image
          src='/assets/icons/purple_star.svg'
          alt=''
          role='presentation'
          width={10}
          height={10}
        />
        <span>COLLECTION</span>
        <Image
          src='/assets/icons/red_boomerang.svg'
          alt=''
          role='presentation'
          width={10}
          height={10}
        />
        <span>OF</span>
        <span className='layers' onClick={() => setType("layers")}>
          LAYERS
        </span>
        <Image
          src='/assets/icons/red_thunder.svg'
          alt=''
          role='presentation'
          width={10}
          height={10}
        />
        <span>AND</span>
        <Image
          src='/assets/icons/green_four.png'
          alt=''
          role='presentation'
          width={90}
          height={90}
        />
        <span className='components' onClick={() => setType("components")}>
          COMPONENTS
        </span>
        <Image
          src='/assets/icons/yellow_star.svg'
          alt=''
          role='presentation'
          width={10}
          height={10}
        />
        <span>FOR YOU</span>
        <Image
          src='/assets/icons/purple_clip.png'
          alt=''
          role='presentation'
          width={10}
          height={10}
        />
        <span>AND</span>
        <Image
          src='/assets/icons/yellow_line.svg'
          alt=''
          role='presentation'
          width={10}
          height={10}
        />
        <span>YOUR</span>
        <Image
          src='/assets/icons/green_triangle.png'
          alt=''
          role='presentation'
          width={90}
          height={90}
        />
        <span>FRIENDS</span>
      </div>
    </CollectionStyle>
  );
};

export default Collection;
