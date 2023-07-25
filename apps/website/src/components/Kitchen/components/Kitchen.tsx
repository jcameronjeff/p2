import React from 'react';
import { Provider as KitchenProvider } from "../KitchenContext";

import { Preview, Controls, Output } from "./index";

const Kitchen = (props) => {
  const { children, render = () => children, args, hideControls, targetSelector, ...defaultState } = props;

  return (
    <KitchenProvider defaultState={defaultState}>
      <div className="kitchen not-prose">
        <Preview render={render} />
        { args && <Controls />}
        <Output render={render} targetSelector={targetSelector} />
      </div>
    </KitchenProvider>
  );
};

export default Kitchen;
