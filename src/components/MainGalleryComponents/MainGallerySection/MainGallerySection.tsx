import { Box, CardMedia, CardContent, Typography, Slide } from '@mui/material';
import { useState } from 'react';
import cardHeaderImg from '../../../images/Asmeninė fotosesija.jpg';
import cardHeaderImg1 from '../../../images/Nėtumo fotosesija.jpg';
import cardHeaderImg2 from '../../../images/Poros fotosesija.jpg';
import { GalleryCardData } from '../../common/interfaces';
import MainGalleryFilterSection from '../MainGalleryFilterSection/MainGalleryFilterSection';

const galleryCardData: GalleryCardData[] = [
  {
    src: cardHeaderImg,
    imgTitle: 'Vestuvės',
    photoShootType: 'Vestuvės',
    photoShootParticipants: 'Andrius ir Neringa',
  },
  {
    src: cardHeaderImg1,
    imgTitle: 'Poros',
    photoShootType: 'Poros',
    photoShootParticipants: 'Andrius ir Neringa',
  },
  {
    src: cardHeaderImg2,
    imgTitle: 'Krikštynos',
    photoShootType: 'Krikštynos',
    photoShootParticipants: 'Andrius ir Neringa',
  },
  {
    src: cardHeaderImg,
    imgTitle: 'Vestuvės',
    photoShootType: 'Vestuvės',
    photoShootParticipants: 'Andrius ir Neringa',
  },
  {
    src: cardHeaderImg1,
    imgTitle: 'Poros',
    photoShootType: 'Poros',
    photoShootParticipants: 'Andrius ir Neringa',
  },
  {
    src: cardHeaderImg2,
    imgTitle: 'Krikštynos',
    photoShootType: 'Krikštynos',
    photoShootParticipants: 'Andrius ir Neringa',
  },
  {
    src: cardHeaderImg2,
    imgTitle: 'Nėščioji',
    photoShootType: 'Nėščioji',
    photoShootParticipants: 'Kristina',
  },
];

function MainGallerySection() {
  const [selectedItem, setSelectedItem] = useState<GalleryCardData | null>(null);
  const [slide, setSlide] = useState<boolean>(true);
  const [selectedFilter, setSelectedFilter] = useState('');
  const [filteredGalleryCardData, setFilteredGalleryCardData] = useState(galleryCardData);

  const handleMouseEnter = (item: GalleryCardData | null) => {
    setSelectedItem(item);
  };

  const handleMouseLeave = () => {
    setSelectedItem(null);
  };

  const handleFilterChange = (photoShootType: string) => {
    setSelectedFilter(photoShootType);
    setSlide(!slide);

    if (photoShootType === '' || photoShootType === 'visos') {
      setFilteredGalleryCardData(galleryCardData);
    } else {
      const filteredData = galleryCardData.filter((card) => card.photoShootType === photoShootType);
      setFilteredGalleryCardData(filteredData);
    }
  };

  return (
    <Box>
      <MainGalleryFilterSection
        key={'a'}
        galleryCardData={galleryCardData}
        onSelectFilter={handleFilterChange}
        onSlideToggle={() => setSlide(!slide)}
      />
      <Slide direction="up" in={slide} {...{ timeout: 700 }}>
        <Box
          sx={{
            mt: 15,
            display: 'flex',
            justifyContent: 'space-evenly',
            flexWrap: 'wrap',
          }}
        >
          {filteredGalleryCardData.map((cardData, index) => {
            return (
              <Box sx={{ height: 500, transition: 'opacity 0.5s ease-in' }} key={index}>
                <Box
                  sx={{
                    width: 530,
                    height: 400,
                    display: 'flex',
                    justifyContent: 'center',
                    backgroundColor: selectedItem === cardData ? 'orange' : '',
                    transition: selectedItem ? 'all 0.5s ease-in-out' : '',
                    cursor: 'pointer',
                  }}
                  key={index}
                >
                  <Box
                    onMouseEnter={() => handleMouseEnter(cardData)}
                    onMouseLeave={handleMouseLeave}
                    sx={{ width: 450, mt: -5 }}
                    key={index}
                  >
                    <CardMedia sx={{ height: 300 }} image={cardData.src} title={cardData.imgTitle}></CardMedia>
                    <CardContent sx={{ width: '100%', textAlign: 'center' }}>
                      <Typography
                        gutterBottom
                        variant="h5"
                        sx={{ color: 'text.secondary', fontSize: 20, fontFamily: 'marcellus' }}
                      >
                        {cardData.photoShootType}
                      </Typography>
                      <Typography sx={{ fontSize: 30, fontFamily: 'marcellus' }}>{cardData.photoShootParticipants}</Typography>
                    </CardContent>
                  </Box>
                </Box>
              </Box>
            );
          })}
        </Box>
      </Slide>
    </Box>
  );
}

export default MainGallerySection;
