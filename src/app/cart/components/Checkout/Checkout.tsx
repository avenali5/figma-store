"use client";
import React, { useState } from "react";
import { CheckoutStyle } from "./Checkout.style";
import Image from "next/image";
import Button from "@/components/Button/Button";
import { useRouter } from "next/navigation";

type Props = {
  total: number;
};

const Checkout = ({ total }: Props) => {
  const router = useRouter();
  const [checks, setChecks] = useState({
    terms: false,
    privacy: false,
  });

  const handleCheckout = () => {
    if (checks.privacy && checks.terms) {
      router.push("/checkout");
    } else {
    }
  };

  return (
    <CheckoutStyle>
      <Image
        src='/assets/images/nice_checkout.svg'
        alt=''
        width={50}
        height={50}
      />
      <div className='right'>
        <div className='shipping'>
          <h3>Shipping</h3>
          <span className='price'></span>
        </div>
        <div className='shipping'>
          <h3>Total*</h3>
          <span className='price'>${total}</span>
        </div>
        <div className='update-cart'>
          <button>UPDATE CART</button>
        </div>
        <Button type='solid' onClick={handleCheckout}>
          CHECKOUT
        </Button>
        <div className='info'>
          <span className='check'>
            *Taxes and shipping collected at checkout
          </span>
          <div className='check'>
            <input
              type='checkbox'
              name='terms'
              id='terms'
              checked={checks.terms}
            />
            <label htmlFor='terms'>
              By ticking this box, you confirm your agreement to our Figma{" "}
              <span className='underline'>Store Terms of Sale</span>
            </label>
          </div>
          <div className='check'>
            <input
              type='checkbox'
              name='privacy'
              id='privacy'
              checked={checks.privacy}
            />
            <label htmlFor='privacy'>
              By ticking this box, you agree to our{" "}
              <span className='underline'>Privacy Policy</span>
            </label>
          </div>
          <div className='check'>
            <span>
              By clicking on the “Checkout” button you agree that you have read
              and accept our <span className='underline'>Terms of Sale</span>.
            </span>
          </div>
        </div>
      </div>
    </CheckoutStyle>
  );
};

export default Checkout;
