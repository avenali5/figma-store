import styled from "styled-components";

export const HeaderStyle = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  transition: transform 0.3s ease;
  .header-wrapper {
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: all 0.3s;
    position: relative;
    .left {
      display: flex;
      align-items: center;
      gap: 1rem;
      button {
        font-size: 0.8rem;
        width: fit-content;
      }
      .outline {
        display: none;
      }
      .search-button {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.3rem;
        cursor: pointer;
      }
      .menu-burguer-button {
        height: 36px;
        width: 36px;
        border: 2px solid var(--black);
        border-radius: 200px;
        position: relative;
        padding: 10px;
        cursor: pointer;
        span {
          background: #000;
          display: block;
          height: 2px;
          left: 50%;
          opacity: 1;
          position: absolute;
          -webkit-transform: rotate(0deg) translateX(-50%);
          transform: rotate(0deg) translateX(-50%);
          width: 50%;
          transition: all 0.3s;
          &:nth-child(1) {
            top: 10px;
          }
          &:nth-child(2) {
            top: 15px;
          }
          &:nth-child(3) {
            top: 15px;
          }
          &:nth-child(4) {
            top: 20px;
          }
        }
        &.active {
          span {
            &:nth-child(1),
            &:nth-child(4) {
              opacity: 0;
            }
            &:nth-child(2) {
              transform: rotate(45deg) translateX(-50%);
              -webkit-transform: rotate(45deg) translateX(-50%);
              transform-origin: 0px center;
            }
            &:nth-child(3) {
              transform: rotate(-45deg) translateX(-50%);
              transform: rotate(-45deg) translateX(-50%);
              transform-origin: 0 center;
            }
          }
        }
      }
    }
    a {
      h3 {
        font-family: "Whyte-Bold";
        letter-spacing: 0.567px;
        text-align: center;
      }
    }
    .right {
      display: flex;
      align-items: center;
      gap: 1rem;
      .location {
        position: relative;
        select {
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
          background-color: transparent;
          background-position-x: calc(100% - 15px);
          background-position-y: 55%;
          background-repeat: no-repeat;
          border: 2px solid var(--black);
          border-radius: 30px;
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
          cursor: pointer;
          display: block;
          font-size: 0.875rem;
          font-weight: 700;
          padding: 10px 40px 9px 20px;
          text-transform: uppercase;
          -webkit-transition: color 0.3s, background-color 0.3s;
          -o-transition: color 0.3s, background-color 0.3s;
          transition: color 0.3s, background-color 0.3s;

          display: none;
        }
        .select-icon {
          /* position: absolute;
          right: 1rem;
          top: 50%;
          transform: translateY(-50%); */
        }
        .marker {
          font-size: 1.5rem;
        }
        .chevron {
          display: none;
        }
      }
      .cart {
        button {
          width: fit-content;
          padding: 0.5rem 1.1rem;
          font-size: 0.9rem;
          span {
            display: none;
          }
        }
      }
    }
    &.is-search {
      transform: translateY(4rem);
    }
    .menu-wrapper {
      position: absolute;
      width: 100%;
      background-color: var(--white);
      left: 0;
      top: 0;
      height: 100vh;
      overflow: hidden;
      z-index: -1;
      transition: opacity 0.15s ease-out;
      opacity: 0;
      pointer-events: none;
      .content {
        /* padding: 6rem 1rem; */
        transform: translate(1.5rem, 7rem);
        h3 {
          font-size: 2.7rem;
          font-family: "Whyte-Bold";
          margin-bottom: 2rem;
        }
        ul {
          margin-top: 5rem;
          font-size: 1.3rem;
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }
      }
      &.open {
        opacity: 1;
        pointer-events: all;
      }
    }
  }
  .search-wrapper {
    position: absolute;
    top: 0;
    width: 100%;
    transform: translateY(-100%);
    transition: all 0.3s;
    background: var(--white);
    border-bottom: 4px inset var(--black);
    input {
      padding: 1rem;
      width: 100%;
      outline: none;
      border: none;
      font-weight: bold;
      font-size: 1.8rem;
      &::placeholder {
        color: var(--black);
      }
    }
    &.is-search {
      transform: translateY(0) !important;
    }
  }

  &.visible {
    transform: translateY(0);
  }

  &.hidden {
    transform: translateY(-200%);
  }

  @media (min-width: 1000px) {
    .header-wrapper {
      .left {
        .menu-burguer-button {
          display: none;
        }
        .outline {
          display: flex;
          width: fit-content;
        }
      }
      .right {
        .location {
          select {
            display: flex;
          }
          .chevron {
            display: block;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            right: 1rem;
            font-size: 1.4rem;
          }
          .marker {
            display: none;
          }
        }
        .cart {
          button {
            display: flex;
            align-items: center;
            gap: 1rem;
            span {
              display: flex;
            }
          }
        }
      }
    }
  }
`;
