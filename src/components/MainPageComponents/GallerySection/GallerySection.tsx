import { Box, List, ListItem, Link, Typography } from '@mui/material';
import weddingPhoto from '../../../images/Vestuvių fotosesija.jpg';
import weddingSecondaryPhoto from '../../../images/Justina ir Vilius.2701-Edit-3.jpg';
import couplePhoto from '../../../images/Poros fotosesija.jpg';
import coupleSecondaryPhoto from '../../../images/Nėtumo fotosesija.jpg';
import thirdPhoto from '../../../images/Pirmam puslapiui.jpg';
import thirdSecondaryPhoto from '../../../images/Apie mane puslapiui.jpg';
import fourthPhoto from '../../../images/transitions/Brigita ir Sigitas.3148-Edit.jpg';
import fourthSecondaryPhoto from '../../../images/transitions/Rasa ir Rokas.4097-Edit.jpg';
import { Link as RouterLink } from 'react-router-dom';
import { useState } from 'react';
import { ImageOrder } from '../../common/enums';

function GallerySection() {
  const [isHovered, setIsHovered] = useState({ firstImage: false, secondImage: false, thirdImage: false, fourthImage: false });

  function onHover(imageOrder: ImageOrder) {
    switch (imageOrder) {
      case ImageOrder.firstImage:
        setIsHovered({ ...isHovered, firstImage: true, thirdImage: false });
        break;
      case ImageOrder.secondImage:
        setIsHovered({ ...isHovered, secondImage: true, fourthImage: false });
        break;
      case ImageOrder.thirdImage:
        setIsHovered({ ...isHovered, thirdImage: true, firstImage: false });
        break;
      case ImageOrder.fourthImage:
        setIsHovered({ ...isHovered, fourthImage: true, secondImage: false });
        break;
      default:
        setIsHovered({ firstImage: false, secondImage: false, thirdImage: false, fourthImage: false });
        break;
    }
  }

  function onHoverLeave() {
    setIsHovered({ firstImage: false, secondImage: false, thirdImage: false, fourthImage: false });
  }

  return (
    <Box
      sx={{
        backgroundImage: 'url("//static.showit.co/1600/2KJC7dO0SjyKxVooWWzoJQ/shared/xxroses-textures-cremenoisebckgnd.png")',
        py: 5,
        position: 'relative',
      }}
    >
      <Box
        sx={{
          width: '100%',
          position: 'absolute',
          height: 150,
          transform: `rotate(-5deg)`,
          top: -55,
          right: -10,
          backgroundImage: 'url("//static.showit.co/1600/2KJC7dO0SjyKxVooWWzoJQ/shared/xxroses-textures-cremenoisebckgnd.png")',
        }}
      ></Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mx: 60, mb: 45 }}>
        <Box
          sx={{ pt: 13, position: 'relative' }}
          onMouseOver={() => onHover(ImageOrder.firstImage)}
          onMouseOut={() => onHoverLeave()}
          component={RouterLink}
          to="/gallery"
        >
          {isHovered.firstImage ? (
            <Typography
              sx={{
                position: 'absolute',
                color: '#FAF9F6',
                bottom: -50,
                left: 150,
                zIndex: 11,
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
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', mr: 5 }}>
            <Typography sx={{ textAlign: 'right', color: '#28282B', zIndex: 10 }} variant="h2">
              The <br />
              good <br /> stuff
            </Typography>
            <Box
              sx={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap', alignItems: 'flex-end', maxHeight: 200, mr: 17 }}
            >
              <List sx={{ fontSize: 19 }}>
                <ListItem sx={{ pb: 0 }}>
                  <Link
                    component={RouterLink}
                    sx={{
                      color: '#28282B',
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
                      color: '#28282B',
                    }}
                    to="/gallery"
                    underline="none"
                  >
                    NO.2— I do'ers
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    component={RouterLink}
                    sx={{
                      color: '#28282B',
                    }}
                    to="/about"
                    underline="none"
                  >
                    NO.3— me
                  </Link>
                </ListItem>
              </List>
              <List sx={{ fontSize: 19 }}>
                <ListItem sx={{ pb: 0 }}>
                  <Link
                    component={RouterLink}
                    sx={{
                      color: '#28282B',
                    }}
                    to="/gallery"
                    underline="none"
                  >
                    NO.4— lovers
                  </Link>
                </ListItem>
                <ListItem sx={{ pb: 0 }}>
                  <Link
                    component={RouterLink}
                    sx={{
                      color: '#28282B',
                    }}
                    to="/gallery"
                    underline="none"
                  >
                    NO.5— I do'ers
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    component={RouterLink}
                    sx={{
                      color: '#28282B',
                    }}
                    to="/about"
                    underline="none"
                  >
                    NO.6— me
                  </Link>
                </ListItem>
              </List>
            </Box>
          </Box>

          <Box
            onMouseOver={() => onHover(ImageOrder.secondImage)}
            onMouseOut={() => onHoverLeave()}
            sx={{ position: 'relative', mr: 55 }}
            component={RouterLink}
            to="/gallery"
          >
            {isHovered.secondImage ? (
              <Typography
                sx={{
                  position: 'absolute',
                  color: '#FAF9F6',
                  top: 250,
                  left: 150,
                  zIndex: 11,
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
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mx: 60, mb: 53 }}>
        <Box
          sx={{ pt: 13, position: 'relative' }}
          onMouseOver={() => onHover(ImageOrder.thirdImage)}
          onMouseOut={() => onHoverLeave()}
          component={RouterLink}
          to="/gallery"
        >
          {isHovered.thirdImage ? (
            <Typography
              sx={{
                position: 'absolute',
                color: '#FAF9F6',
                bottom: -50,
                left: 150,
                zIndex: 11,
                fontSize: 30,
              }}
            >
              Category
            </Typography>
          ) : (
            ''
          )}

          <Box sx={{ position: 'absolute', zIndex: 10 }}>
            <img
              src={thirdPhoto}
              alt=""
              style={{
                width: 435,
                height: 650,
                transition: 'opacity 0.5s',
                opacity: isHovered.thirdImage ? 0 : 1,
                objectFit: 'cover',
              }}
            />
          </Box>

          <Box sx={{ position: 'absolute', zIndex: 10 }}>
            <img
              src={thirdSecondaryPhoto}
              alt=""
              style={{
                width: 435,
                height: 650,
                transition: 'opacity 0.5s',
                opacity: isHovered.thirdImage ? 1 : 0,
                objectFit: 'cover',
              }}
            />
          </Box>
        </Box>

        <Box sx={{ pt: 37 }}>
          <Box
            onMouseOver={() => onHover(ImageOrder.fourthImage)}
            onMouseOut={() => onHoverLeave()}
            sx={{ position: 'relative', mr: 55 }}
            component={RouterLink}
            to="/gallery"
          >
            {isHovered.fourthImage ? (
              <Typography
                sx={{
                  position: 'absolute',
                  color: '#FAF9F6',
                  top: 250,
                  left: 150,
                  zIndex: 11,
                  fontSize: 30,
                }}
              >
                Category
              </Typography>
            ) : (
              ''
            )}

            <Box sx={{ position: 'absolute', zIndex: 10 }}>
              <img
                src={fourthPhoto}
                alt=""
                style={{
                  width: 435,
                  height: 600,
                  transition: 'opacity 0.5s',
                  opacity: isHovered.fourthImage ? 0 : 1,
                  objectFit: 'cover',
                }}
              />
            </Box>

            <Box sx={{ position: 'absolute', zIndex: 10 }}>
              <img
                src={fourthSecondaryPhoto}
                alt=""
                style={{
                  width: 435,
                  height: 600,
                  transition: 'opacity 0.5s',
                  opacity: isHovered.fourthImage ? 1 : 0,
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
