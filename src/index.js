import ReactDOM from "react-dom";
/** @jsx jsx */
import { jsx } from "@emotion/core";
import GlobalStyles from "./global";
import Main from './Main'
function App() {
  return (
    <div>
      <GlobalStyles />
      <Main/>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
