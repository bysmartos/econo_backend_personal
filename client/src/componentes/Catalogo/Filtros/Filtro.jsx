import React, { useState, useEffect} from 'react';
import axios from "axios";
import { Box, Typography } from '@mui/material';
import DropdownUbicacion from './Ubicacion/DropdownUbicacion';
import DropdownTransporte from './Transporte/DropdownTransporte';
import DropdownDuracion from './Duracion/DropdownDuracion';
import Catalogo from '../Catalogo'

function Filtro() {


  return (
    <>
      <Box style={{marginTop:'10rem', display:'flex', justifyContent:'center'}}>
        <DropdownUbicacion />
        <DropdownTransporte />
        <DropdownDuracion/> 
      </Box>
  
    </>
  )
}
export default Filtro