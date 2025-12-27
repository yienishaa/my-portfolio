import React, { useState } from 'react';
import { Container, Stack, Box, Typography } from '@mui/material';
import "@fontsource/yeseva-one";

import img1 from './scotia.jpg';


function Descriptions() {
  const [overview, setOverview] = useState();

  function displayText() {
    setOverview('sssssssss');
  }

  return (
    <Container maxWidth="lg" sx={{ minHeight: '120vh', py: 4 }}>
      <Container maxWidth="lg">
        <Typography variant="h4" sx={{ fontFamily: 'Yeseva One', mb: 2 }}>
          Experience
        </Typography>
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
          {[0, 1, 2].map((i) => (
            <Box key={i} sx={{ flex: 1 }}>
              <Typography color="text.primary">Scotiabank</Typography>
              <Box sx={{ position: 'relative', bgcolor: 'grey.500' }}>
                <img src={img1} alt="scotia" style={{ width: '100%', opacity: 0.3 }} />
                <Box sx={{ position: 'absolute', left: 0, bottom: 0, p: 2 }}>
                  <Typography color="white">Software Engineer - Intern</Typography>
                  <p>Boolean state: {overview}</p>
                  <button
                    onClick={() => {
                      displayText();
                    }}
                  >
                    Click me to toggle the boolean value
                  </button>
                </Box>
              </Box>
            </Box>
          ))}
        </Stack>
      </Container>
    </Container>
  );
}
export default Descriptions;