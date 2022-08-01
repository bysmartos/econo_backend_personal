import React, { useState } from "react";
import { Box, styled } from "@mui/material";

  


const ResponsiveBox = styled(Box)(({theme}) => ({
  textAlign:'justify', 
  fontSize:'1.2rem',  
  marginLeft:'2rem',
  

  [theme.breakpoints.down('sm')]: {
    width:'60%',
      },
  
  [theme.breakpoints.up('sm')]: {
    width:'26rem',
    height: '34rem',
    marginTop: '4rem',
  }, 
}));

const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
      <ResponsiveBox>
        {isReadMore ? text.slice(0, 180) : text}
        <Box component="div" display="inline" onClick={toggleReadMore} className="read-or-hide">
          {isReadMore ? "...Leer más" : " Leer menos"}
        </Box>
    </ResponsiveBox>
  );
};

export default ReadMore;


//style={{width:'28rem', height:'14rem',marginTop: '1rem', marginLeft:'2rem',  alignItems: 'center', display: 'flex'}}

