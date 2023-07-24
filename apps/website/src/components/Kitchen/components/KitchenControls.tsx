import React, { useContext } from "react";
import clsx from 'clsx';
import KitchenContext from "../KitchenContext";

const Controls = () => {
  const [{ argTypes, args }, { setArgValue }] = useContext(KitchenContext);

  const handleControlUpdate = (type) => (e) => {
    const { name } = e.target;

    switch (type) {
      case "array":
        setArgValue(name, e.target.value.split(',').map(v => v.trim()));
        break;
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

  const makeControl = ({ type, name, value, options, ...args }) => {
    switch (type) {
      case "array":
        return (
          <input
            {...args}
            type="text"
            defaultValue={value.join(', ')}
            name={name}
            onChange={handleControlUpdate(type)}
          />
        );
      case "text":
        return (
          <input
            {...args}
            type="text"
            defaultValue={value}
            name={name}
            onChange={handleControlUpdate(type)}
          />
        );
      case "boolean":
        return (
          <input
            {...args}
            type="checkbox"
            name={name}
            onChange={handleControlUpdate(type)}
            checked={value || false}
          />
        );
      case "select":
        return (
          <select
            {...args}
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
        const { control, label = null, requires } = argTypes[name];

        if (requires && !requires(args)) {
          return null
        }

        return (
          <div className="p-3" key={name}>
            <label className={clsx( !label && 'capitalize' )}>{label || name}
              <span className="ml-2">
                {makeControl({ ...control, name, value: args[name] })}
              </span>
            </label>
          </div>
        );
      })}
    </div>
  );
};

export default Controls;
