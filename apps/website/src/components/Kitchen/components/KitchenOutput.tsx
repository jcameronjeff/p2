import React, { useContext, useState, useEffect } from "react"
import { render as DomRender } from "react-dom"
import KitchenContext from "../KitchenContext"
import BrowserOnly from "@docusaurus/BrowserOnly"
import useIsBrowser from "@docusaurus/useIsBrowser"
import CodeBlock from "@theme/CodeBlock"

const Output = (props) => {
  const [{ args, outputDom, externalState }, { format, setOutputDom }] = useContext(KitchenContext)
  const [output, setOutput] = useState('')
  const [targetSelector, setTargetSelector] = useState(props.targetSelector)
  const { render } = props
  const isBrowser = useIsBrowser()

  useEffect(() => {
    if (!outputDom && isBrowser) {
      setOutputDom(document.createElement('div'))
    }
  }, [isBrowser, outputDom])

  useEffect(() => {
    if (props.targetSelector !== targetSelector) {
      setTargetSelector(props.targetSelector)
    }
  }, [props])

  useEffect(() => {
    if (isBrowser && outputDom) {
      DomRender(<>{render(args)}</>, outputDom, () => {
        const targetDom = outputDom.querySelector(targetSelector || null) || outputDom.firstChild
        setOutput(format(targetDom.outerHTML))
      })
    }
  }, [args, externalState, isBrowser, outputDom])
  
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
