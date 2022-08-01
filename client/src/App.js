import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import Footer from "./componentes/Footer/Footer";
import NavBar from "./componentes/NavBar/NavBar";
import theme from "./componentes/Styles/Theme";
import DetalleExperiencias from "./componentes/DetalleExperiencias/DetalleExperiencias";
import "@fontsource/roboto-mono";
import { ThemeProvider} from '@mui/material';
import Catalogo from './componentes/Catalogo/Catalogo';
import Home from './componentes/Home/Home';
import Login from './componentes/Login/Login';
import Registro from './componentes/registro/Registro'
import CatalogoUbicacion from './componentes/Catalogo/Filtros/Ubicacion/CatalogoUbicacion';
import CatalogoTransporte from './componentes/Catalogo/Filtros/Transporte/CatalogoTransporte';
import ExpDestacadas from './componentes/Home/ExpDestacadas';
import CatalogoDuracion from './componentes/Catalogo/Filtros/Duracion/CatalogoDuracion';
import ComoFunciona from './componentes/Footer/ComoFunciona';
import InfoEmpresa from './componentes/Footer/InfoEmpresa';
import PagoSeguro from './componentes/Footer/PagoSeguro';
import Contact from './componentes/Footer/Contacto';
import Reserva from './componentes/Reserva/Reserva'



function App() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://econotravel-grupo3.herokuapp.com/experiencias")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
        setLoading(false);
      });
  }, []);

  const searchers = (e) => {
    setSearch(e.target.value);
    console.log(e.target.value);
  };

  const filterCatalogo = data.filter((card) => {
    return card.titulo.toLowerCase().includes(search.toLowerCase());
  });
  if (loading) return <section>Cargando...</section>;

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <div className="App">
          {/* <CatalogoS/> */}

          {/* <Home/>        
       <Login/> */}
          <Routes>
            <Route path="/" element={<NavBar searcher={searchers} />}>
              <Route index element={<Home />} />
              <Route path="/cartas/:id" element={<DetalleExperiencias />} />
              <Route
                path="/cartas"
                element={<Catalogo data={filterCatalogo} />}
              />
              <Route path="/destacadas" element={<ExpDestacadas />} />
              <Route path="/destacadas/:id" element={<DetalleExperiencias />} />
              <Route path="/ubicacion/:ubi" element={<CatalogoUbicacion />} />
              <Route
                path="/transporte/:trans"
                element={<CatalogoTransporte />}
              />
              <Route path="/duracion/:dur" element={<CatalogoDuracion />} />
              <Route path="/ComoFunciona" element={<ComoFunciona />} />
              <Route path="/QuienesSomos" element={<InfoEmpresa />} />
              <Route path="/Contacto" element={<Contact />} />
              <Route path="/PagoSeguro" element={<PagoSeguro />} />
            </Route>
            <Route path="/registro" element={<Registro />} />
            <Route path="/login" element={<Login />} />
            <Route path="/reserva/:id" element={<Reserva />}/>
          </Routes>

          {/* <DropdownUbicacion filterer={filterer}/>
      <DropdownTransporte />
      <DropdownDuracion/>  */}
          {/* <Filtro/> */}
          <Footer />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}
export default App;
     
