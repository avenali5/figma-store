import styled from "styled-components";

export const MicroKeyboardStyle = styled.section`
  .wrapper {
    -webkit-box-align: end;
    -ms-flex-align: end;
    align-items: flex-end;
    aspect-ratio: 1125/2436;
    background: #000;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    position: relative;
    img {
      border-radius: 74px;
      height: 100%;
      left: 0;
      overflow: hidden;
      position: absolute;
      top: 0;
      width: 100%;
      z-index: 0;
      &.large {
        display: none;
      }
    }
    .text {
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      grid-gap: 20px;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -ms-flex-direction: column;
      flex-direction: column;
      gap: 20px;
      padding: 70px 50px 7rem;
      position: relative;
      text-align: center;
      z-index: 2;
      h2 {
        font-size: 2.3rem;
        font-family: "Whyte-Bold";
      }
      p {
        font-size: 1.5rem;
      }
      button {
        width: fit-content;
      }
    }
  }

  @media (min-width: 768px) {
    .wrapper {
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      aspect-ratio: 4320/2070;
      .text {
        max-width: 550px;
        padding: 40px 55px;
        text-align: left;
        h2 {
          font-size: 3.4rem;
        }
        p {
          max-width: 27rem;
          font-size: 1.9rem;
          margin: 0.5rem 0 1rem;
        }
        button {
          width: fit-content;
        }
      }
      img {
        &.large {
          display: block;
        }
        &.small {
          display: none;
        }
      }
    }
  }
`;
