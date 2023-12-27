import styled from "styled-components";

export const FooterStyle = styled.footer`
  background: rgb(199, 185, 255);
  .footer-container {
    margin-left: auto;
    margin-right: auto;
    max-width: 1280px;
    padding: 1rem;
    grid-column-gap: 60px;
    grid-row-gap: 40px;
    -webkit-column-gap: 60px;
    -moz-column-gap: 60px;
    -webkit-column-gap: 60px;
    column-gap: 60px;
    display: grid;
    grid-template-columns: auto 2fr 1fr auto;
    row-gap: 40px;
    grid-column-gap: 20px;
    -webkit-column-gap: 20px;
    -moz-column-gap: 20px;
    column-gap: 20px;
    grid-template-columns: 2fr 1fr auto;
    .logo {
      grid-column: span 3;
      grid-row: initial;
      margin: 0 auto;
    }
    > h3 {
      grid-column: span 2;
      font-size: 2.4rem;
    }
    ul {
      font-size: 1.1rem;
      line-height: 2;
      font-weight: bold;
      li {
        cursor: pointer;
        margin: 0.3rem 0;
      }
    }
    .footer-secondary {
      grid-column: initial;
    }
    .footer-socials {
      grid-column: 2 / span 2;
      text-transform: uppercase;
    }
    button {
      grid-column-start: 3;
      grid-row-start: 2;
      margin-left: auto;
      cursor: pointer;
    }
  }
  .marquee {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin-top: 20px;
    max-width: 100vw;
    overflow-x: hidden;
    padding-bottom: 5px;
    gap: 1rem;
    .tape {
      -webkit-animation: marquee 15s linear infinite;
      animation: marquee 15s linear infinite;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      white-space: nowrap;
      font-size: 1.6rem;
      text-transform: uppercase;
      gap: 1rem;
      align-items: center;
      span {
        font-family: "Whyte-Bold";
      }
      img {
        width: 1.3rem;
        height: auto;
      }
    }
  }

  @media (min-width: 768px) {
    .footer-container {
      grid-column-gap: 60px;
      grid-row-gap: 40px;
      -webkit-column-gap: 60px;
      -moz-column-gap: 60px;
      column-gap: 60px;
      display: grid;
      grid-template-columns: auto 2fr 1fr auto;
      row-gap: 40px;
      padding: 5rem;
      .logo {
        grid-row: span 2;
        grid-column: unset;
      }
      > h3 {
        grid-column: unset;
      }
      .footer-secondary {
        grid-column: span 2;
      }
      .footer-socials {
        grid-column-gap: 30px;
        grid-row-gap: 20px;
        align-self: center;
        -webkit-column-gap: 30px;
        -moz-column-gap: 30px;
        column-gap: 30px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        /* grid-column: span 2; */
        row-gap: 20px;
        font-size: 1.6rem;
        a {
          font-family: "Whyte-Light";
        }
      }
      button {
        grid-column: unset;
        grid-row: unset;
      }
    }
  }

  @keyframes marquee {
    0% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
    }

    100% {
      -webkit-transform: translateX(-100%);
      transform: translateX(-100%);
    }
  }
`;
