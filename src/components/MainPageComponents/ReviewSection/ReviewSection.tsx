import * as React from 'react';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

// Mock data. Reviews should come from DB
const reviews = [
  {
    person: 'Jonasssssssssss',
    review:
      'Three words: Best. Photographer. Ever. She is so talented and can work WONDERS with lighting. Every single picture she took we LOVE. Making it nearly impossible to pick our favorites. She is absolutely hilarious and tells you exactly what to do for each shot, and they all turn out so natural and perfect. Nothing is ever awkward when working with Jackie. She is beyond professional while at the same time making you feel like youve known her forever. I could go on and on about how absolutely amazing she is and how thankful we are that we found her! We cannot wait for her to capture our wedding, and continue to capture any milestones we have down the road. She has earned our business for life! Do yourself a favor and book with her, NOW. You wont be disappointed!',
  },
  {
    person: 'Petras',
    review:
      'Jaclyn is nothing short of amazing!!! Jaclyn and my boyfriend Ty at the time we’re planning a surprise proposal during our photoshoot. She took the time to talk and plan out the whole shoot with Ty to make it the most perfect moment. She was amazing during the whole shoot and took beautiful photos that we love and will always be able to look back on! Meeting her felt like I knew her for years! I will definitely be using her for more photo shoots! I recommend her and always will!! Thanks Jaclyn for everything you did in making our engagement so special!!! xx',
  },
  {
    person: 'z',
    review:
      'I cannot recommend Jackie  enough! My husband and I are awkward in front of the camera, but she made us feel entirely comfortable. PLUS she photographed us with our two crazy pups for both the engagement shoot and on our wedding day and somehow managed to get amazing pictures even with them jumping around. Not only is her work incredible, shes so easy to get along with and we genuinely enjoyed spending time with her - so much so that we were sad to see her go when she was finished shooting on our wedding day. She made everything completely stress free and we made the BEST choice to book her as our photographer',
  },
];

function ReviewSection() {
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = reviews.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box
      sx={{
        background: '#f4eadc',
        pt: 8,
      }}
    >
      <Box sx={{ mx: 40, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Box sx={{ height: 255, px: 35, width: '100%', textAlign: 'justify' }}>{reviews[activeStep].review}</Box>
        <MobileStepper
          sx={{ position: 'relative', background: 'none' }}
          steps={0}
          position="static"
          nextButton={
            <Button
              disableRipple
              sx={{
                left: '140%',
                color: '#28282B',
                '&:hover': {
                  backgroundColor: 'transparent',
                },
              }}
              size="small"
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
            >
              —Next Review
            </Button>
          }
          backButton={
            <Button
              disableRipple
              sx={{
                right: '150%',
                top: -310,
                color: '#28282B',
                '&:hover': {
                  backgroundColor: 'transparent',
                },
              }}
              size="small"
              onClick={handleBack}
              disabled={activeStep === 0}
            >
              —Previous Review
            </Button>
          }
        ></MobileStepper>
        <Box
          sx={{
            background: 'none',
          }}
        >
          <Box sx={{ position: 'relative', bottom: 90 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', pb: 0 }}>
              <Typography sx={{ width: '1px', backgroundColor: '#28282B', height: 28 }}></Typography>
              <Typography sx={{ fontWeight: 500, pt: 1, fontSize: 18 }}>{reviews[activeStep].person}</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default ReviewSection;
