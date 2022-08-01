import React, {useState, useEffect} from 'react';
import { Box, Typography, Button, styled } from '@mui/material'
import { Outlet } from 'react-router-dom'
import axios from "axios";
import Breadcrums from "./Breadcrums";
import ReadMore from "./ReadMore";
import { useParams } from "react-router-dom";
import DesplegableCantidad from './DesplegableCantidad';
import { Link } from 'react-router-dom'




const StyledTitulo = styled(Typography)(({theme}) => ({
   
    fontSize:'1.8rem',
    color:'#4B7F55',
    fontWeight: 'bold',
    marginTop:'3rem',
    [theme.breakpoints.down('sm')]: {
         
    },
    [theme.breakpoints.up('sm')]: {
        marginBottom:'2rem',   
    },
     [theme.breakpoints.up('xl')]: {
        marginBottom:'4rem',
    },
    
}));
const ResponsiveBox = styled(Box)(({ theme }) => ({
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  
    [theme.breakpoints.up("sm")]: {
      justifyContent: "space-evenly",
      width: "100vw",
    },
  }));
  
  const StyledImg = styled("img")(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    height: "42vh",
  },
  [theme.breakpoints.up("sm")]: {
    height: "36vh",
  },
  [theme.breakpoints.up("xl")]: {
    height: "42vh",
  },
  }));
   const StyledButton = styled(Button)(({ theme }) => ({
    color: 'white',
    fontSize:'1.4rem',
    backgroundColor: '#DE541E',
    '&:hover': {
      backgroundColor: '#D4EAC8',
        },
    '&:focus': {
        backgroundColor: '#4B7F55',
        },
    width: '10rem',
    textTransform: 'none'
  }));





const DetalleExperiencias = () => {
    const {id} = useParams()
  
  
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    
    useEffect(() => {
      setLoading(true)
      axios.get('https://econotravel-grupo3.herokuapp.com/experiencias')
        .then(res => {
          console.log(res.data)
          setData(res.data);
          setLoading(false)
        })
    }, [])
      
    const findExperiencias = data.filter(experiencias => experiencias.titulo === id);
       
       if (loading) return <section>Cargando...</section>
    
    return ( 
        <>
                {findExperiencias.map((exp, index) => (
        <Box key={index}
          sx={{ display: "flex", flexDirection: "column", alignItems: "center" }} >
          <Breadcrums i={exp.etiquetas[0].ubicacion} i2={exp.etiquetas[1].transporte} i3={exp.etiquetas[2].duracion}/>
          <StyledTitulo variant="h1">{ exp.titulo }</StyledTitulo>
          <Box sx={{}}>
              <ResponsiveBox sx={{}}>
                  <StyledImg src={exp.img} alt="" />
                  <ReadMore>{exp.descripcion}</ReadMore>
                  <Box
                      sx={{ border: 2, fontWeight: "bold" }}
                      style={{
                          paddingLeft: "1rem",
                          paddingRight: "1rem",
                          textAlign: "center",
                          borderColor: "#4b7f55",
                          height: "42vh",
                          width: "18rem",
                          marginLeft: "2rem",
                          color: "#4b7f55",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "space-evenly",
                          alignItems: "center",
                      }} >
                      <Typography
                          sx={{
                              fontWeight: "bold",
                              fontSize: "1.4rem",
                              marginTop: "1rem",
                          }}
                          variant="body1" >
                          {exp.precio}€ por persona
                      </Typography>
                      <Box
                          sx={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                          }} >
                          <Typography sx={{ fontSize: "1.2rem" }} 
                              variant="body1">
                              Cantidad:
                          </Typography>
                          <DesplegableCantidad />
                      </Box>
                      <Link to={`/reserva/${exp.id}`} style={{textDecoration:'none'}} ><StyledButton variant="text" color="primary">
                          Reservar
                      </StyledButton></Link>
                  </Box>
              </ResponsiveBox>
          </Box>
        </Box>
         ))}
  <Outlet />
            </>   
     );
}

 
export default DetalleExperiencias;


// [theme.breakpoints.down('sm')]: {
   
// },
// [theme.breakpoints.up('sm')]: {
    
// },
// [theme.breakpoints.up('xl')]: {
    
//     },