import styled from "styled-components";

export const SizesStyle = styled.div`
  margin: 2rem 0;
  .inputs {
    display: flex;
    gap: 0.4rem;
  }

  input {
    display: none;
  }
  label,
  .quantity-button {
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    align-items: center;
    border: 2px solid;
    border-radius: 50%;
    cursor: pointer;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    font-size: 1rem;
    font-weight: 700;
    justify-content: center;
    opacity: 1;
    padding-top: 2px;
    -webkit-transition: background-color 0.3s, color 0.3s;
    -o-transition: background-color 0.3s, color 0.3s;
    transition: background-color 0.3s, color 0.3s;
    height: 42px;
    width: 42px;
    &:hover {
      background-color: var(--black);
      color: var(--white);
    }
  }
  input:checked + label {
    background-color: #000;
    border-color: #000;
    color: #fff;
  }
  .quantity {
    display: flex;
    align-items: center;
    margin-top: 1rem;
    gap: 2rem;
    span {
      font-weight: 700;
    }
    button {
      font-size: 1.6rem;
      font-weight: 300;
    }
  }
  button.outline {
    margin-top: 2rem;
  }

  @media (min-width: 1000px) {
    margin-top: 1rem;
  }
`;
