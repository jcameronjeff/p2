import React, { useContext } from "react";
import KitchenContext from "../KitchenContext";

const Preview = (props) => {
  const [{ args }, {}] = useContext(KitchenContext);
  const { render } = props;

  return <div className="kitchen__preview">{render(args)}</div>;
};

export default Preview;
