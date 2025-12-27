import React from 'react';
import { Container, Typography, Grid, Link, Stack, Box } from '@mui/material';
import "@fontsource/yeseva-one";
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { FaLinkedin, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import resumepdf from '../resume/YienishaAbeyratne_NI.pdf';

function Contact() {
  return (
    <Container sx={{ minHeight: '100vh', py: 4 }} maxWidth="lg">
      <Typography fontFamily="Yeseva One" sx={{ fontSize: { xs: '2rem', md: '3.5rem' }, mb: 2 }}>
        Get In Touch
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Stack spacing={2}>
            <Box>
              <Typography>
                <EmailOutlinedIcon sx={{ mr: 1 }} /> yienisha.abeyratne@gmail.com
              </Typography>
            </Box>

            <Box>
              <Link href="https://www.linkedin.com/in/yienisha/" target="_blank" rel="noopener noreferrer" underline="none">
                <Stack direction="row" spacing={1} alignItems="center">
                  <FaLinkedin />
                  <Typography>linkedin.com/in/yienisha/</Typography>
                </Stack>
              </Link>
            </Box>

            <Box>
              <Link href="https://github.com/yienishaa/" target="_blank" rel="noopener noreferrer" underline="none">
                <Stack direction="row" spacing={1} alignItems="center">
                  <FaGithub />
                  <Typography>github.com/yienishaa</Typography>
                </Stack>
              </Link>
            </Box>

            <Box>
              <Link href={resumepdf} target="_blank" rel="noopener noreferrer" underline="none">
                <Stack direction="row" spacing={1} alignItems="center">
                  <FaExternalLinkAlt />
                  <Typography>Resume</Typography>
                </Stack>
              </Link>
            </Box>
          </Stack>
        </Grid>

        <Grid item xs={12} md={6}>
          <Stack spacing={2}>
            <Box>
              <Link href="#" underline="none">Home</Link>
            </Box>
            <Box>
              <Link href="#" underline="none">About</Link>
            </Box>
            <Box>
              <Link href="#" underline="none">Projects</Link>
            </Box>
            <Box>
              <Link href="#" underline="none">Experience</Link>
            </Box>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}
export default Contact;