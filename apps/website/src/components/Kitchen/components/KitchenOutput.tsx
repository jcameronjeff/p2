import React, { useContext, useState, useEffect } from "react"
import { render as DomRender } from "react-dom"
import { format } from "prettier"
import parserHtml from "prettier/parser-html"
import parserBabel from "prettier/parser-babel"
import KitchenContext from "../KitchenContext"
import BrowserOnly from "@docusaurus/BrowserOnly"
import useIsBrowser from "@docusaurus/useIsBrowser"
import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment"
import CodeBlock from "@theme/CodeBlock"

let outputDom = null

if (ExecutionEnvironment.canUseDOM) {
  outputDom = document.createElement("div")
  DomRender(<></>, outputDom)
}

const prettierOptions = {
  parserName: "html",
  semi: false,
  plugins: [parserHtml, parserBabel],
}

const trimSemi = (str) => str.replace(/^;/, '')

const Output = (props) => {
  const [{ args }, {}] = useContext(KitchenContext)
  const [output, setOutput] = useState("")
  const { render } = props
  const isBrowser = useIsBrowser()

  useEffect(() => {
    if (isBrowser) {
      DomRender(<>{render(args)}</>, outputDom, () => {
        setTimeout(() => console.dir(outputDom.innerHTML), 1000)
        const formatted = format(outputDom.innerHTML, prettierOptions)
        setOutput(trimSemi(formatted))
      })
    }
  }, [outputDom, args])
  
  return (
    <BrowserOnly fallback={<div>Loading...</div>}>
      {() => (
        <CodeBlock className="kitchen__output" language="html">
          {output}
        </CodeBlock>
      )}
    </BrowserOnly>
  )
}

export default Output
