import * as React from 'react';
import { styled, Box, Card, Typography, CardMedia, Grid } from '@mui/material';
import Tarjetacc from '../imagenes/visa_mc.jpg';
import TransferIcon from '../imagenes/transfer_icon.jpg';
import Paypal from '../imagenes/paypal.png';
import { Outlet } from 'react-router-dom';


const StyledBox = styled(Box)(({ theme }) => ({ 
    width:"100vw",
    height:"110vh", 
    display:"flex", 
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"#FFFAFA",
    marginTop:"25vh",
    gap:"2vh"
}));

const TitleTypography = styled(Typography)(({ theme }) => ({
    width:"100vw",
    backgroundColor: "#DE541E",
    color: "#FFFAFA",
    fontSize: 24,
    textAlign: "center",
    padding: "2vh"
}));

const SubTypography = styled(Typography)(({ theme }) => ({
    color: "#DE541E",
    fontSize: 18,
    textAlign:"center",
}));

const Parrafo = styled(Typography)(({ theme }) => ({
    fontSize: 12,
    textAlign:"justify"
}));

const StyledTextCard = styled(Card)(({ theme }) => ({
    width:"25vw",
    height:"55vh",
    display:"flex",
    flexDirection:"column",
    justify:"center",
    alignItem:"center",
    gap: "4vh",
    padding:"3vh",
    boxShadow:1
}));

const StyledCard = styled(Card)(({ theme }) => ({
    width:"85vw",
    height:"70vh",
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    backgroundColor: "#DE541E",
    alignItems:"center",
    gap: "5vh",
    padding: "5vh"
}));


function PagoSeguro() {
    return (
        <>
        
        <StyledBox>
            <TitleTypography>Pago Seguro</TitleTypography>
            <StyledCard>
            <Typography>
            Los medios de pago aceptados serán: </Typography>
            <Grid container spacing={1}>
                <Grid item xs={4}>
                    <StyledTextCard>
                    <CardMedia
                                component="img"
                                height="100"
                                width="20"
                                image={Tarjetacc}
                                alt="tarjeta credito"
                        />
                        <SubTypography>Tarjeta de Crédito o Débito </SubTypography>
                        <Parrafo>Pagar tu compra directamente con tu tarjeta de crédito a través de la plataforma Redsys.</Parrafo>
                        <Parrafo>Este tipo de pago viene asegurado por el BBVA, donde podrás terminar el proceso en sus servidores seguros.</Parrafo>
                    </StyledTextCard>
                </Grid>

                <Grid item xs={4}>
                <StyledTextCard>
                    <CardMedia
                                component="img"
                                height="100"
                                width="50"
                                justify="center"
                                image={TransferIcon} sx={{width:150}}
                                alt="transferencia bancaria"
                        />
                        <SubTypography>Transferencia bancaria</SubTypography>
                        <Parrafo> Puedes hacer un ingreso por el valor del importe total de la compra directamente en nuestra cuenta bancaria. </Parrafo>
                        <Parrafo> Hay que tener en cuenta que los plazos de las transferencias varían según el banco y puede tardar entre 2-3 días laborales.</Parrafo>
                        <Parrafo>Número de cuenta : ESXX-XXXX-XXXX-XX-XXXXXXXXXX</Parrafo>

                    </StyledTextCard>
                </Grid>

                <Grid item xs={4}>
                <StyledTextCard>
                    <CardMedia
                                component="img"
                                height="100"
                                width="50"
                                image={Paypal}
                                alt="Paypal logo"
                        />
                        <SubTypography>Pago por Paypal</SubTypography>
                        <Parrafo> Puedes seleccionar PayPal como la forma de pago al completar la compra.</Parrafo>
                        <Parrafo> Si ya eres cliente de PayPal, debes iniciar sesión con tus datos de usuario y confirmar el pago. Si aún no eres usuario de PayPal, debes crear una cuenta en PayPal y después confirmar el pago.</Parrafo>

                    </StyledTextCard>
                </Grid>

            </Grid>
            </StyledCard>
            </StyledBox>
            <Outlet/>
        </>
    );
}
export default PagoSeguro;