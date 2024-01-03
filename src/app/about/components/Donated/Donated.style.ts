import styled from "styled-components";

export const DonatedStyle = styled.section`
  .wrapper {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 1rem;
    h2 {
      font-size: clamp(2rem, 5vw, 3rem);
      font-family: "Whyte-Bold";
    }
    p,
    span {
      font-size: clamp(1.5rem, 1vw, 1.7rem);
    }
    span {
      font-family: "Whyte-Bold";
    }
  }

  @media (min-width: 768px) {
    .wrapper {
      flex-direction: row;
      gap: 0;
      margin-top: 3rem;
      .left {
        width: 50%;
        h2 {
          width: 80%;
        }
      }
      .right {
        width: 50%;
      }
    }
  }
`;
