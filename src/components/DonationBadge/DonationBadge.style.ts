import styled from "styled-components";

export const DonationBadgeStyle = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  transform: translateY(50%);
  z-index: 1;

  g {
    .letters {
      transform: rotate(360deg);
      transform-origin: center center;
      animation: rotate 10s linear 0s infinite;
    }
    .yellow-hand {
      transition: all 0.3s;
    }
    .purple-hand {
      transform: translate(0.1rem, 0rem) scale(0.8);
      transform-origin: right bottom;
      transition: all 0.3s;
      opacity: 0;
    }
    .lines {
      transform: scale(0.8);
      opacity: 0;
      transform-origin: center center;
      transition: all 0.3s;
    }
  }

  &:hover {
    g {
      .purple-hand {
        transform: translate(0, 0) scale(1);
        opacity: 1;
      }
      .yellow-hand {
        transform: translateX(-0.5rem);
      }
      .lines {
        transform: scale(1);
        opacity: 1;
      }
    }
  }

  @keyframes rotate {
    from {
      -webkit-transform: rotate(-360deg);
    }
    to {
      transform: rotate(0deg);
    }
  }
`;
