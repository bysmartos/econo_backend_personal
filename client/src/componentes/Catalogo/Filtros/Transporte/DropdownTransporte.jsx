import React, { useState, useEffect} from 'react';
import Catalogo from '../../Catalogo';
import { Button, Box, Menu, MenuItem } from '@mui/material';
import {Link, Outlet,} from 'react-router-dom'
import axios from "axios";

const transportes= ['Bicicleta', 'Barco', 'A pie', 'Bus', 'Globo']
function DropdownTransporte() {
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
      <Button style={{ fontSize: "0.8rem", textTransform: 'capitalize', color: "#2f2f2f", fontWeight: "bold" }} id="basic-button" aria-controls={open ? 'basic-menu' : undefined} aria-haspopup="true" aria-expanded={open ? 'true' : undefined} onClick={handleClick}>Transporte</Button>
      <Menu id="basic-menu" anchorEl={anchorEl} open={open} onClose={handleClose} MenuListProps={{ 'aria-labelledby': 'basic-button', }}>
      <Link to={`/transporte/${transportes[0]}`} style={{textDecoration:"none"}} ><MenuItem style={{ fontSize: "0.8rem", color: "#2f2f2f", fontWeight: "bold" }} onClick={handleClose}>{transportes[0]}</MenuItem></Link>
      <Link to={`/transporte/${transportes[1]}`} style={{textDecoration:"none"}}><MenuItem style={{ fontSize: "0.8rem", color: "#2f2f2f", fontWeight: "bold" }} onClick={handleClose}>{transportes[1]}</MenuItem></Link>
      <Link to={`/transporte/${transportes[2]}`} style={{textDecoration:"none"}}><MenuItem style={{ fontSize: "0.8rem", color: "#2f2f2f", fontWeight: "bold" }} onClick={handleClose}>{transportes[2]}</MenuItem></Link>
      <Link to={`/transporte/${transportes[3]}`} style={{textDecoration:"none"}}><MenuItem style={{ fontSize: "0.8rem", color: "#2f2f2f", fontWeight: "bold" }} onClick={handleClose}>{transportes[3]}</MenuItem></Link>
      <Link to={`/transporte/${transportes[4]}`} style={{textDecoration:"none"}}><MenuItem style={{ fontSize: "0.8rem", color: "#2f2f2f", fontWeight: "bold" }} onClick={handleClose}>{transportes[4]}</MenuItem></Link>

      
      </Menu>
    </Box>
    <Outlet/>
    </>

  );
}
export default DropdownTransporte;