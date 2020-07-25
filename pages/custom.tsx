// import initPopup from "../components/PopUp"
// import initWc from "../components/WordsCount"
import { useEffect } from "react"
// import "road-dropdown"

namespace JSX {
  interface IntrinsicElements {
    "road-dropdown": any;
  }
}

export default FunctionalComponent


/**
 * @see https://dev.to/swyx/how-to-use-web-components-with-next-js-and-typescript-4gg1
 * @see https://github.com/vercel/next.js/issues/11619
 * @see https://www.robinwieruch.de/react-web-components
 */
function FunctionalComponent() {
  useEffect(() => import("road-dropdown"), [])
  return <>
    <road-dropdown
      label="label"
      option="option"
    />
  </>
}
