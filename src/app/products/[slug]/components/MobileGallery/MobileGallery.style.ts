import styled from "styled-components";

export const MobileGalleryStyle = styled.div`
  .embla {
    overflow: hidden;
  }
  .embla__container {
    display: flex;
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

    img {
      border-radius: 2rem;
      object-fit: cover;
      /* width: 100%;
      max-width: 470px; */
    }
  }

  @media (min-width: 1000px) {
    /* grid-column-gap: 20px;
    -webkit-column-gap: 20px;
    -moz-column-gap: 20px;
    column-gap: 20px;
    display: grid;
    grid-row: span 4;
    grid-template-columns: auto 1fr; */
    display: none;
  }
`;
