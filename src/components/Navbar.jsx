import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../context/UserProvider";

import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
    const { user, signOut, signIn } = useContext(UserContext);

    return (
        <>

            <nav className="navbar navbar-expand-lg navbar-light bg-light">

                <NavLink to="/">
                    <img src="/ivs_logo_3-1.png" alt="Logo" width="25px" />
                </NavLink>
                <span className="navbar-brand" style={{ textDecoration: 'none' }}>IVS</span>

                <NavLink to="/" className="nav-link mx-2"></NavLink>

                <div className="ms-auto">
                    <a className="text-dark"
                        href="#accederadevocionales"
                        style={{ textDecoration: 'none' , paddingRight:'15px'}}
                    >
                    Devocionales
                    </a>
                </div>

            </nav>

        </>
    );
};

export default Navbar;