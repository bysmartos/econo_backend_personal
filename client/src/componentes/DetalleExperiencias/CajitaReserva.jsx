import { Box, Typography, Button, styled } from "@mui/material";
import data from '../experiencias.json'
import DesplegableCantidad from './DesplegableCantidad'

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
  

const CajitaReserva = ({i}) => {
    return ( 
        <Box sx={{ border: 2, fontWeight: 'bold' }} style={{paddingLeft:'1rem',paddingRight:'1rem', textAlign:'center', borderColor:'#4b7f55',height: '42vh', width:'18rem',  marginLeft:'2rem', color:'#4b7f55', display:'flex', flexDirection:'column', justifyContent:'space-evenly', alignItems:'center' }}>
            <Typography  sx={{ fontWeight: 'bold', fontSize:'1.4rem',  marginTop:'1rem' }} variant="body1" >{data[i].precio}€ por persona</Typography>
            <Box sx={{display:'flex', alignItems:'center', justifyContent:'center',}}>
                <Typography sx={{  fontSize:'1.2rem',  }} variant="body1" >Cantidad:</Typography>
                <DesplegableCantidad/>
               
            </Box>
            <StyledButton variant="text" color="primary">
                  Reservar
                </StyledButton>
        </Box>
     );
}
 
export default CajitaReserva;