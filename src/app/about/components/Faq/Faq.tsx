import React from "react";
import { FaqStyle } from "./Faq.style";

const Faq = () => {
  return (
    <FaqStyle>
      <div className='wrapper max-width'>
        <div className='left'>
          <h2>FAQ</h2>
        </div>
        <div className='faqs'>
          <div className='faq'>
            <h3>
              <img src='/assets/icons/about1.png' alt='' /> How does your
              apparel fit?
            </h3>
            <p>
              Our sizing is unisex. For a more tailored fit, we recommend that
              you size down.
            </p>
          </div>
          <div className='faq'>
            <h3>
              <img src='/assets/icons/about2.png' alt='' />
              Where do you ship?
            </h3>
            <p>
              We currently ship to the following countries: Austria, Belgium,
              Bulgaria, Croatia, Republic of Cyprus, Czech Republic, Denmark,
              Estonia, Finland, France, Greece, Germany, Hungary, Italy,
              Ireland, Latvia, Lithuania, Luxembourg, Malta, Netherlands,
              Poland, Portugal, Romania, Slovakia, Slovenia, Spain, Sweden,
              United Kingdom, Japan, Canada, and the United States. <br />
              <br /> We'll be working with our vendors to expand warehousing and
              shipping operations so that we can bring The Figma Store to more
              countries in the future. Stay tuned for updates and thank you for
              your understanding!
            </p>
          </div>
          <div className='faq'>
            <h3>
              <img src='/assets/icons/about3.png' alt='' /> When will I get my
              order?
            </h3>
            <p>
              Your order will ship within 10 business days. You’ll get an e-mail
              with the tracking info to follow it along the way. Shipping
              timelines will vary based on location, but you can expect your
              order to arrive 2-10 days after shipment.
            </p>
          </div>
          <div className='faq'>
            <h3>
              <img src='/assets/icons/about4.png' alt='' /> What if my package
              never came?
            </h3>
            <p>
              Reach out to thefigmastore@figma.com if you place an order and
              don’t receive a shipping notice within 5 business days OR if your
              order hasn’t arrived 10 days after it has shipped.
            </p>
          </div>
          <div className='faq'>
            <h3>
              <img src='/assets/icons/about5.png' alt='' /> Can I edit or cancel
              my order once it’s placed?
            </h3>
            <p>
              You are unable to edit your order once placed, but if you would
              like to cancel it, please connect with thefigmastore@figma.com.
            </p>
          </div>
          <div className='faq'>
            <h3>
              <img src='/assets/icons/about6.png' alt='' /> How do I contact
              support?
            </h3>
            <p>You can contact support by e-mailing thefigmastore@figma.com</p>
          </div>
        </div>
      </div>
    </FaqStyle>
  );
};

export default Faq;
