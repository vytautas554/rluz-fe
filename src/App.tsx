import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Gallery from "./pages/Gallery";
import Prices from "./pages/Prices";
import Blog from "./pages/Blog";
import About from "./pages/About";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/prices" element={<Prices />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;
