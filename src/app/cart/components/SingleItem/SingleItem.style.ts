import styled from "styled-components";

export const SingleItemStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  .labels {
    grid-column: span 2;
    h3:not(:first-child) {
      display: none;
    }
  }
  .line-item {
    grid-column-gap: 80px;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    border-top: 1px solid var(--black);
    -webkit-column-gap: 80px;
    -moz-column-gap: 80px;
    column-gap: 80px;
    display: grid;
    grid-column: span 2;
    grid-template-columns: 1fr 80px 140px 120px;
    padding: 20px 0;
    grid-column-gap: 10px;
    grid-row-gap: 20px;
    -webkit-column-gap: 10px;
    -moz-column-gap: 10px;
    column-gap: 10px;
    grid-template-columns: 1fr auto auto;
    row-gap: 20px;
    .item-details {
      grid-column-gap: 20px;
      grid-row-gap: 5px;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      -webkit-column-gap: 20px;
      -moz-column-gap: 20px;
      column-gap: 20px;
      display: grid;
      grid-template-columns: auto auto 1fr;
      row-gap: 5px;
      grid-column: span 3;
      .item-remove {
        grid-column-start: 3;
        grid-row: initial;
        margin-left: auto;
        font-size: 2rem;
        cursor: pointer;
      }
      img {
        grid-row: 1 / span 1;
        height: 80px;
        width: 80px;
        border-radius: 1rem;
        object-fit: cover;
      }
      h3 {
        align-self: auto;
        grid-row-start: 1;
      }
      .options-mobile {
        display: none;
      }
    }
    .quantity-wrap {
      display: flex;
      align-items: center;
      gap: 1rem;
      grid-column-start: 1;
      grid-row-start: 2;
      button {
        width: 30px;
        height: 30px;
        padding: 0;
      }
    }
  }

  @media (min-width: 1000px) {
    grid-template-columns: 1fr 1fr;
    font-size: 1.4rem;
    .labels {
      grid-column-gap: 80px;
      -webkit-column-gap: 80px;
      -moz-column-gap: 80px;
      column-gap: 80px;
      display: grid;
      grid-column: span 2;
      grid-template-columns: 1fr 80px 140px 120px;
      margin: 25px 0 20px;

      h3 {
        display: block !important;
      }
      h3:last-child {
        text-align: right;
      }
    }
    .line-item {
      padding-top: 0 !important;
      grid-column-gap: 80px;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      border-top: 1px solid var(--black);
      -webkit-column-gap: 80px;
      -moz-column-gap: 80px;
      column-gap: 80px;
      display: grid;
      grid-column: span 2;
      grid-template-columns: 1fr 80px 140px 120px;
      padding: 20px 0;
      .item-details {
        grid-column-gap: 20px;
        grid-row-gap: 5px;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-column-gap: 20px;
        -moz-column-gap: 20px;
        column-gap: 20px;
        display: grid;
        grid-template-columns: auto auto 1fr;
        row-gap: 5px;
        grid-row: 2 / 3;
        grid-column: 1 / 2;
        .item-remove {
          grid-row: 2 / 3;
          grid-column: 1 / 2;
        }
        img {
          grid-row: 2 / 3;
          width: 120px;
          height: 120px;
        }
        h3 {
          grid-row-start: 2;
        }
      }
      .individual-price {
        grid-column-start: 2;
        grid-row-start: 2;
      }
      .quantity-wrap {
        grid-column-start: 3;
        grid-row: 2 / 3;
      }
      .line-price {
        text-align: right;
        grid-column-start: 4 / 5;
        grid-row: 2 / 3;
      }
    }
  }
`;
