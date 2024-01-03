"use client";
import React, { useState } from "react";
import { CheckoutStyle } from "./Checkout.style";
import Image from "next/image";
import Button from "@/components/Button/Button";
import { useRouter } from "next/navigation";
import Modal from "@/components/Modal/Modal";

type Props = {
  total: number;
};

const Checkout = ({ total }: Props) => {
  const [isModal, setIsModal] = useState(false);
  const [privacyError, setPrivacyError] = useState(false);
  const [termsError, setTermsError] = useState(false);
  const [checks, setChecks] = useState({
    terms: false,
    privacy: false,
  });

  const handleCheckout = () => {
    if (!checks.privacy) {
      setPrivacyError(true);
    }
    if (!checks.terms) {
      setTermsError(true);
    }
    if (checks.privacy && checks.terms) {
      setIsModal(true);
    }
  };

  const handleChange = (e: any) => {
    // @ts-ignore
    setChecks({ ...checks, [e.target.name]: !checks[e.target.name] });
  };

  return (
    <CheckoutStyle className='checkout'>
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
          <span className='price'>${total}.00</span>
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
              onChange={handleChange}
            />
            <label
              htmlFor='terms'
              className={termsError && !checks.terms ? "error" : ""}
            >
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
              onChange={handleChange}
            />
            <label
              htmlFor='privacy'
              className={privacyError && !checks.privacy ? "error" : ""}
            >
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
      {isModal && (
        <Modal onClose={() => setIsModal(false)}>
          <div>
            <h3>This projects ends here!</h3>
            <p>
              The checkout is under construction yet. Stay tuned for future
              updates.
            </p>
          </div>
        </Modal>
      )}
    </CheckoutStyle>
  );
};

export default Checkout;
