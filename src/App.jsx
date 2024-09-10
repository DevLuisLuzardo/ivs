import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./routes/Home";
import Unete from "./routes/Unete";
//import Login from "./routes/Login";
import NotFound from "./routes/NotFound";
import RequireAuth from "./components/RequireAuth";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <>

      <Navbar />

      {/* 
      <h1>App Encab</h1> 
      */}

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
          path="/unete"
          element={
            <RequireAuth>
              <Unete />
            </RequireAuth>
          }
        />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
