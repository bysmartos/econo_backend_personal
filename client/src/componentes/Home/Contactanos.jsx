import {Box, styled, Typography, Button} from '@mui/material';
import ContactanosImg from '../imagenes/ContactanosImg.jpg'
import { Link } from 'react-router-dom'

const BoxStyled = styled(Box)(({ theme }) => ({
    backgroundColor: '#DE541E',
    display: 'flex',
    justifyContent: 'space-evenly',
  color: '#FFFAFA',
  alignItems:'center',
  [theme.breakpoints.down('sm')]: {   
},
[theme.breakpoints.up('sm')]: {
    
},
  }));

  
const BoxTexto = styled(Box)(({ theme }) => ({
    marginTop:'2rem',
  [theme.breakpoints.down('sm')]: { 
    width: '60vw',
},
[theme.breakpoints.up('sm')]: {
    width: '30vw',
    
},
  }));

  const StyledButton = styled(Button)(({ theme }) => ({
    color: 'black',
    fontSize:'1.4rem',
    marginBottom:'2rem',
    // background: 'linear-gradient(to bottom,  #DE541E, #4b7f55)',
    
    backgroundColor: '#FFFAFA',
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

  const BoxImg = styled('img')(({ theme }) => ({
 
    [theme.breakpoints.down('sm')]: {
      display: 'none', 
    },
   
  }));
   

const Contactanos = () => {
    return ( 

        <>
        <BoxStyled>
            <BoxImg src={ContactanosImg} style={{width: '30vw'}} alt="" />
            <BoxTexto style={{ textAlign: 'center'}}>
            <Typography style={{fontSize:'2rem', paddingBottom:'2rem'}}variant="h2" >Travel any corner of the world with us</Typography>
            <Typography style={{paddingBottom:'2rem'}} variant="body1" >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque quos aliquid magni, repudiandae error eligendi repellat id doloremque voluptate, in quo asperiores impedit neque dolore temporibus possimus, assumenda doloribus modi?</Typography>
           <Link to='/Contacto' style={{textDecoration: "none"}}> <StyledButton>Contáctanos</StyledButton></Link>
            </BoxTexto>
        </BoxStyled>
        
        
        </>
     );
}
 
export default Contactanos;