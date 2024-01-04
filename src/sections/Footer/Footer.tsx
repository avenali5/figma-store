"use client";
import React, { useEffect, useState } from "react";
import { FooterStyle } from "./Footer.style";
import Tape from "./Tape";
import { colors, logos } from "./logos";

const Footer = () => {
  const [background, setBackground] = useState("");
  const [logo, setLogo] = useState("");

  const getRandomElement = (arr: any) => {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
  };

  useEffect(() => {
    const generatedBackground = getRandomElement(colors);
    setBackground(generatedBackground);
  }, []);

  useEffect(() => {
    if (logo.includes(background)) {
      const generatedLogo = getRandomElement(logos);
      setLogo(generatedLogo);
    }
  }, [background, logo]);

  return (
    <FooterStyle style={{ background }}>
      <div className='footer-container contained'>
        <div
          className='logo'
          data-rvl=''
          style={{
            visibility: "visible",
            opacity: 1,
            transform:
              " matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)",
            transition: "opacity 0.5s cubic-bezier(0.5, 0, 0, 1) 0s",
          }}
        >
          <div dangerouslySetInnerHTML={{ __html: logo }} />
        </div>

        <h3
          className='text'
          data-rvl=''
          style={{
            visibility: "visible",
            opacity: 1,
            transform:
              "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)",
            transition: "opacity 0.5s cubic-bezier(0.5, 0, 0, 1) 0s",
          }}
        >
          OBJECTS
          <br />
          THAT INSPIRE.
        </h3>

        <ul
          className='footer-secondary'
          data-rvl=''
          style={{
            visibility: "visible",
            opacity: 1,
            transform:
              "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)",
            transition: "opacity 0.5s cubic-bezier(0.5, 0, 0, 1) 0s",
          }}
        >
          <li className=''>Privacy Policy</li>
          <li className=''>Terms of Sale</li>
          <li className=''>Contact Us</li>
        </ul>

        <ul
          className='footer-socials'
          data-rvl=''
          style={{
            visibility: "visible",
            opacity: 1,
            transform:
              "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)",
            transition: "opacity 0.5s cubic-bezier(0.5, 0, 0, 1) 0s",
          }}
        >
          <li>
            <a href='https://figma.com' className='social-link h3'>
              Figma ↗
            </a>
          </li>
          <li>
            <a href='https://twitter.com/figma' className='social-link h3'>
              Twitter
            </a>
          </li>
          <li>
            <a
              href='https://www.instagram.com/figma'
              className='social-link h3'
            >
              Instagram
            </a>
          </li>
          <li>
            <a
              href='https://www.youtube.com/c/Figmadesign'
              className='social-link h3'
            >
              YouTube
            </a>
          </li>
        </ul>

        <button
          aria-label='go up'
          className='scroll-up'
          data-rvl=''
          style={{
            visibility: "visible",
            opacity: 1,
            transform:
              "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)",
            transition: "opacity 0.5s cubic-bezier(0.5, 0, 0, 1) 0s",
          }}
        >
          <svg
            width='50'
            height='50'
            viewBox='0 0 50 50'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M25 50C38.8071 50 50 38.8071 50 25C50 11.1929 38.8071 0 25 0C11.1929 0 0 11.1929 0 25C0 38.8071 11.1929 50 25 50ZM26.136 37.416H23.064L23.064 18.792C22.168 19.72 21.304 20.584 20.408 21.48L17.144 24.776L15 22.6L24.6 13L34.2 22.6L32.056 24.776L28.824 21.48C28.5254 21.1814 28.2267 20.8863 27.9281 20.5912C27.3307 20.0009 26.7334 19.4107 26.136 18.792V37.416Z'
              fill='black'
            ></path>
          </svg>
        </button>
      </div>
      <div className='marquee'>
        <Tape />
        <Tape />
      </div>
    </FooterStyle>
  );
};

export default Footer;
