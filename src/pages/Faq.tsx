import { Box, CssBaseline } from '@mui/material';
import FaqHeroSection from '../components/FaqPageComponents/FaqHeroSection/FaqHeroSection';
import FaqSection from '../components/FaqPageComponents/FaqSection/FaqSection';

function Faq() {
  return (
    <Box>
      <CssBaseline />
      <FaqHeroSection />
      <FaqSection />
    </Box>
  );
}

export default Faq;
