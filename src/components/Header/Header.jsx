import classes from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = () => {
    const isNavActive = ({isActive}) => {
        return {
            backgroundColor: isActive ? '#0099FF' : '#111'
        }
    }
  return (
    <div>
      <h1 className={classes.header}>Simple SPA</h1>
      <ul className="header">
        <li>
          <NavLink style={isNavActive} to="/" end>Home</NavLink>
        </li>
        <li>
          <NavLink style={isNavActive}  to="/Stuff">Stuff</NavLink>
        </li>
        <li>
          <NavLink style={isNavActive}  to="/Contact">Contact</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
