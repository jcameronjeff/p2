import { useReducer, useState } from "react";
import { format as prettyFormat } from "prettier"
import parserHtml from "prettier/parser-html"
import parserBabel from "prettier/parser-babel"

const SET_ARG_VALUE = "SET_ARG_VALUE";

export const initialState = {
  argTypes: {},
  args: {},
};

const sanitize = (risky, safe) => {
  const safeKeys = Object.keys(safe);

  return Object.keys(risky)
    .filter((key) => safeKeys.includes(key))
    .reduce((acc, key) => (acc[key] = risky[key]) && acc, safe);
};

const reducer = (state, action) => {
  const { payload, type } = action;

  switch (type) {
    case SET_ARG_VALUE:
      return {
        ...state,
        args: {
          ...state.args,
          ...payload,
        },
      };
    default:
      return state;
  }
};

const useKitchen = (defaultState = {}) => {
  const [outputDom, setOutputDom] = useState(null)
  const [state, dispatch] = useReducer(
    reducer,
    sanitize(defaultState, initialState)
  );

  const setArgValue = (name, value) => {
    console.log(name, value);
    dispatch({
      type: SET_ARG_VALUE,
      payload: {
        [name]: value,
      },
    });
  };

  const format = (str) => {
    const prettierOptions = {
      parserName: "html",
      semi: false,
      plugins: [parserHtml, parserBabel],
    }
    
    const trimSemi = (str) => str.replace(/^;/, '')

    const formatted = prettyFormat(str, prettierOptions)
    return trimSemi(formatted)
  }

  return [{...state, outputDom}, { format, setArgValue, setOutputDom }];
};

export default useKitchen;
