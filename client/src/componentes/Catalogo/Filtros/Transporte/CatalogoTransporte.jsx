import React, { useState, useEffect } from 'react';
import {Link, Outlet,} from 'react-router-dom'
import { styled } from '@mui/material/styles';
import { Card, CardActions,Box, CardContent, CardMedia, Grid, Paper, Stack, Container, Button, Typography } from '@mui/material';
import axios from "axios";
import { useParams } from "react-router-dom";
import Filtro from '../Filtro';



const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: "#FFFAFA",
     padding: theme.spacing(1),
    textAlign: 'center',
    color: "#4B7F55",
  }));
   const StyledContainer = styled(Container)(({ theme }) => ({
     paddingTop: theme.spacing(6),
     paddingBottom: theme.spacing(6),
     maxWidth: "lg",
     backgroundColor: "#FFFAFA",
     display: "flex",
     flexWrap: "wrap",
     justifyContent:"space-around",
     
    
   }));
  
   
function CatalogoTransporte() {
  const {trans} = useParams()

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    setLoading(true)
    axios.get('https://econotravel-grupo3.herokuapp.com/experiencias')
      .then(res => {
        console.log(res.data)
        setData(res.data);
        setLoading(false)
      })
  }, [])
    console.log(data)

  const findTransporte = data.filter(experiencias => experiencias.etiquetas[1].transporte.includes(trans));
  console.log(findTransporte)
  if (loading) return <section>Cargando...</section>;

  return (
        <>
      < Filtro/>
      <StyledContainer style={{paddingTop:'4rem'}}>
     
                   
            <Grid container spacing={10}>
               {findTransporte.map((exp, index) => (
                 <Grid key={index} item xs={12} sm={6} md={4}>
                  <Card  sx={{ maxWidth: 330}} style={{height:"35rem"}} >
                    <CardMedia
                              component="img"
                               height="370"
                               alt="bici montaña"
                              image={exp.img} />
                     <CardContent>
                     <Link to={`/cartas/${exp.titulo}`} style={{textDecoration: "none"}}>   <Typography variant="body1" style={{fontWeight:"bold", color:"#4B7F55" }}>  {exp.titulo} </Typography> </Link> 
               <Stack direction="row" spacing={1}>
                   <Item>Chip One</Item>
                    <Item>Chip One</Item>
                    <Item>Chip One</Item>
                  </Stack>
                <CardActions style={{justifyContent:"space-between"}} >
                  <Typography style={{fontSize:"0.8rem", color:"#4B7F55", fontWeight:"bold"}} >{exp.etiquetas[0].ubicacion}
                  <Typography style={{fontSize:"0.7rem", color:"#2F2F2F"}} >
                  {exp.precio}€ Por persona
                    </Typography>
                  </Typography>
                <Button style={{fontSize:"0.6rem", color:"#2F2F2F", fontWeight:"bold"}}>Reserva ahora</Button>
                   </CardActions>
                  </CardContent>
                 
                       </Card>
                 </Grid>
                 ))}
           </Grid>
             </StyledContainer>
      <Outlet/>
   </>
      )
  }
  export default CatalogoTransporte