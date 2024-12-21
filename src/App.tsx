import { GlobalStyle } from "./style/GlobalStyle";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Intro from "./pages/Intro/index";
import Home from "./pages/Home/index";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
