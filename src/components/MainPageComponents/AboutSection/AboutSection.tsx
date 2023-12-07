import { Box, Link, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import image from '../../../images/Asmeninė fotosesija.jpg';
import signature from '../../../images/signature-and-logo/parasas-mazesnis.png';
import './AboutSection.css';

function AboutSection() {
  return (
    <Box
      sx={{
        background: '#f4eadc',
        py: 5,
        pb: 10,
      }}
    >
      <Box className="about-section-container">
        <Box className="about-section-description-container">
          <Typography variant="h3" className="title">
            Hey lovebirds!
          </Typography>

          <Box className="description-container">
            <Typography className="description">
              “Here for that can't-eat, can't-sleep, reach-for-the-stars, over-the-fence, World Series kind of stuff“ I'm that
              photographer who says "okay last picture I promise" about ten times. I love helping people see their own beauty and
              I love documenting their love. My main goal is to make you feel comfortable, while having fun and getting THE most
              amazing pictures. You are gonna want to show these off forever! You deserve to have someone with you on your special
              day who is just as excited as you. <br /> Hint, that's me! If you like puppies, the show friends, traveling & eating
              pizza, I think we will be best friends. Hit me up for a good time.
            </Typography>

            <Link className="about-cta" component={RouterLink} to="/about" underline="none">
              MORE ABOUT YA GIRL
            </Link>
          </Box>
        </Box>
        <Box className="image-container">
          <Box className="signature">
            <img src={signature} alt="" style={{ maxHeight: 250 }} />
          </Box>
          <img src={image} alt="" style={{ maxHeight: 440, width: 'auto', borderRadius: 5 }} />
        </Box>
      </Box>
    </Box>
  );
}

export default AboutSection;
