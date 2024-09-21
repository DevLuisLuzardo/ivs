import { Routes, Route, Link } from "react-router-dom";

import Sidebar, { SidebarItem } from "./components/Sidebar";
import { FaBars, FaDatabase } from "react-icons/fa"; // Import the hamburger icon from the FontAwesome library
import { SiFirebase } from "react-icons/si"; // Import the hamburger icon from the FontAwesome library
import { Calendar, BookOpenText } from "lucide-react";
import "./styles.css"; // Importa tu archivo de estilos CSS

import Navbar from "./components/Navbar";
import Colapsible from "./components/Colapsible";

import Unete from "./routes/Unete";
//import Login from "./routes/Login";

import NotFound from "./routes/NotFound";
import RequireAuth from "./components/RequireAuth";

import Home from "./routes/Home";
import Homeimg from "./assets/inicio1.png";

import Mision from "./routes/Mision"; // Importa el componente Misión
import Misionimg from "./assets/mision1.png";

import Vision from "./routes/Vision"; // Importa el componente Vision
import Visionimg from "./assets/vision1.png";

const App = () => {
  return (
    //renderiza contenido visible en la pantalla
    <>
      {/* contenedorr principal vista sitio web */}
      <div className="container">
        
        {/* contenido sidebar */}
        {/* fin. contenido sidebar */}

        <div className="content">
          <Routes>
            //Agregar Routes en RequireAuth
            <Route
              path="/"
              element={
                //<RequireAuth>
                <Home />
                //</RequireAuth>
              }
            />
            <Route
              path="/Home"
              element={
                <RequireAuth>
                  <Home />
                </RequireAuth>
              }
            />
            <Route path="/home" element={<Home />} />
            <Route path="/Mision" element={<Mision />} />
            <Route path="/Vision" element={<Vision />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
      {/* fin. conte. princi... */}
    </>
    //fin. renderiza...
  );
};

export default App;
