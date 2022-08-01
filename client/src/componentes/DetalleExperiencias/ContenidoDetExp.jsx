import { Box, theme, styled } from "@mui/material";
import data from '../experiencias.json'
import ReadMore from "./ReadMore";
import CajitaReserva from './CajitaReserva';
import { useParams } from "react-router-dom";


const ResponsiveBox = styled(Box)(({theme}) => ({
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
        flexDirection: 'column'
        },
    
    [theme.breakpoints.up('sm')]: {
        justifyContent: 'space-evenly',
        width:'100vw'
      
    }, 
  }));

  const StyledImg = styled('img')(({ theme }) => ({

    [theme.breakpoints.down('sm')]: {
        height:'42vh',  
    },
    [theme.breakpoints.up('sm')]: {
        height:'36vh',  
    },
     [theme.breakpoints.up('xl')]: {
        height:'42vh', 
    },
  
  }));




const ContenidoDetExp = ({ i }) => {

    return ( 
    <ResponsiveBox sx={{}}>
        <StyledImg src={data[i].img} alt=""  />
        <ReadMore >
            {data[i].descripcion} 
        </ReadMore>
        <CajitaReserva i={i}/>
    </ResponsiveBox> 
    );
}
 
export default ContenidoDetExp;