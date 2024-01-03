"use client";
import React, { useEffect, useState } from "react";
import { HeaderStyle } from "./Header.style";
import Link from "next/link";
import Button from "../Button/Button";
import { Icon } from "@iconify/react/dist/iconify.js";
import { usePathname, useRouter } from "next/navigation";

const Header = () => {
  const [isMenu, setIsMenu] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [cartQuantity, setCartQuantity] = useState(0);
  const [scrolling, setScrolling] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");

  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const savedProducts = localStorage.getItem("products");
    const parsedProducts = JSON.parse(savedProducts!);
    setCartQuantity(parsedProducts ? parsedProducts.length : 0);
  }, []);

  useEffect(() => {
    const header = document.querySelector<any>(".header-wrapper");
    const handleScroll = () => {
      const currentScrollTop = window.scrollY;

      setScrolling(currentScrollTop > scrollTop);
      if (scrolling || scrollTop <= 9) {
        header.style.background = "none";
      } else {
        header.style.background = "white";
      }
      setScrollTop(currentScrollTop);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollTop]);

  useEffect(() => {
    if (isMenu) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [isMenu]);

  return (
    <HeaderStyle
      className={`${scrolling ? "hidden" : "visible"} header-container`}
    >
      <div className={`${isSearch ? "is-search" : ""} search-wrapper`}>
        <input
          type='search'
          placeholder='Search'
          onChange={e => setSearchTerm(e.target.value)}
          onKeyDown={e => {
            if (e.key === "Enter" && searchTerm)
              router.push(`/search?term=${searchTerm}`);
          }}
        />
      </div>
      <div className={`${isSearch ? "is-search" : ""} header-wrapper`}>
        <div className={`menu-wrapper ${isMenu ? "open" : ""}`}>
          <div className='content'>
            <Link href='/#shop' onClick={() => setIsMenu(!isMenu)}>
              <h3>Shop</h3>
            </Link>

            <Link href='/about'>
              <h3>About</h3>
            </Link>

            <ul>
              <li>Privacy Policy</li>
              <li>Terms of Sale</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
        <div className='left'>
          <Button type='outline' onClick={() => router.push("/#shop")}>
            SHOP
          </Button>
          <Button type='outline' onClick={() => router.push("/about")}>
            ABOUT
          </Button>
          <button
            className={`menu-burguer-button ${isMenu ? "active" : ""}`}
            onClick={() => setIsMenu(!isMenu)}
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </button>
          <button
            className='search-button'
            onClick={() => setIsSearch(!isSearch)}
          >
            <Icon icon='mdi:search' />
          </button>
        </div>
        <Link href='/'>
          <h3>THE FIGMA STORE</h3>
        </Link>
        <div className='right'>
          <div className='location'>
            <select name='' id=''>
              <option value=''>CANADA</option>
              <option value=''>JAPAN</option>
              <option value=''>UNITED KINGDOM</option>
              <option value='' selected>
                UNITED STATES
              </option>
              <option value=''>EUROPEAN UNION</option>
              <option value=''>I'M JUST BROWSING</option>
            </select>
            <Icon icon='mdi:location-outline' className='select-icon marker' />
            <Icon icon='mdi:chevron-down' className='select-icon chevron' />
          </div>
          <div className='cart'>
            <Button
              onClick={() => router.push("/cart")}
              type={pathname.includes("cart") ? "solid" : "outline"}
            >
              <span>CART</span>
              {cartQuantity}
            </Button>
          </div>
        </div>
      </div>
    </HeaderStyle>
  );
};

export default Header;
