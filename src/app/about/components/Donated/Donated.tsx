import React from "react";
import { DonatedStyle } from "./Donated.style";

const Donated = () => {
  return (
    <DonatedStyle>
      <div className='wrapper max-width'>
        <div className='left'>
          <h2>100% OF PROCEEDS ARE DONATED</h2>
        </div>
        <div className='right'>
          <p>
            Any and all profits we generate from the store will be used to
            purchase carbon removal credits via reforestation from TIST (The
            International Small Group and Tree Planting Program). TIST is an
            innovative time-tested reforestation program that supports
            subsistence farmers in Kenya, Uganda, and Tanzania to tackle
            sustainable development and climate change through education and
            tree planting.
          </p>
          <span>Learn more about TIST ↗</span>
        </div>
      </div>
    </DonatedStyle>
  );
};

export default Donated;
