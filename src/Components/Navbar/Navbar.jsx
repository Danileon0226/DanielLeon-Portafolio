import { NavLink } from "react-router-dom";
import "./Navbar.css";
import DarkMode from "../DarkMode/DarkMode";

function Navbar() {
  return (
    <>
      <div className="bottom-nav">
        <div className="menu-list">
          <div className="menu">
            <NavLink to="/" className="frame">
              <i className="ri-home-3-line"></i>
              <p className="li-mobile-p">Inicio</p>
            </NavLink>
          </div>
          <div className="menu">
            <NavLink to="/AboutMe" className="frame">
              <i className="ri-user-smile-line"></i>
              <p className="li-mobile-p">Sobre Mi</p>
            </NavLink>
          </div>
          <div className="menu">
            <NavLink to="/" className="frame">
              <i className="ri-stack-line"></i>
              <p className="li-mobile-p">Mis Proyectos</p>
            </NavLink>
          </div>
          <div className="menu">
            <NavLink to="/" className="frame">
              <i className="ri-more-line"></i>
              <p className="li-mobile-p">Mas Informacion</p>
            </NavLink>
          </div>
          <div className="menu">
            <DarkMode />
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
