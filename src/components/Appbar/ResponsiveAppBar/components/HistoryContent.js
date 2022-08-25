import { MenuItem, MenuList, Paper } from '@mui/material';
import React from 'react';

export default function HistoryContent() {
  return (
    <Paper>
      <MenuList>
        <MenuItem style={{ textAlign: 'center', display: 'block' }} disabled>
          salam
        </MenuItem>
      </MenuList>
    </Paper>
  );
}
