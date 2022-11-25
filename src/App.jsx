import { GlobalStyles } from "@mui/material";
import styleGlobal from "./styles/globalStyles";

import Home from "./pages/home";

const inputGlobalStyles = <GlobalStyles styles={styleGlobal} />;

function App() {
  return (
    <>
      {inputGlobalStyles}
      <Home />
    </>
  );
}

export default App;
