import { Box, CssBaseline } from '@mui/material';
import CustomCarousel from '../components/MainPageComponents/Carousel/Carousel';
import AboutSection from '../components/MainPageComponents/AboutSection/AboutSection';
import TransitionSection from '../components/CommonComponents/TransitionSection/TransitionSection';
// import transitionImage1 from '../images/transitions/DSC_3052-Edit-Edit-Edit.jpg';
import transitionImage2 from '../images/transitions/DSC_3506-Edit.jpg';
// import GallerySection from '../components/MainPageComponents/GallerySection/GallerySection';
// import ReviewSection from '../components/MainPageComponents/ReviewSection/ReviewSection';
import ParallaxSection from '../components/CommonComponents/ParallaxSection/ParallaxSection';
import ParallaxImage from '../images/transitions/Brigita ir Sigitas.3148-Edit.jpg';

function Main() {
  return (
    <Box sx={{ fontFamily: 'Vollkorn', overflow: 'hidden' }}>
      <CssBaseline />
      <CustomCarousel />
      <AboutSection />
      {/* <TransitionSection url={transitionImage1} description="" /> */}
      {/* <GallerySection /> */}
      <TransitionSection
        url={transitionImage2}
        description=""
        text="making your once in a lifetime day last forever
"
      />
      {/* <ReviewSection /> */}
      <ParallaxSection url={ParallaxImage} description="" text="Come to see what I offer" />
    </Box>
  );
}

export default Main;
