import { Box, CssBaseline } from '@mui/material';
import AboutMeHeader from '../components/AboutMe/AboutMeHeader';
import AboutMeDescription from '../components/AboutMe/AboutMeDescription';

function About() {
  return (
    <Box>
      <CssBaseline />
      <AboutMeHeader />
      <AboutMeDescription />
    </Box>
  );
}

export default About;
