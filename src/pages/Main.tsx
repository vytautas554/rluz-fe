import { Box, CssBaseline } from '@mui/material';
import CustomCarousel from '../components/Carousel/Carousel';
import GenericSection from '../components/AboutSection/AboutSection';

function Main() {
  return (
    <Box>
      <CssBaseline />
      <CustomCarousel />
      <GenericSection />
    </Box>
  );
}

export default Main;
