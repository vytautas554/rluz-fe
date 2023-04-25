import { Box } from '@mui/material';
import headerImg from '../../../images/Nėtumo fotosesija.jpg';

function FaqHeroSection() {
  return (
    <Box
      sx={{
        backgroundImage: 'url("//static.showit.co/1600/v9OqC4jDR9aly1PHx06AIQ/88750/xxroses-textures-tannoisebckgnd_1.png")',
        position: 'relative',
        height: 550,
      }}
    >
      <Box
        sx={{
          color: 'white',
          fontSize: 25,
          letterSpacing: 1.5,
          position: 'absolute',
          left: 370,
          top: 240,
        }}
      >
        LET'S MAKE SOME
        <br /> magic
      </Box>
      <img
        alt=""
        src={headerImg}
        style={{
          position: 'absolute',
          height: 400,
          width: 650,
          right: 180,
          top: 120,
        }}
      />
      <img
        alt=""
        src={headerImg}
        style={{
          position: 'absolute',
          top: 70,
          height: 400,
          width: 350,
          left: 680,
        }}
      />
    </Box>
  );
}

export default FaqHeroSection;
