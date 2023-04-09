import { Box, CssBaseline } from '@mui/material';
import CustomCarousel from '../components/Carousel/Carousel';
import AboutSection from '../components/AboutSection/AboutSection';
import TransitionSection from '../components/TransitionSection/TransitionSection';
import transitionImage1 from '../images/transitions/DSC_3052-Edit-Edit-Edit.jpg';

function Main() {
  return (
    <Box>
      <CssBaseline />
      <CustomCarousel />
      <AboutSection />
      <TransitionSection url={transitionImage1} description="" />
    </Box>
  );
}

export default Main;
