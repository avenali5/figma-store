import styled from "styled-components";

export const CheckoutStyle = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 3rem;
  padding: 0 1rem 2rem;
  grid-column: 1 / 3;
  border-top: 1px solid var(--black);
  img {
    width: 40%;
    max-width: 13rem;
    height: fit-content;
  }
  .right {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding-top: 2rem;
    max-width: 20rem;
    button {
      width: fit-content;
    }
    .shipping,
    .total {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      h3 {
        align-self: flex-start;
        flex: 2;
        margin-left: 0;
      }
    }
    .solid {
      align-self: end;
    }
    .update-cart {
    }
    .info {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      * {
        font-size: 0.8rem;
        font-weight: 600;
      }
      .check {
        text-align: right;
        input {
          margin-right: 0.2rem;
          transform: translateY(0.1rem);
        }
        label {
          /* font-size: 0.8rem; */
        }
      }
    }
  }
`;
