import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import Logo from '../../images/signature-and-logo/permatomas-baltas-auksas.png';
import Img from '../../../src/images/Vestuvių fotosesija.jpg';
import Img1 from '../../../src/images/Nėtumo fotosesija.jpg';
import Img2 from '../../../src/images/Poros fotosesija.jpg';
import Img3 from '../../../src/images/Justina ir Vilius.2701-Edit-3.jpg';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link } from 'react-router-dom';
import { FACEBOOK_LINK, INSTAGRAM_LINK } from '../utils/constant';

const images = [{ src: Img }, { src: Img1 }, { src: Img2 }, { src: Img3 }, { src: Img }, { src: Img2 }];

function MainFooter() {
  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        flexDirection: 'column',
        background: '#e0c5aa',
        padding: '30px',
      }}
    >
      <Box sx={{ width: '100%' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
          <img style={{ width: 200, height: 200 }} src={Logo} alt="logo" />
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Box
            sx={{ width: '30%', display: 'flex', justifyContent: 'center', borderTop: 1, borderBottom: 1, borderColor: 'white' }}
          >
            <Box sx={{ width: '10%', display: 'flex', justifyContent: 'space-between', margin: '15px' }}>
              <Link to={FACEBOOK_LINK} target="_blank">
                <FacebookRoundedIcon sx={{ color: 'white' }} />
              </Link>
              <Link to={INSTAGRAM_LINK} target="_blank">
                <InstagramIcon sx={{ color: 'white' }} />
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box sx={{ mt: '15px' }}>
        <Link to={INSTAGRAM_LINK} target="_blank" style={{ color: 'white', textDecoration: 'none' }}>
          <Typography
            variant="h5"
            sx={{
              fontFamily: 'Marcellus',
              pb: 1,
              textAlign: 'center',
              '&:hover': {
                color: '#c4a858',
              },
            }}
          >
            @r_luz_photography
          </Typography>
        </Link>
      </Box>
      <Box sx={{ display: 'flex', width: '100%', alignItems: 'center', flexDirection: 'column', padding: '15px' }}>
        <Box>
          <Link to={INSTAGRAM_LINK} target="_blank">
            {images.map((image, index) => (
              <img
                style={{ width: 160, height: 160, objectFit: 'cover', marginRight: '3px' }}
                key={index}
                src={image.src}
                alt={`Image ${index}`}
              />
            ))}
          </Link>
        </Box>
      </Box>
      <Box sx={{ borderBottom: 1, borderColor: 'white', width: '40%' }}></Box>
    </Box>
  );
}

export default MainFooter;
