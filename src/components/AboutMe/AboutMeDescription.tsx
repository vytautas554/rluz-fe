import { Box, Typography } from '@mui/material';

export function AboutMeDescription() {
  return (
    <Box sx={{ width: '100%', height: 'auto', background: '#f4eadc', p: '40px' }}>
      <Box>
        <Typography variant="h2" sx={{ width: '100%', textAlign: 'center', fontSize: '50px' }}>
          it's me
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-around', textAlign: 'justify', m: 5 }}>
          <Typography sx={{ width: '35%', lineHeight: 1.8 }}>
            I go by Jackie. I am a Maryland Wedding Photographer &amp; nurse. I am originally from New Jersey. That should explain
            my love for pizza &amp; bagels (and my pizza tattoo). If you have any good recommendations let me know because I still
            haven't found anything up to par yet in Maryland. I am super sarcastic &amp; will say anything to make you laugh. I
            vibe best with people who get sarcasm and are down to get weird. When I am not taking pictures of my couples, the rest
            of my time is spent eating, watching questionable reality TV shows &amp; traveling the world with my British mail
            order husband (jk about the mail order). I am a brand new pup mom to a cute lil guy named Teddy. We call him Teddy
            Bundy when he is being bad though. Holler if you like crime podcasts.
          </Typography>
          <Typography sx={{ width: '35%', lineHeight: 1.8 }}>
            I love weddings, but I am not your average sappy wedding photographer. While I want you to have picture perfect
            wedding photos, I also want you to enjoy the process. From engagement photos to the wedding I can guarantee that you
            won't feel awkward or overly posed, that is just not my style. I want to capture that real stuff. I want you to enjoy
            the moments and get amazing photos in the process. Being a newlywed myself, I know how stressful it can be to plan a
            wedding. Finding the perfect photographer should not be hard! It should be a when you know, you know situation. If you
            have any questions or need any help at all in the planning process I am here for you, photography related or not.
            Can't wait to meet and make your vision come to life!
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default AboutMeDescription;
