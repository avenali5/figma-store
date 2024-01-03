import styled from "styled-components";

export const ProductStyle = styled.div`
  width: 100%;
  .images-wrapper {
    position: relative;
    overflow: hidden;
    border-radius: 2rem;
    height: 0;
    padding-bottom: 133%;
    width: 100%;
    border: 2px solid transparent;
    transition: all 0.3s;
    img {
      width: 100%;
      object-fit: cover;
      transition: all 0.3s;
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
    }
    .loader {
      position: absolute;
      height: 100%;
      width: 100%;
      top: 0;
      left: 0;
      background: lightgray;
      z-index: 2;
    }
  }
  .text-wrapper {
    display: flex;
    justify-content: space-between;
    margin-top: 5px;
    .left {
      font-size: 0.9rem;
    }
    .price {
      font-size: 0.8rem;
      h3 {
        font-family: "Whyte-Light";
      }
    }
  }
  &.large {
    grid-column: span 2;
    grid-row: span 2;
  }
  &:hover {
    .images-wrapper {
      border-color: var(--black);
      .main-pic {
        opacity: 0;
      }
    }
  }
`;
