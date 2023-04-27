import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const accordionData = [
  {
    summary: 'WHERE ARE YOU BASED',
    details:
      'I’M BASED JUST OUTSIDE OF SALT LAKE CITY, UTAH. I LOVE HAVING UTAH AS HOME BASE BECAUSE IT OFFERS SUCH A VARIETY OF SCENERY AND LOCATIONS UNLIKE ANYWHERE I’VE TRAVELED TO AROUND THE WORLD.',
  },
  {
    summary: 'DO YOU TRAVEL',
    details:
      'YES, I CAN TRAVEL TO YOU OR WHEREVER YOU ARE HEADED. I AM CONSTANTLY TRAVELING AND I LOVE BEING ABLE TO EXPLORE NEW SPOTS AROUND THE WORLD AND BE ABLE TO FEEL INSPIRED BY A NEW LOCATION AND EXPAND MY CREATIVITY.',
  },
  {
    summary: 'HOW DO TRAVEL FEES WORK',
    details:
      'MY TRAVEL FEES DEPEND ON THE EXACT LOCATION. ONCE YOU REACH OUT & WE FINALIZE WHERE WE WILL BE CREATING, A TRAVEL FEE WILL BE ADDED ON TO YOUR SESSION. TRAVEL FEES INCLUDE FLIGHT, STAY, RENTAL CAR IF NEEDED, AND COMPENSATION FOR MY TIME SPENT TRAVELING. FOR SHOOTS IN UTAH, A TRAVEL FEE WILL APPLY FOR ANYTHING FURTHER THAN AN HOUR FROM ME.',
  },
];
function FaqSection() {
  return (
    <Box
      sx={{
        py: 10,
        backgroundImage: 'url(//static.showit.co/1600/2KJC7dO0SjyKxVooWWzoJQ/shared/xxroses-textures-cremenoisebckgnd.png)',
      }}
    >
      <Box
        sx={{
          mx: 40,
        }}
      >
        {accordionData.map((accordion) => {
          return (
            <Accordion
              disableGutters
              sx={{
                borderBottom: 1,
                borderTop: 1,
                borderColor: 'gray',
                boxShadow: 'none',
                fontFamily: 'Vollkorn',
                py: 1,
                backgroundImage:
                  'url(//static.showit.co/1600/2KJC7dO0SjyKxVooWWzoJQ/shared/xxroses-textures-cremenoisebckgnd.png)',
                '&:not(:last-child)': {
                  borderBottom: 0,
                },
              }}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography sx={{ textTransform: 'uppercase', fontSize: 19 }}>{accordion.summary}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{accordion.details}</Typography>
              </AccordionDetails>
            </Accordion>
          );
        })}
      </Box>
    </Box>
  );
}

export default FaqSection;
