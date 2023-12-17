import { BrowserRouter, Routes, Route } from "react-router-dom";
import Card from "./components/Card";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/card" element={<Card />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
