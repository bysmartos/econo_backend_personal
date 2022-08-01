import {React, useState, useEffect} from "react";
import { styled } from '@mui/material/styles'
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import logo1 from '../../componentes/imagenes/logo1.png';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import axios from "axios";
import { useParams } from "react-router-dom";



const handleSubmit = (event) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  console.log({
    email: data.get("email"),
    password: data.get("password"),
  });
};
const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: "#FFFAFA",
  [theme.breakpoints.down('sm')]: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
   
  },
  
}))

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

const Reserva = () => {
  const {id} = useParams();

  const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    
    useEffect(() => {
      setLoading(true)
      axios.get('https://econotravel-grupo3.herokuapp.com/experiencias')
        .then(res => {
          console.log(res.data)
          setData(res.data);
          setLoading(false)
        })
    }, [])
      
    console.log(data)
    const test = data.filter(exper => exper.id == id);
    console.log(test)
       
       if (loading) return <section>Cargando...</section>
  return (
    <>
        {test.map((exp, index) => (
      <StyledBox  key={index}>

        <Box sx={{ marginRight: "auto" , display:'flex'}}>
          <Link to="/">
            <img src={logo1} alt="logo" sx={{ width: 100, height: 100 }} />
            </Link>
            <Typography variant='h1' style={{marginTop:'10rem', color:"#4b7f55", fontWeight:'bold', fontSize:'2.8rem'}} >Formulario de reserva</Typography>
          
        </Box>
      <Box sx={{ width:'100vw', display:'flex', justifyContent:"center", }}>
      <Container component="main" style={{marginTop:'4rem'}} >
        <CssBaseline />
        <Box
             sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
    
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <Box style={{display:'flex',}}>
            <TextField
              style={{ color: "#4b7f55" }}
              margin="normal"
              required
              fullWidth
              id="email"
              label="Nombre"
              name="email"
              autoComplete="email"
              autoFocus
              color="success"
              
            />
               <TextField
              style={{ color: "#4b7f55", marginLeft:'2rem' }}
              margin="normal"
              required
              fullWidth
              id="email"
              label="Apellidos"
              name="email"
              autoComplete="email"
              autoFocus
              color="success"
            />
            </Box>
            <TextField
              style={{ color: "#4b7f55" }}
              margin="normal"
              required
              fullWidth
              id="email"
              label="Dirección"
              name="email"
              autoComplete="email"
              autoFocus
              color="success"
            />
             <Box style={{display:'flex',}}>
            <TextField
              style={{ color: "#4b7f55" }}
              margin="normal"
              required
              fullWidth
              id="email"
              label="Nombre"
              name="email"
              autoComplete="email"
              autoFocus
              color="success"
            />
               <TextField
              style={{ color: "#4b7f55",  marginLeft:'2rem' }}
              margin="normal"
              required
              fullWidth
              id="email"
              label="Apellidos"
              name="email"
              autoComplete="email"
              autoFocus
              color="success"
            />
            </Box>
            <TextField
        type="date"
        margin="normal"
        label="Start date"

        defaultValue="2019-05-24"
        inputProps={{ min: "2019-01-24", max: "2020-05-31" }}
      />

            <Grid container>
              <Grid item xs sx={{ display: "flex", alignItems: "center" }}>
                
              </Grid>
            </Grid>
          </Box>
        </Box>
              </Container>
              <Box sx={{ border: 2, fontWeight: 'bold', marginRight:'12rem',  marginBottom:'12rem' }} style={{paddingLeft:'1rem',paddingRight:'1rem', textAlign:'center', borderColor:'#4b7f55',height: '80vh', width:'28rem',  marginLeft:'2rem', color:'#4b7f55', display:'flex', flexDirection:'column', justifyContent:'space-evenly', alignItems:'center' }}>
            <Typography  sx={{ fontWeight: 'bold', fontSize:'1.4rem',  marginTop:'1rem' }} variant="body1" >250€ </Typography>
            <Typography  sx={{ fontWeight: 'bold', fontSize:'1rem',  marginTop:'1rem' }} variant="body1" >Experiencia reservada: </Typography>
            <Typography  sx={{ fontWeight: 'bold', fontSize:'1rem',  marginTop:'1rem' }} variant="body1" > {exp.titulo}</Typography>



            <Box sx={{display:'flex', alignItems:'center', justifyContent:'center',}}>
                <Typography sx={{  fontSize:'1.2rem',  }} variant="body1" >Cantidad: 1</Typography>
               
            </Box>
            <StyledButton variant="text" color="primary">
                  Pagar
                </StyledButton>
                <Typography  sx={{ fontWeight: 'bold', fontSize:'1rem',  marginTop:'1rem' }} variant="body1" >Garantías Econotravel: </Typography>
          <Box style={{display:'flex'}} >
          <CheckBoxIcon/>
          <Typography variant="body1" style={{fontSize:'0.8rem'}}>99% de clientes satisfechos</Typography>
          </Box>
          <Box style={{display:'flex'}} >
          <CheckBoxIcon/>
          <Typography variant="body1" style={{fontSize:'0.8rem'}}>Colaboradores de Calidad</Typography>
          </Box>
          <Box style={{display:'flex'}} >
          <CheckBoxIcon/>
          <Typography variant="body1" style={{fontSize:'0.8rem'}} >Pago 100% seguro</Typography>
          </Box>
        </Box>
              </Box>
              </StyledBox>
        ))}
    </>
  );
};
export default Reserva;
