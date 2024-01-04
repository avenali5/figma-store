import React from "react";
import { FaqStyle } from "../Faq/Faq.style";

const CustomerCare = () => {
  return (
    <FaqStyle>
      <div className='wrapper max-width'>
        <div className='left'>
          <h2>CUSTOMER CARE</h2>
        </div>
        <div className='faqs'>
          <div className='faq'>
            <h3>
              {" "}
              <img src='/assets/icons/about7.png' alt='' /> Shipping
            </h3>
            <p>
              Once you’ve made a purchase, an e-mail confirmation will be sent
              to the e-mail address you provided. This e-mail acts as an invoice
              and includes your order number. <br />
              <br /> Once your order is placed, it’ll ship from our warehouse
              within 2-5 business days. Orders placed after 11:00 AM(EST) may be
              processed the next business day, and orders placed on weekends and
              holidays will be processed the following business day starting at
              8:00 AM(EST). During peak periods, processing times may exceed 2
              business days.
              <br />
              <br /> Depending on your location, your order will be shipping
              from the United Kingdom, Ireland, or the United States. You will
              not need to pay customs on your orders. Once your order has been
              shipped, you will receive an e-mail with your shipment’s tracking
              information, allowing you to keep tabs on the progress of your
              delivery.
            </p>
          </div>
          <div className='faq'>
            <h3>
              {" "}
              <img src='/assets/icons/about8.png' alt='' /> Returns
            </h3>
            <p>
              We currently do not accept returns and are unable to edit your
              order once placed. If you would like to cancel your order and
              replace it with a new one before it has shipped, please connect
              with thefigmastore@figma.com.
            </p>
          </div>
          <div className='faq'>
            <h3>
              {" "}
              <img src='/assets/icons/about9.png' alt='' /> Contact Us
            </h3>
            <p>You can contact support by emailing thefigmastore@figma.com.</p>
          </div>
        </div>
      </div>
    </FaqStyle>
  );
};

export default CustomerCare;
