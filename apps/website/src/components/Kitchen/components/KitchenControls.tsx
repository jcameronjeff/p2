import React, { useContext } from "react";
import KitchenContext from "../KitchenContext";

const Controls = () => {
  const [{ argTypes, args }, { setArgValue }] = useContext(KitchenContext);

  const handleControlUpdate = (type) => (e) => {
    const { name } = e.target;

    switch (type) {
      case "boolean":
        setArgValue(name, e.target.checked);
        break;
      case "text":
        setArgValue(name, e.target.value);
        break;
      case "select":
        setArgValue(name, e.target.value);
        break;
      default:
        setArgValue(name, e.target.value);
    }
  };

  const makeControl = ({ type, name, value, options }) => {
    switch (type) {
      case "text":
        return (
          <input
            type="text"
            defaultValue={value}
            name={name}
            onChange={handleControlUpdate(type)}
          />
        );
      case "boolean":
        return (
          <input
            type="checkbox"
            name={name}
            onChange={handleControlUpdate(type)}
            checked={value || false}
          />
        );
      case "select":
        return (
          <select
            name={name}
            onChange={handleControlUpdate(type)}
            defaultValue={value}
            >
            {options.map((v, i) =>  
              <option key={i} value={v}>{v}</option> 
            )}
          </select>
        );
   
    }
  };

  return (
    <div className="kitchen__controls">
      {Object.keys(argTypes).map((name) => {
        const { control, label = null } = argTypes[name];

        return (
          <div className="p-3" key={name}>
            {label || name} {makeControl({ ...control, name, value: args[name] })}
          </div>
        );
      })}
    </div>
  );
};

export default Controls;
