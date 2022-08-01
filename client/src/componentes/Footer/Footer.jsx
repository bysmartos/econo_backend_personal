import React from 'react'
import {AppBar, styled, Toolbar} from '@mui/material'
import FooterNavMenu from './FooterNavMenu.jsx';



const StyledFooter = styled(AppBar)(({ theme }) => ({
  backgroundColor: '#DE541E',
  boxShadow: "none",
  top: 'auto', 
  bottom: 0,
}));


const Footer = () => {
    return ( 
        <StyledFooter position="static">
          <Toolbar >
            <FooterNavMenu />
          </Toolbar>
        </StyledFooter>

     );
}
 
export default Footer;