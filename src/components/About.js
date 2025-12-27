import React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Stack, Container, Grid, Typography } from '@mui/material';
import { DiPython, DiJava, DiReact, DiPhp, DiLinux } from 'react-icons/di';
import { TiHtml5 } from 'react-icons/ti';
import { SiJavascript, SiMysql, SiMicrosoftsqlserver, SiCplusplus, SiTwilio } from 'react-icons/si';
import { ReactComponent as node } from './images/node.svg';
import { ReactComponent as chakraui } from './images/chakraui.svg';
import { ReactComponent as jupyter } from './images/jupyter.svg';
import { ReactComponent as opencv } from './images/opencv.svg';
import { ReactComponent as numpy } from './images/numpy.svg';
import { ReactComponent as cssfile } from './images/filetype-css.svg';

const langs = [
  {
    skill: 'Linux/Unix',
    brandIcon: DiLinux,
    label: 'Linux',
  },
  {
    skill: 'Twilio',
    brandIcon: SiTwilio,
    label: 'Twilio',
  },
  {
    skill: 'MySQL',
    brandIcon: SiMysql,
    label: 'MySQL',
  },
  {
    skill: 'Microsoft SQL Server',
    brandIcon: SiMicrosoftsqlserver,
    label: 'Microsoft SQL Server',
  },
  {
    skill: 'Python',
    brandIcon: DiPython,
    label: 'Python',
  },
  {
    skill: 'Java',
    brandIcon: DiJava,
    label: 'Java',
  },
  {
    skill: 'HTML5',
    brandIcon: TiHtml5,
    label: 'HTML5',
  },
  {
    skill: 'CSS',
    brandIcon: cssfile,
    label: 'CSS',
  },
  {
    skill: 'React',
    brandIcon: DiReact,
    label: 'React',
  },
  {
    skill: 'Node.js',
    brandIcon: node,
    label: 'Node.js',
  },
  {
    skill: 'JavaScript',
    brandIcon: SiJavascript,
    label: 'JavaScript',
  },
];

function About() {
  const miscList = langs.map((misc, idx) => (
    <Box key={idx} sx={{ height: 80, color: 'text.primary' }}>
      <div>{misc.label}</div>
    </Box>
  ));

  return (
    <Box sx={{ height: '100vh' }} className="about-me">
      <Stack>
        <Container maxWidth="lg">
          <Typography variant="h4">About Me</Typography>
        </Container>
        <Container maxWidth="lg">
          <Typography sx={{ fontSize: { xs: '1rem', md: '1.125rem' }, color: 'text.primary' }}>
            I have over 10 years of experience designing the user interface and user experience of dozens of
            today's top websites and apps.
            I am passionate about bold but intuitive design, and doing work for companies with social responsibility.
          </Typography>
          <Box sx={{ p: 2 }} />

          <Grid container spacing={4}>
            {miscList.map((item, i) => (
              <Grid item xs={6} sm={4} md={3} key={i}>
                {item}
              </Grid>
            ))}
          </Grid>

        </Container>
      </Stack>

    </Box>
  );
}
export default About;