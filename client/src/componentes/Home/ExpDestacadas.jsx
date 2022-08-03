import React, { useState, useEffect } from 'react';
import axios from "axios";
import {Link, Outlet} from 'react-router-dom'
import data from '../experiencias.json'
import {Grid,Container, Box, Paper, styled,Card, CardMedia,CardContent, Stack, Item,Button, Typography, CardActions} from '@mui/material'
import Filtro from "../Catalogo/Filtros/Filtro.jsx";


const Item2 = styled(Paper)(({ theme }) => ({
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

const ExpDestacadas = ({ id, id2, id3 }) => {
  
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    axios.get('http://localhost:3001/experiencias/')
      .then(res => {
        console.log(res.data)
        setData(res.data);
        setLoading(false)
      })
  }, [])




    const exp1= data.filter(exp=> exp.experiencia_id == id)
    const exp2= data.filter(exp=> exp.experiencia_id == id2)
    const exp3= data.filter(exp=> exp.experiencia_id == id3)
    const array = [...exp1, ...exp2, ...exp3]
  
    console.log(array)
  

    return (  
      <>
        
    <Typography variant="h1" style={{fontSize:'2rem', textAlign:'center', fontWeight:'bold', color:'#DE541E'}} >EXPERIENCIAS DESTACADAS</Typography>
    <Filtro/>
    <StyledContainer > 
    
          <Grid  container spacing={10} >
          {array.map((exp, index) => (
              <Grid key={index} item xs={12} sm={6} md={4} style={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
                  <Card   sx={{ maxWidth: 330}} style={{height:"35rem"}}>
                       <CardMedia
                              component="img"
                              height="370"
                              alt="bici montaña"
                              image={exp.imagen} />
                   <CardContent>
                  <Link to={`/destacadas/${exp.titulo}`} style={{textDecoration: "none"}}> <Typography variant="body1" style={{fontWeight:"bold", color:"#4B7F55", height:'48px' }}>{exp.titulo}</Typography> </Link>

               <Stack direction="row" spacing={1}>
                   <Item2>{exp.duracionhoras}</Item2>
                    <Item2>{exp.transporte}</Item2>
                    <Item2>{exp.ubicacion}</Item2>
                  </Stack>
                <CardActions style={{justifyContent:"space-between"}} >
               
                  <Typography style={{fontSize:"0.8rem", color:"#4B7F55", fontWeight:"bold"}} >
                  {exp.precio}€ Por persona
                    </Typography>
                  
             <Link to={`/reserva/${exp.experiencia_id}`} style={{textDecoration: "none"}}> <Button style={{fontSize:"0.6rem", color:"#2F2F2F", fontWeight:"bold"}}>Reserva ahora</Button></Link>   
                   </CardActions>
                  </CardContent>
                       </Card>
                </Grid>
                ))}
           </Grid>
        </StyledContainer>
        <Outlet/>
      </>
    );
}
 
export default ExpDestacadas;