import styled from "styled-components";

export const FaqStyle = styled.section`
  padding: 1rem;

  h2 {
    font-size: clamp(2rem, 5vw, 3rem);
    font-family: "Whyte-Bold";
    margin: 2rem 0 1rem;
  }
  .faq {
    margin: 3rem 0;

    h3 {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin: 0.5rem 0;
      font-size: clamp(1.3rem, 4vw, 1.6rem);
      font-family: "Whyte-Bold";
      img {
        width: 1.5rem;
      }
    }
    p {
      font-size: clamp(1.2rem, 1vw, 1.7rem);
    }
  }

  @media (min-width: 768px) {
    .wrapper {
      display: flex;
      .left {
        width: 50%;
        h2 {
          margin-top: 3rem;
          flex: 1;
          max-width: 30%;
        }
      }
      .faqs {
        width: 50%;
      }
    }
  }
`;
