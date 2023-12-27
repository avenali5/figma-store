"use client";
import Button from "@/components/Button/Button";
import React from "react";
import { MicroKeyboardStyle } from "./MicroKeyboard.style";
import Image from "next/image";

const MicroKeyboard = () => {
  return (
    <MicroKeyboardStyle>
      <div className='wrapper'>
        <div className='max-width'>
          <div className='text'>
            <h2>FIGMA X WORK LOUDER</h2>
            <p>Meet the limited edition Figma Creator Micro Keyboard</p>
            <Button type='solid' onClick={() => {}}>
              PREORDER
            </Button>
          </div>
        </div>
        <Image
          src='/assets/images/micro_keyboard_small.jpg'
          alt=''
          role='presentation'
          className='small'
          width={900}
          height={400}
        />
        <Image
          src='/assets/images/micro_keyboard_large.jpg'
          alt=''
          role='presentation'
          className='large'
          width={900}
          height={400}
        />
      </div>
    </MicroKeyboardStyle>
  );
};

export default MicroKeyboard;
