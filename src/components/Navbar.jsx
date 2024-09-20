import { useContext } from "react";

import Sidebar, { SidebarItem } from "./Sidebar";
import { Home, Calendar, BookOpenText } from "lucide-react";
import { FaBars, FaDatabase } from 'react-icons/fa'; // Import the hamburger icon from the FontAwesome library
import { SiFirebase } from "react-icons/si"; // Import the hamburger icon from the FontAwesome library
import '../styles.css';

import { NavLink } from "react-router-dom";
import { UserContext } from "../context/UserProvider";
import 'bootstrap/dist/css/bootstrap.min.css';

import Inicio from '../assets/inicio1.png';
import Mision from '../assets/mision1.png';
import Vision from '../assets/vision1.png';
//import Legalidad from '../assets/.png';
//import Devocional from '../assets/.png';
//import Intercesion from '../assets/.png';
//import Eventos from '../assets/.png';
//import Sedesasocia from '../assets/.png';


const Navbar = () => {
    const { user, signOut, signIn } = useContext(UserContext);

    return (
        <>

            {/*

            <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top py-3"
            >
                <div>

                    <NavLink to="/">
                        <img src="/ivs_logo_3-1.png" alt="Logo" width="25px" />
                    </NavLink>
                    <span className="navbar-brand" style={{ textDecoration: 'none' }}>IVS</span>
                    <NavLink to="/" className="nav-link mx-2"></NavLink>
                </div>

            </nav>

            */}

        </>
    );
};

export default Navbar;
