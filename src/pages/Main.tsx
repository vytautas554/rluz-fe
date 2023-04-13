import { Box, CssBaseline } from '@mui/material';
import CustomCarousel from '../components/Carousel/Carousel';
import AboutSection from '../components/AboutSection/AboutSection';
import TransitionSection from '../components/TransitionSection/TransitionSection';
import transitionImage1 from '../images/transitions/DSC_3052-Edit-Edit-Edit.jpg';
import transitionImage2 from '../images/transitions/DSC_3506-Edit.jpg';
import GallerySection from '../components/GallerySection/GallerySection';
import ReviewSection from '../components/ReviewSection/ReviewSection';

function Main() {
  return (
    <Box>
      <CssBaseline />
      <CustomCarousel />
      <AboutSection />
      <TransitionSection url={transitionImage1} description="" />
      <GallerySection />
      <TransitionSection
        url={transitionImage2}
        description=""
        text="making your once in a lifetime day last forever
"
      />
      <ReviewSection />
    </Box>
  );
}

export default Main;
