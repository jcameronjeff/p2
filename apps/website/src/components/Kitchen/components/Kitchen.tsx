import React from 'react';
import { Provider as KitchenProvider } from "../KitchenContext";

import { Preview, Controls, Output } from "./index";

const Kitchen = (props) => {
  const { render, ...defaultState } = props;

  return (
    <KitchenProvider defaultState={defaultState}>
      <div className="kitchen">
        <div className="kitchen__counter not-prose">
          <Preview render={render} />
          <Controls />
          <Output render={render} />
        </div>
      </div>
    </KitchenProvider>
  );
};

export default Kitchen;
