import { Box, Link, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import image from '../../images/Asmeninė fotosesija.jpg';

function AboutSection() {
  return (
    <Box
      sx={{
        backgroundImage: 'url("//static.showit.co/1600/2KJC7dO0SjyKxVooWWzoJQ/shared/xxroses-textures-cremenoisebckgnd.png")',
        py: 5,
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', mx: 50, justifyContent: 'space-between' }}>
        <Box sx={{ width: '50%' }}>
          <Typography variant="h3" sx={{ fontFamily: 'Marcellus', pb: 3, ml: 2, textAlign: 'left' }}>
            Hey lovebirds!
          </Typography>

          <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', mr: 13 }}>
            <Typography
              sx={{
                textAlign: 'justify',
                fontSize: 14,
                color: '#2b2b2b',
                lineHeight: 1.8,
                letterSpacing: 0.8,
              }}
            >
              “Here for that can't-eat, can't-sleep, reach-for-the-stars, over-the-fence, World Series kind of stuff“ I'm that
              photographer who says "okay last picture I promise" about ten times. I love helping people see their own beauty and
              I love documenting their love. My main goal is to make you feel comfortable, while having fun and getting THE most
              amazing pictures. You are gonna want to show these off forever! You deserve to have someone with you on your special
              day who is just as excited as you. <br /> Hint, that's me! If you like puppies, the show friends, traveling & eating
              pizza, I think we will be best friends. Hit me up for a good time.
            </Typography>

            <Link
              component={RouterLink}
              sx={{
                pt: 2,
                letterSpacing: 3.2,
                color: '#2b2b2b',
                transition: 'all.5s',
                '&:hover': {
                  fontSize: 13,
                },
              }}
              to="/about"
              underline="none"
            >
              MORE ABOUT YA GIRL
            </Link>
          </Box>
        </Box>
        <Box sx={{ width: '35%' }}>
          <img src={image} alt="" style={{ maxHeight: 440, borderRadius: 5 }} />
        </Box>
      </Box>
    </Box>
  );
}

export default AboutSection;
