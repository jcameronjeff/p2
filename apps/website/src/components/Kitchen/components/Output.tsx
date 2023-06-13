import React, { useContext, useState, useEffect } from "react";
import { render as DomRender } from "react-dom";
import { format } from "prettier";
import parserHtml from "prettier/parser-html";
import parserBabel from "prettier/parser-babel";
import KitchenContext from "../KitchenContext";
import BrowserOnly from "@docusaurus/BrowserOnly";
import useIsBrowser from "@docusaurus/useIsBrowser";
import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";
import CodeBlock from "@theme/CodeBlock";

let outputDom = null;

if (ExecutionEnvironment.canUseDOM) {
  outputDom = document.createElement("div");
  DomRender(<></>, outputDom);
}

const prettierOptions = {
  parserName: "html",
  plugins: [parserHtml, parserBabel],
};

const Output = (props) => {
  const [{ args }, {}] = useContext(KitchenContext);
  const [output, setOutput] = useState("");
  const { render } = props;
  const isBrowser = useIsBrowser();

  useEffect(() => {
    if (isBrowser) {
      DomRender(<>{render(args)}</>, outputDom, () => {
        setOutput(format(outputDom.outerHTML, prettierOptions));
      });
    }
  }, [outputDom, args]);
  return (
    <BrowserOnly fallback={<div>Loading...</div>}>
      {() => (
        <CodeBlock className="!m-0 !rounded-none" language="html">
          {output}
        </CodeBlock>
      )}
    </BrowserOnly>
  );
};

export default Output;
