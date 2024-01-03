import styled from "styled-components";

export const HeroStyle = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  padding-top: 5rem;
  gap: 3rem;
  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
    img {
      width: 100%;
      height: auto;
    }

    .text {
      h2 {
        font-size: clamp(2rem, 4vw, 3.6rem);
        margin-bottom: 1rem;
        font-family: "Whyte-Bold";
      }
      p {
        font-size: clamp(1.5rem, 1vw, 1.7rem);
      }
    }
  }
  .badge {
    div {
      position: relative;
    }
  }

  @media (min-width: 768px) {
    .wrapper {
      flex-direction: row;
      img {
        width: 50%;
        max-width: 35rem;
      }
    }
  }
`;
