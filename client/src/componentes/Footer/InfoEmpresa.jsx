import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Card, CardActionArea, CardContent, CardActions, Typography, CardMedia, Grid, Paper } from '@mui/material';
import ImagenChica from '../imagenes/woman-g3c4e3a00a_1920.jpg';
import {Outlet} from 'react-router-dom'
import GifBike from '../imagenes/girlbike.gif';
import {Link} from 'react-router-dom';

const TitleTypography = styled(Typography)(({ theme }) => ({
    backgroundColor:"#DE541E",
    color: "#FFFAFA",
    fontSize: 24,
    textAlign: "center",
    padding: "1vh"
}));

const SubTypography = styled(Typography)(({ theme }) => ({
    color: "#DE541E",
    fontSize: 20,
    textAlign:"center",
}));

const Parrafo = styled(Typography)(({ theme }) => ({
    fontSize: 12,
    textAlign:"justify"
}));

const StyledTextCard = styled(Card)(({ theme }) => ({
    width:"45vw",
    height:"50vh",
    display:"flex",
    flexDirection:"column",
    justify:"center",
    alignItem:"center",
    gap: "3vh",
    padding:"5vh"
}));

const StyledCard = styled(Card)(({ theme }) => ({
    width:"30vw",
    height:"50vh",
    display:"flex",
    flexDirection:"column",
    justify:"center",
    alignItem:"center",
    backgroundColor: "white",
    padding:"1vh",
    paddingBottom: "9vh"
}));

const StyledBox = styled(Box)(({ theme }) => ({ 
    width:"100vw",
    height:"110vh", 
    display:"flex", 
    flexDirection:"column",
    justifyContent:"center",
    alignItem:"center",
}));

function InfoEmpresa() {
    return (
        <Box sx={{width:"100vw", display:"Flex", flexDirection:"row", alignItem:"center", justifyContent:"center"}}>
                <StyledBox>
            <TitleTypography gutterBottom variant="caption" component="div">¿Quiénes somos?</TitleTypography>
            <Box sx={{width:"100vw", height:"13vw", display:"flex", flexDirection:"row", justifyContent:"center", gap:"3vh", marginTop:"2vh"}}>
                    <StyledTextCard>
                        <SubTypography gutterBottom variant="caption" component="div">Misión</SubTypography>
                        <Parrafo> Nuestra empresa se fundó a raíz de un viaje que nuestra fundadora, Marina Herrán, realizó en bicicleta por Cataluña en el verano de 2001.</Parrafo>
                        <Parrafo>Durante ese periodo, descubrió que las opciones turísticas que ofrecían ciudades como Barcelona, Girona y Reus dependían de transportes contaminantes y actividades poco respetuosas con la naturaleza y el entorno, algo que causaba un progresivo deterioro de los increíbles parajes naturales de Cataluña. </Parrafo>
                        <Parrafo> Preocupada por la falta de alternativas eco-friendly, Marina se propuso fundar una agencia de experiencias turísticas donde el respeto por la naturaleza fuera la principal prioridad. Así nació Econotravel Barcelona.</Parrafo>
                        <CardActions>

                        </CardActions>
                    </StyledTextCard>
                    <StyledCard>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                image={ImagenChica} sx={{height:300, width:410}}
                                alt="chica"
                            />
                            <CardContent>
                                <Typography variant="caption" component="div">
                                    Marina Herrán, fundadora de Econotravel
                                </Typography>
                                
                            </CardContent>
                        </CardActionArea>
                    </StyledCard>
                </Box>
            </StyledBox>
            <Outlet/>
            </Box>
    );
}
export default InfoEmpresa;