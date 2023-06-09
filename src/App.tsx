import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Gallery from './pages/Gallery';
import Prices from './pages/Prices';
import Blog from './pages/Blog';
import About from './pages/About';
import { Box } from '@mui/material';
import MainNavigation from './components/CommonComponents/MainNavigation/MainNavigation';
import MainFooter from './components/CommonComponents/MainFooter/MainFooter';
import Faq from './pages/Faq';

function App() {
  return (
    <Box component="main">
      <MainNavigation />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/prices" element={<Prices />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<Faq />} />
      </Routes>
      <MainFooter />
    </Box>
  );
}

export default App;
