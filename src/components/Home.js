import React from 'react';
import { Container, Stack, Typography } from '@mui/material';
import "@fontsource/yeseva-one";
import "@fontsource/montserrat"; // Defaults to weight 400

function Home() {
  return (
    <Container sx={{ height: '100vh', mb: 4, ml: { xs: 3, sm: 6 } }}>
      <Stack spacing={2}>
        <Typography variant="h3" component="h1">Hi, I'm</Typography>
        <Typography variant="h3" component="h1">{'</>Yienisha Abeyratne>'}</Typography>

        <Typography variant="body1" sx={{ fontWeight: 500, width: '100%' }}>
          I’m a passionate backend developer
        </Typography>
        <Typography variant="body1">Focusing on Java Springboot</Typography>
      </Stack>
    </Container>
  );
}

export default Home;
