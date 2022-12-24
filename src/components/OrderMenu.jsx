import * as React from 'react';
import Button from '@mui/material/Button';
import { Menu, MenuItem } from '@mui/material';
import SortByAlphaIcon from '@mui/icons-material/SortByAlpha';

export default function OrderMenu({ orderByNewest, orderByAttendance }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <SortByAlphaIcon fontSize='large' />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem className='menu-item' onClick={orderByAttendance}>By Attendance</MenuItem>
        <MenuItem className='menu-item' onClick={orderByNewest}>By Existance</MenuItem>
      </Menu>
    </div>
  );
}