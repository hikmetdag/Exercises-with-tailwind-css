import { BrowserRouter, Routes, Route } from "react-router-dom";
import Card from "./components/Card";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/card" element={<Card />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
