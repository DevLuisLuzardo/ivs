import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../context/UserProvider";
import 'bootstrap/dist/css/bootstrap.min.css';


const Navbar = () => {

    const { user, signOut, signIn } = useContext(UserContext);
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false); // Estado para el menú desplegable

    const openSidebar = () => {
        setSidebarOpen(true);
    };

    const closeSidebar = () => {
        setSidebarOpen(false);
    };

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    return (
        <>

            <nav className="navbar navbar-expand-lg navbar-light bg-light 
            fixed-top py-3" >

                <NavLink to="/">
                    <img src="/ivs_logo_3-1.png" alt="Logo" width="25px" />
                </NavLink>
                <span className="navbar-brand" style={{ textDecoration: 'none' }}>IVS</span>

                <NavLink to="/" className="nav-link mx-2"></NavLink>

                <div className="ms-auto">

                    <a className="text-dark"
                        href="#accederadevocionales"
                        style={{ textDecoration: 'none', paddingRight: '15px' }}
                    >
                        Devocionales
                    </a>



                    {/* Botón para abrir la sidebar */}
                    <button className="openbtn" onClick={openSidebar}>
                        ☰
                    </button>
                </div>

            </nav>


            {/* Sidebar (se muestra si sidebarOpen es true) */}
            <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
                <button className="closebtn" onClick={closeSidebar}>
                    ×
                </button>
                <a href="#">Devocionales</a>
                {/* Agrega más elementos de menú aquí */}
            </div>


        </>
    );
};

export default Navbar;
