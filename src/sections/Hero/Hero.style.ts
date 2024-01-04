import styled from "styled-components";

export const HeroStyle = styled.section`
  background: var(--yellow);
  /* padding: 1rem; */
  position: relative;
  padding-top: 4rem;
  border-bottom: 4px solid var(--black);
  /* height: 30vh !important; */
  .embla {
    overflow: hidden;
    height: 100%;
  }
  .embla__container {
    display: flex;
    height: 100%;
  }
  .embla__slide {
    flex: 0 0 100%;
    min-width: 0;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    padding: 0 10px;
    position: relative;
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    height: 100%;
    img {
      height: 100%;
      width: auto;
      clip-path: inset(2px) !important;
    }
    .description {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: var(--white);
      color: var(--black);
      font-weight: 400;
      padding: 0.7rem 1.3rem;
      border-radius: 200px;
      opacity: 0;
      transition: all 0.3s;
      width: max-content;
      font-family: "Whyte-Bold";
    }
    &:hover {
      .description {
        opacity: 1;
      }
    }
  }
  .min-width {
    height: 100%;
  }
  .max-width div {
    transform: scale(0.7) translateY(50%);
    transform-origin: bottom right;
    right: 1rem;
  }

  @media (min-width: 1100px) {
    .embla {
      min-height: 40rem;
    }
    .embla__container {
      display: flex;
      height: 30rem;
    }
    .embla__slide {
      height: 40rem;
      a {
        height: 100%;
      }
      img {
        width: 100% !important;
        height: 100%;
      }
    }
    .max-width div {
      transform: scale(1) translateY(50%);
    }
  }
`;
