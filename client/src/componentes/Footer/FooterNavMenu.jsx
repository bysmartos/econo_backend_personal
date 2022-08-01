import React from 'react'
import {List, ListItem, styled, Typography } from '@mui/material';
import { Link } from 'react-router-dom'



const StyledListItem = styled(ListItem)(({ theme }) => ({
  height: '3rem',
  textAlign: 'center',
  display: 'flex',
  justifyContent: 'center',
  borderRadius: '2rem',

  [theme.breakpoints.down('sm')]: {
    color: '#FFFAFA',
    width:'5rem',
    },

[theme.breakpoints.up('sm')]: {
  backgroundColor: '#FFFAFA',
  width:'10rem',
}, 
  }));
  
  
  const StyledLink = styled(Typography)(({ theme }) => ({
    '&:hover': {
      color: '#DE541E',
    },
    textDecoration: 'none',
    fontWeight: 'bold',
    
    fontSize: '0.9rem',
    [theme.breakpoints.down('sm')]: {
      color: '#FFFAFA',
      
      },
  
  [theme.breakpoints.up('sm')]: {
    color:"black",
  }, 
    
  }));
  
  
  const FooterNavMenu = () => {
    return (
      <>
        <List sx={{ display:'flex', justifyContent:'space-evenly',paddingBottom: '0.6rem',paddingTop: '0.6rem', width: '100vw'}}>
          <StyledListItem sx={{  marginRight:'1rem'}}>
            <Link to='/ComoFunciona' style={{textDecoration:'none'}} ><StyledLink  variant="body1" >¿Cómo reservar?</StyledLink></Link>
          </StyledListItem>
  
          <StyledListItem  sx={{  marginRight:'1rem'}}>
             <Link to='/QuienesSomos' style={{textDecoration:'none'}} > <StyledLink  variant="body1" >¿Quiénes somos?</StyledLink></Link>
          </StyledListItem>
  
          <StyledListItem sx={{  marginRight:'1rem'}}>
          <Link to='/Contacto' style={{textDecoration:'none'}} ><StyledLink  variant="body1" >Contacto</StyledLink></Link>
          </StyledListItem>

          <StyledListItem >
          <Link to='/PagoSeguro' style={{textDecoration:'none'}} ><StyledLink  variant="body1" >Pago Seguro</StyledLink></Link>
          </StyledListItem>
          
        </List>
      </>
    )
  }

  export default FooterNavMenu;