import styled from "styled-components";

export const CollectionStyle = styled.section`
  padding: 8rem 2rem;

  .wrapper {
    display: inline-flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.4rem;
    text-align: center;
    justify-content: center;
    font-size: clamp(1.9rem, 8vw, 3rem);
    span {
      width: fit-content;
      transition: all 0.3s;
      font-weight: 600;
      font-family: "Whyte-Bold";
    }
    img {
      width: 1.9rem;
      height: auto;
    }

    .layers,
    .components {
      text-decoration: underline;
      cursor: pointer;
    }

    &:hover {
      span:not(.layers, .components) {
        opacity: 0.5;
      }
    }
  }
  @media (min-width: 768px) {
    padding-block: 10rem;
  }
`;
