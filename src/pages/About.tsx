import { Box, CssBaseline } from '@mui/material';
import AboutMeHeader from '../components/AboutMeComponents/AboutMeHeader/AboutMeHeader';
import AboutMeDescription from '../components/AboutMeComponents/AboutMeDescription/AboutMeDescription';

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
