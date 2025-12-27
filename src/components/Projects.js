import React, { useRef, useState } from 'react';
import {
  Container,
  Box,
  Grid,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
} from '@mui/material';

import "@fontsource/yeseva-one";

import ProjectDescription from './Project-Description';

const projects = [
  { id: 0, name: 'E-Commerce Website' },
  { id: 1, name: 'Portfolio Website' },
  { id: 2, name: 'SMART ROAM' },
  { id: 3, name: 'Lost Roamer Heatmap' },
  { id: 4, name: 'Bill Shock Prevention Notifier' },
];

function Projects() {
  const [open, setOpen] = useState(false);
  const [clickedButton, setClickedButton] = useState(0);

  const initialRef = useRef(null);
  const finalRef = useRef(null);

  function openClick(id) {
    setClickedButton(id);
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  const buttonList = projects.map(buttons => (
    <Button
      key={buttons.id}
      id={buttons.id}
      variant="contained"
      onClick={() => openClick(buttons.id)}
      sx={{ height: 100, borderRadius: 2 }}
    >
      <Typography sx={{ fontSize: { xs: '1rem', md: '1.25rem' } }}>{buttons.name}</Typography>
    </Button>
  ));

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', height: '100vh' }}>
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Typography color="text.primary" fontFamily="Yeseva One" sx={{ fontSize: { xs: '2rem', md: '3rem' } }}>
          Projects
        </Typography>

        <Grid container spacing={3} sx={{ mt: 2 }}>
          {projects.map(project => (
            <Grid item xs={12} sm={6} md={4} key={project.id}>
              {buttonList[project.id]}
            </Grid>
          ))}
        </Grid>

        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="project-dialog-title"
          fullWidth
          maxWidth="lg"
        >
          <DialogTitle id="project-dialog-title">Project Details</DialogTitle>
          <DialogContent dividers>
            <ProjectDescription id={clickedButton} />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Close</Button>
          </DialogActions>
        </Dialog>
      </Container>
    </Box>
  );
}
export default Projects;