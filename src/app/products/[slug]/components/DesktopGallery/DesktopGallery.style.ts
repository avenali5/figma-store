import styled from "styled-components";

export const DesktopGalleryStyle = styled.div`
  display: none;

  @media (min-width: 1000px) {
    grid-column-gap: 20px;
    -webkit-column-gap: 20px;
    -moz-column-gap: 20px;
    column-gap: 20px;
    display: grid;
    grid-row: span 4;
    grid-template-columns: auto 1fr;
    padding: 1rem;
    .image-selector {
      grid-row-gap: 10px;
      display: grid;
      grid-template-columns: 100%;
      height: -webkit-fit-content;
      height: -moz-fit-content;
      height: fit-content;
      row-gap: 10px;
      button {
        height: 90px;
        width: 90px;
        border-radius: 1rem;
        overflow: hidden;
        cursor: pointer;
        border: 3px solid transparent;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top;
        }
        &.selected {
          border-color: var(--black);
        }
      }
    }
    .image-display {
      width: 100%;
      height: auto;
      min-height: 20rem;
      border-radius: 110px;
      overflow: hidden;
      position: relative;
      .loader {
        position: absolute;

        /* background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab); */
        background: linear-gradient(-45deg, #9753cc, #d74343, #4ac7db, #53d4a6);
        background-size: 400% 400%;
        animation: gradient 5s ease infinite;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
      }
      img {
        width: 100%;
        height: auto;
        object-fit: cover;
        &.loading {
          animation: load 1s infinite ease-out;
        }
      }
    }
  }
  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
  @keyframes load {
    0%,
    100% {
      filter: brightness(0.8);
    }
    50% {
      filter: brightness(1);
    }
  }
`;
