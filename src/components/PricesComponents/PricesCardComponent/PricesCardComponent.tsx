import { Card, CardContent, Typography, Box, ListItem, List } from '@mui/material';
import image from '../../../images/Apie mane puslapiui.jpg';
import image2 from '../../../images/Asmeninė fotosesija.jpg';

const cardsData = [
  {
    type: 'VESTUVĖS',
    typeTime: '5 val.',
    price: '1350 Eur',
    img: image,
    time: 'NUO PASIRUOŠIMO IKI VAKARIENĖS arba NUO CEREMONIJOS IKI VIDURNAKČIO',
    details: [
      'ne mažiau 400 retušuotų nuotraukų',
      'retušavimas iki 2 mėn.',
      'priešvestuvinė poros fotosesija: 150 Eur / 30 nuotr.',
      'papildomas laikas: 1 val. / 100 Eur',
      'į kainą jau įskaičiuotos kelionės išlaidos Lietuvoje',
    ],
  },
  {
    type: 'FOTOSESIJA-NUOTYKIS šeimoms ir poroms',
    typeTime: '1 val.',
    price: '250 Eur',
    img: image2,
    time: 'NUOTYKIŲ VIETA IR LAIKAS SUTARIAMI ASMENIŠKAI (Kaina galioja fotosesijai Kauno-Vilniaus apylinkėse. Dėl fotosesijos pasiūlymo kituose miestuose pasitarkime asmeniškai)',
    details: [
      'fotografavimo laikas (nuo) 1 val. 30 min.',
      'ne mažiau 40 retušuotų  nuotraukų',
      'nuotraukų retušavimas per 4 sav.',
    ],
  },
];

export default function PricesCardComponent() {
  return (
    <Box sx={{ py: 15, color: '#f3e9e0' }}>
      {cardsData.map((card, i) => (
        <Card
          sx={{
            boxShadow: 'none',
            borderTop: i > 0 ? '' : '1px solid black',
            borderBottom: i + 1 === cardsData.length ? '' : '1px solid black',
          }}
          raised={false}
        >
          <Box
            sx={{
              mx: 40,
              display: 'flex',
              borderRadius: 0,
              py: 5,
            }}
          >
            <Box sx={{ px: 5, width: 250, textAlign: 'right' }}>
              <Typography gutterBottom variant="h5" component="div">
                {card.type} <br /> {card.typeTime}
              </Typography>
            </Box>
            <img style={{ width: 300 }} src={card.img} alt="" />
            <Box sx={{ width: 700, pl: 5 }}>
              <CardContent>
                <Typography gutterBottom variant="h3" component="div">
                  {card.price}
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                  DAŽNIAUSIAI: <br /> {card.time}
                </Typography>
                <List>
                  {card.details.map((detail) => (
                    <ListItem sx={{ p: 0, fontSize: 20 }}>– {detail}</ListItem>
                  ))}
                </List>
              </CardContent>
            </Box>
          </Box>
        </Card>
      ))}
    </Box>
  );
}
