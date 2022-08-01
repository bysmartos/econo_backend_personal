import { styled, Box, Typography, Button} from "@mui/material";
import data from '../experiencias.json';
import test from '../imagenes/logo4.png'
import {Link} from 'react-router-dom'
import ImageDto from "../imagenes/imgDto3.png";



const HeroBox = styled(Box)(({theme}) => ({
  display: 'flex',
  justifyContent:'space-evenly'
}));

const BoxImg = styled('img')(({ theme }) => ({
 
  [theme.breakpoints.down('sm')]: {
    display: 'none', 
  },
 
}));


const Typ1 = styled(Typography)(({theme}) => ({
  [theme.breakpoints.down('sm')]: {
    fontSize:'1rem',
  },
  [theme.breakpoints.up('sm')]: {
    fontSize:'1.2rem',
  },
 
}));
const Typ2 = styled(Typography)(({theme}) => ({
  [theme.breakpoints.down('sm')]: {
    fontSize:'2rem',
  },
  [theme.breakpoints.up('sm')]: {
    fontSize:'3.6rem',
  },
 
}));
const Typ3 = styled(Typography)(({theme}) => ({
  color:'#4b7f55',
  [theme.breakpoints.down('sm')]: {
    fontSize:'',
  },
  [theme.breakpoints.up('sm')]: {
    fontSize:'0.9rem',
  },
 
}));


const BoxText = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    marginTop: '4rem',
    paddingBottom: '10rem',
    justifyContent:'space-evenly',
    flexWrap:'wrap'
  },
  [theme.breakpoints.up('sm')]: {
    justifyContent:'center',
  },
 
}));

const StyledButton = styled(Button)(({ theme }) => ({
    color: 'white',
    fontSize:'1.4rem',
    // background: 'linear-gradient(to bottom,  #DE541E, #4b7f55)',
    top: '90%',
    
    backgroundColor: '#DE541E',
    '&:hover': {
      backgroundColor: '#D4EAC8',
      color:'black',
        },
    '&:focus': {
        backgroundColor: '#4B7F55',
        color:'white',
        },
    width: '16rem',
    height: '2rem',
    textTransform: 'none'
  }));


const RegistrateHoy = () => {
    return (  
    <>
    
    <HeroBox style={{width:'100%', marginTop:'4.6rem', height:'100vh'}}> 
    <Box  style={{display:'flex',flexDirection:'column',justifyContent:'center',  marginBottom:'5.2rem'}}>
            <BoxImg style={{height: '72vh', justifyItems: 'left'}} src={ImageDto} alt={"Foto of a girl"}/>
        </Box>
        <BoxText style={{display:'flex',flexDirection:'column', textAlign:'center', marginBottom:'5.2rem'}}>
          <Typ1 variant='h1' style={{color:'#DE541E', fontWeight:'bold', marginBottom:'1.4rem'}}>INCREIBLE OPORTUNIDAD....</Typ1>
            <Box sx={{display:'flex', justifyContent:'center'}}></Box>
              <Typ2  variant='h2' style={{
               color:'black', fontWeight:'bold'}}>Registrate hoy</Typ2> 
                <Typ2  variant='h2' style={{color:'black', fontWeight:'bold',}}> y recibe un </Typ2>

              <Typ2  variant='h2' style={{color:'black',  marginBottom:'1.4rem',textShadow:'#DE541E 0.1rem 0.1rem 0.2rem',fontWeight:'bold'}}className="title-decore">25% de descuento </Typ2>
            
          <Typ3  style={{color:'#4b7f55'}}>Descuento valido hasta 31/12/2022</Typ3>
          <Box style={{display:'flex',justifyContent:'center',}}>
           <Link to='/registro'  style={{textDecoration: "none"}}> <StyledButton>
                  ¡REGISTRATE HOY!
            </StyledButton></Link>
          </Box>
        </BoxText>
       
      
    </HeroBox>
    
     
    
    </> );
}

export default RegistrateHoy;