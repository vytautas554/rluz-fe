import { Box, List, ListItem, Link, Typography } from '@mui/material';
import weddingPhoto from '../../images/Vestuvių fotosesija.jpg';
import weddingSecondaryPhoto from '../../images/Justina ir Vilius.2701-Edit-3.jpg';
import couplePhoto from '../../images/Poros fotosesija.jpg';
import coupleSecondaryPhoto from '../../images/Nėtumo fotosesija.jpg';
import { Link as RouterLink } from 'react-router-dom';
import { useState } from 'react';
import { ImageOrder } from '../common/enums';

function GallerySection() {
  const [isHovered, setIsHovered] = useState({ firstImage: false, secondImage: false });

  function onHover(imageOrder: ImageOrder) {
    if (imageOrder === ImageOrder.firstImage) {
      if (isHovered.firstImage) {
        setIsHovered({ ...isHovered, firstImage: false });
      } else {
        setIsHovered({ ...isHovered, firstImage: true });
      }
    }

    if (imageOrder === ImageOrder.secondImage) {
      if (isHovered.secondImage) {
        setIsHovered({ ...isHovered, secondImage: false });
      } else {
        setIsHovered({ ...isHovered, secondImage: true });
      }
    }
  }
  return (
    <Box
      sx={{
        backgroundImage: 'url("//static.showit.co/1600/2KJC7dO0SjyKxVooWWzoJQ/shared/xxroses-textures-cremenoisebckgnd.png")',
        py: 5,
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mx: 60, mb: 55 }}>
        <Box
          sx={{ pt: 13, position: 'relative' }}
          onMouseEnter={() => onHover(ImageOrder.firstImage)}
          onMouseLeave={() => onHover(ImageOrder.firstImage)}
          component={RouterLink}
          to="/gallery"
        >
          {isHovered.firstImage ? (
            <Typography
              sx={{
                position: 'absolute',
                color: 'white',
                bottom: -50,
                left: 150,
                zIndex: 11,
                fontFamily: 'Marcellus',
                fontSize: 30,
              }}
            >
              Engagements
            </Typography>
          ) : (
            ''
          )}

          <Box sx={{ position: 'absolute', zIndex: 10 }}>
            <img
              src={weddingPhoto}
              alt=""
              style={{
                width: 435,
                height: 650,
                transition: 'opacity 0.5s',
                opacity: isHovered.firstImage ? 0 : 1,
                objectFit: 'cover',
              }}
            />
          </Box>

          <Box sx={{ position: 'absolute', zIndex: 10 }}>
            <img
              src={weddingSecondaryPhoto}
              alt=""
              style={{
                width: 435,
                height: 650,
                transition: 'opacity 0.5s',
                opacity: isHovered.firstImage ? 1 : 0,
                objectFit: 'cover',
              }}
            />
          </Box>
        </Box>

        <Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', mr: 10 }}>
            <Typography sx={{ textAlign: 'right', fontFamily: 'Marcellus' }} variant="h2">
              The <br />
              good <br /> stuff
            </Typography>
            <List sx={{ fontFamily: 'Marcellus', fontSize: 19 }}>
              <ListItem sx={{ pb: 0 }}>
                <Link
                  component={RouterLink}
                  sx={{
                    color: '#2b2b2b',
                  }}
                  to="/gallery"
                  underline="none"
                >
                  NO.1— lovers
                </Link>
              </ListItem>
              <ListItem sx={{ pb: 0 }}>
                <Link
                  component={RouterLink}
                  sx={{
                    color: '#2b2b2b',
                  }}
                  to="/gallery"
                  underline="none"
                >
                  NO.2— I do'ers
                </Link>
              </ListItem>
              <ListItem sx={{ pb: 5 }}>
                <Link
                  component={RouterLink}
                  sx={{
                    color: '#2b2b2b',
                  }}
                  to="/about"
                  underline="none"
                >
                  NO.3— me
                </Link>
              </ListItem>
            </List>
          </Box>

          <Box
            onMouseEnter={() => onHover(ImageOrder.secondImage)}
            onMouseLeave={() => onHover(ImageOrder.secondImage)}
            sx={{ position: 'relative', mr: 55 }}
            component={RouterLink}
            to="/gallery"
          >
            {isHovered.secondImage ? (
              <Typography
                sx={{
                  position: 'absolute',
                  color: 'white',
                  top: 250,
                  left: 150,
                  zIndex: 11,
                  fontFamily: 'Marcellus',
                  fontSize: 30,
                }}
              >
                Weddings
              </Typography>
            ) : (
              ''
            )}

            <Box sx={{ position: 'absolute', zIndex: 10 }}>
              <img
                src={couplePhoto}
                alt=""
                style={{
                  width: 435,
                  height: 600,
                  transition: 'opacity 0.5s',
                  opacity: isHovered.secondImage ? 0 : 1,
                  objectFit: 'cover',
                }}
              />
            </Box>

            <Box sx={{ position: 'absolute', zIndex: 10 }}>
              <img
                src={coupleSecondaryPhoto}
                alt=""
                style={{
                  width: 435,
                  height: 600,
                  transition: 'opacity 0.5s',
                  opacity: isHovered.secondImage ? 1 : 0,
                  objectFit: 'cover',
                }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default GallerySection;
