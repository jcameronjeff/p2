import React, { createContext } from "react";
import useKitchen, { initialState } from "./useKitchen";

const Context = createContext([initialState, {}]);

export const Provider = ({ defaultState, ...props }) => {
  const [state, fns] = useKitchen({ ...defaultState });

  return <Context.Provider {...props} value={[state, fns]} />;
};

export default Context;
