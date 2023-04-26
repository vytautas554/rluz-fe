import { Box } from '@mui/material';
import headerImg from '../../../images/Nėtumo fotosesija.jpg';

function FaqHeroSection() {
  return (
    <Box
      sx={{
        backgroundImage: 'url("//static.showit.co/1600/v9OqC4jDR9aly1PHx06AIQ/88750/xxroses-textures-tannoisebckgnd_1.png")',
        height: 550,
        pt: 10,
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', ml: 54, mr: 20, justifyContent: 'space-between' }}>
        <Box
          sx={{
            color: 'white',
            fontSize: 25,
            letterSpacing: 1.5,
            textAlign: 'right',
          }}
        >
          LET'S MAKE SOME
          <br /> magic
        </Box>
        <Box sx={{ mb: 10 }}>
          <img
            alt=""
            src={headerImg}
            style={{
              top: 70,
              height: 420,
              width: 350,
            }}
          />
        </Box>
        <Box>
          <img
            alt=""
            src={headerImg}
            style={{
              height: 400,
              width: 650,
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default FaqHeroSection;
