import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import Typography from '@mui/material/Typography';
import PersonIcon from '@mui/icons-material/Person';
import CardTravelIcon from '@mui/icons-material/CardTravel';
import PaymentIcon from '@mui/icons-material/Payment';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { styled, Card } from '@mui/material';
import {Link, Outlet} from 'react-router-dom'
import {Box} from  '@mui/material';



const StyledDot = styled(TimelineDot)(({ theme }) => ({
    color: "#DE541E"
}));

const TitleTypography = styled(Typography)(({ theme }) => ({
    backgroundColor:"#DE541E",
    color: "#FFFAFA",
    fontSize: 24,
    textAlign: "center",
    padding: "1vh"
}));

const SubTypography = styled(Typography)(({ theme }) => ({
    color: "#DE541E",
    fontSize: 18,
}));

const Parrafo = styled(Typography)(({ theme }) => ({
    fontSize: 12,
    align: "justify",
}));

const StyledCard = styled(Card)(({ theme }) => ({
    marginTop:"27vh",
    height:"80vh",
    display:"flex",
    flexDirection:"column",
    justify:"center",
    alignItem:"center",
    backgroundColor: "#FFFAFA",
}));

const StyledBox = styled(Box)(({ theme }) => ({
    height:"100vh", 
    width:"100vw", 
    display:"flex", 
    flexDirection:"column",
    justify:"center",
    alignItem:"center",
}));


export default function ComoFunciona() {
    return (
        <>
        <StyledBox>
        <StyledCard>
        <TitleTypography>¿Cómo reservar?</TitleTypography>
            <Timeline style={{height:"50vh", display:"flex", justify:"center"}}position="alternate" >
                <TimelineItem>
                    <TimelineOppositeContent sx={{ m: 'auto 0' }} align="right" variant="body2" color="text.secondary">
                        Paso 1
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <StyledDot variant="outlined">
                            <PersonIcon />
                        </StyledDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                        <SubTypography variant="h6" component="span">Regístrate</SubTypography>
                        <Parrafo> Regístrate <Link to='/registro' style={{textDecoration:'none'}}>aquí.</Link></Parrafo>
                        <Parrafo>Si ya tienes una cuenta, <Link to='/login' style={{textDecoration:'none'}}>Inicia Sesión aqui</Link></Parrafo>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent sx={{ m: 'auto 0' }} variant="body2" color="text.secondary"> Paso 2 </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineConnector />
                        <StyledDot variant="outlined">
                            <CardTravelIcon />
                        </StyledDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                        <SubTypography variant="h6" component="span">Encuentra tu experiencia</SubTypography>
                        <Parrafo>Revisa nuestro <Link to='/cartas' style={{textDecoration:'none'}}>Catálogo</Link></Parrafo>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent sx={{ m: 'auto 0' }} variant="body2" color="text.secondary">
                        Paso 3
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineConnector />
                        <StyledDot variant="outlined">
                            <LaptopMacIcon />
                        </StyledDot >
                        <TimelineConnector/>
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                        <SubTypography variant="h6" component="span">
                            Confirma tus datos
                        </SubTypography>
                        <Parrafo>Selecciona la fecha y el número de personas</Parrafo>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent sx={{ m: 'auto 0' }} variant="body2" color="text.secondary">
                        Paso 4
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineConnector/>
                        <StyledDot variant="outlined">
                            <PaymentIcon />
                        </StyledDot>
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                        <SubTypography variant="h6" component="span">
                            Elige tu método de pago
                        </SubTypography>
                        <Parrafo>Para más información, haz click <Link to='/PagoSeguro' style={{textDecoration:'none'}}>aquí</Link></Parrafo>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent sx={{ m: 'auto 0' }} variant="body2" color="text.secondary"> Paso 5 </TimelineOppositeContent>
                    <TimelineSeparator>                 
                    <TimelineConnector/>
                        <StyledDot variant="outlined">
                            <CheckCircleIcon />
                        </StyledDot>
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                        <SubTypography>Reserva confirmada</SubTypography>
                        <Parrafo> Tras recibir el pago se confirma la reserva.</Parrafo>
                        <Parrafo> Revisa tu e-mail!</Parrafo>
                    </TimelineContent>
                </TimelineItem>
            </Timeline>
        </StyledCard>
            </StyledBox>
            <Outlet/>
            </>
    );
}
