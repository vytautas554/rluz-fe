import { Box } from '@mui/material';
import headerImg from '../../images/carousel/1.jpg';

export function AboutMeHeader() {
  return (
    <Box>
      <img
        src={headerImg}
        style={{
          width: '100%',
          height: '700px',
          objectFit: 'cover',
        }}
      />
      <Box sx={{ position: 'absolute', top: '20%', left: '30%' }}>
        <h1 style={{ color: 'white' }}>Sveiki, Esu Roma</h1>
      </Box>
    </Box>
  );
}

export default AboutMeHeader;
