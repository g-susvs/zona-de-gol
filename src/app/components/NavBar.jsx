import { MdBackupTable } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { IoMdNotifications } from "react-icons/io";
import { AiFillStar, AiTwotoneSetting } from "react-icons/ai";
import { ImArrowUp } from "react-icons/im";
import { BiLogOut } from "react-icons/bi";
import { NavUserInfo } from "./NavUserInfo";

import "../../css/navbar.css";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="sidebar">
      <NavUserInfo />

      <div className="menu-bar">
        <div className="menu">
          <ul className="menu-links">
            <NavLink className="NavLink nav-item-active" to="/">
              <li className="nav-link">
                <FiSearch />
                <span className="text nav-text">Buscar</span>
              </li>
            </NavLink>

            <NavLink className="NavLink">
              <li className="nav-link">
                <MdBackupTable />
                <span className="text nav-text">Reservas</span>
              </li>
            </NavLink>

            <NavLink className="NavLink">
              <li className="nav-link">
                <IoMdNotifications />
                <span className="text nav-text">Notificaciones</span>
              </li>
            </NavLink>

            <NavLink className="NavLink">
              <li className="nav-link">
                <AiFillStar />
                <span className="text nav-text">Canchas Favoritas</span>
              </li>
            </NavLink>

            <NavLink className="NavLink">
              <li className="nav-link">
                <ImArrowUp />
                <span className="text nav-text">Canchas Populares</span>
              </li>
            </NavLink>
            <NavLink className="NavLink">
              <li className="nav-link">
                <AiTwotoneSetting />
                <span className="text nav-text">Configuración</span>
              </li>
            </NavLink>
          </ul>
        </div>

        <div className="button-content">
          <a href="#">
            <BiLogOut />
            <span className="text nav-text">Cerrar sesión</span>
          </a>
        </div>
      </div>
    </nav>
  );
};
