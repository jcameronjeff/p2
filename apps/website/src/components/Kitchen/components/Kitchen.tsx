import React from 'react';
import { Provider as KitchenProvider } from "../KitchenContext";

import { Preview, Controls, Output } from "./index";

const Kitchen = (props) => {
  const { render, ...defaultState } = props;

  return (
    <KitchenProvider defaultState={defaultState}>
      <div className="flex-col my-6 min-w-[500px] mx-auto ">
        <h2 className='my-2'>Developer Kitchen</h2>
        <div className="flex flex-col border rounded border-primary-dark">
          <Preview render={render} />
          <Controls />
          <Output render={render} />
        </div>
      </div>
    </KitchenProvider>
  );
};

export default Kitchen;
