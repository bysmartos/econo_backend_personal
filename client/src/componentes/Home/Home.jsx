import Hero from "./Hero.jsx";
 import ExpDestacadas from "./ExpDestacadas";
import RegistrateHoy from "./RegistrateHoy";
import Contactanos from "./Contactanos.jsx";
import {Outlet} from 'react-router-dom'

function Home (){
    return ( 
        <>
            <Hero/>
            <ExpDestacadas id='2'  id2='4'  id3='6'/> 
            <Contactanos/>
            <RegistrateHoy />
            <Outlet/>
        </>

     );
}
 
export default Home;