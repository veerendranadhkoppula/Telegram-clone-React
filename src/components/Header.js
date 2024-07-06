import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

function Header() {
  return (
    <AppBar position="static" className="header">
      <Toolbar>
        <Typography variant="h6">Telegram Clone</Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
