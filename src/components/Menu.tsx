import React from 'react';

import {Link} from "react-router-dom";
import {default as MenuUI} from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { useFela } from 'react-fela';

function Menu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { css } = useFela();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return <div className={css({
    position: 'fixed',
    zIndex: 2000,
    right: 0
  })}>
    <IconButton
        aria-label="more"
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
    </IconButton>
    <MenuUI
      id="simple-menu"
      anchorEl={anchorEl}
      keepMounted
      open={Boolean(anchorEl)}
      onClose={handleClose}
    >
      <Link to="/"><MenuItem>Home</MenuItem></Link>
      <Link to="/add"><MenuItem>Neuer Bewusstseinsspruch</MenuItem></Link>
    </MenuUI>
  </div>;
}

export default Menu;