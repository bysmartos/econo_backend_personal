import React, { useState, useEffect} from 'react';
import Catalogo from '../../Catalogo';
import { Button, Box, Menu, MenuItem } from '@mui/material';
import {Link, Outlet,} from 'react-router-dom'
import axios from "axios";

const duraciones= ['Excursión larga', 'Excursión corta']
function DropdownUbicacion() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  
  const handleClose = (event) => {
    setAnchorEl(null);
  };


  return (
    <>
    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
      <Button style={{ fontSize: "0.8rem", textTransform: 'capitalize', color: "#2f2f2f", fontWeight: "bold" }} id="basic-button" aria-controls={open ? 'basic-menu' : undefined} aria-haspopup="true" aria-expanded={open ? 'true' : undefined} onClick={handleClick}>Duración</Button>
      <Menu id="basic-menu" anchorEl={anchorEl} open={open} onClose={handleClose} MenuListProps={{ 'aria-labelledby': 'basic-button', }}>
      <Link to={`/duracion/${duraciones[0]}`}  style={{textDecoration:"none"}}><MenuItem style={{ fontSize: "0.8rem", color: "#2f2f2f", fontWeight: "bold" }} onClick={handleClose}>{duraciones[0]}</MenuItem></Link>
      <Link to={`/duracion/${duraciones[1]}`}  style={{textDecoration:"none"}}><MenuItem style={{ fontSize: "0.8rem", color: "#2f2f2f", fontWeight: "bold" }} onClick={handleClose}>{duraciones[1]}</MenuItem></Link>
      </Menu>
    </Box>
    <Outlet/>
    </>

  );
}
export default DropdownUbicacion;