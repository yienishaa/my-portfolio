import React from 'react';
import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useTheme } from '@mui/material/styles';
import PropTypes from 'prop-types';

export const ColorModeSwitcher = ({ toggleColorMode }) => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <IconButton
      edge="end"
      color="inherit"
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      onClick={toggleColorMode}
    >
      {isDark ? <Brightness7Icon /> : <Brightness4Icon />}
    </IconButton>
  );
};

ColorModeSwitcher.propTypes = {
  toggleColorMode: PropTypes.func.isRequired,
};

export default ColorModeSwitcher;
