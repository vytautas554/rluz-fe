import { Typography, Link, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import Logo from '../../../images/signature-and-logo/permatomas-baltas-auksas.png';
import Img from '../../../images/Vestuvių fotosesija.jpg';
import Img1 from '../../../images/Nėtumo fotosesija.jpg';
import Img2 from '../../../images/Poros fotosesija.jpg';
import Img3 from '../../../images/Justina ir Vilius.2701-Edit-3.jpg';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import { FACEBOOK_LINK, INSTAGRAM_LINK } from '../../utils/constant';

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
        py: 4,
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
            <Box sx={{ display: 'flex', justifyContent: 'space-between', my: 2 }}>
              <Link component={RouterLink} to={FACEBOOK_LINK} underline="none" target="_blank">
                <FacebookRoundedIcon sx={{ color: 'white' }} />
              </Link>
              <Link component={RouterLink} to={INSTAGRAM_LINK} underline="none" target="_blank">
                <InstagramIcon sx={{ color: 'white' }} />
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box sx={{ mt: 2 }}>
        <Link component={RouterLink} to={INSTAGRAM_LINK} target="_blank" underline="none" sx={{ color: 'white' }}>
          <Typography
            variant="h5"
            sx={{
              pb: 1,
              textAlign: 'center',
              '&:hover': {
                transition: 'all 0.4s ease-in-out',
                color: '#c4a858',
              },
            }}
          >
            @r_luz_photography
          </Typography>
        </Link>
      </Box>
      <Box sx={{ display: 'flex', width: '100%', alignItems: 'center', flexDirection: 'column', py: 2 }}>
        <Box>
          <Link component={RouterLink} to={INSTAGRAM_LINK} target="_blank" underline="none">
            {images.map((image, index) => (
              <img
                style={{ width: 160, height: 160, objectFit: 'cover', marginRight: '3px' }}
                key={index}
                src={image.src}
                alt=""
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
