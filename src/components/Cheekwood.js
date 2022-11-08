import { Route, Routes } from "react-router-dom";
import { Authorized } from "./views/Authorized";
import { ApplicationViews } from "./views/ApplicationViews";
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";
import { Navbar } from "./nav/Navbar";
import { Footer } from "./footer/Footer";

export const Cheekwood = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route
        path="*"
        element={
          <Authorized>
            <>
              <Navbar />
              <ApplicationViews />
              <Footer />
            </>
          </Authorized>
        }
      />
    </Routes>
  );
};
