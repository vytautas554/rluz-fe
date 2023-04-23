import { Box, Typography } from '@mui/material';
import headerImg from '../../images/carousel/1.jpg';

function AboutMeHeader() {
  return (
    <Box sx={{ mb: -1 }}>
      <img
        src={headerImg}
        style={{
          width: '100%',
          height: '700px',
          objectFit: 'cover',
        }}
      />
      <Box sx={{ position: 'absolute', top: '15%', left: '10%', maxWidth: '30%', color: '#f3e9e0', textAlign: 'right' }}>
        <Typography variant="h1" sx={{ fontSize: '40px' }}>
          - Sveiki, <br />
          Esu Roma!
        </Typography>
        <Box
          sx={{
            textTransform: 'uppercase',
          }}
        >
          <Typography variant="h2" sx={{ fontSize: '30px', fontFamily: 'marcellus', letterSpacing: '0.2em', mt: 4 }}>
            not your average sappy wedding photographer
          </Typography>
          <Typography variant="h3" sx={{ fontSize: '26px', fontFamily: 'marcellus', letterSpacing: '0.2em', mt: 2 }}>
            your new fav sarcastic third wheel
          </Typography>
          <Typography variant="h4" sx={{ fontSize: '24px', fontFamily: 'marcellus', letterSpacing: '0.2em', mt: 2 }}>
            your new fav sarcastic third wheel
          </Typography>
          <Typography variant="h5" sx={{ fontSize: '22px', fontFamily: 'marcellus', letterSpacing: '0.2em', mt: 2 }}>
            can't wait to hang!
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default AboutMeHeader;
