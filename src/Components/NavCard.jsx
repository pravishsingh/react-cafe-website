import React from 'react'
import "./NavCard.css";
import { NavLink } from 'react-router-dom';


function NavCard() {
 
  return (
    <>
    <li className="navItem">
      <NavLink to="/menu1">
        <p>BURGER & SANDWICH</p>
      </NavLink>
    </li>
    
    <li className="navItem">
    <NavLink to="/menu4">
        <p>SIDES</p>
      </NavLink>

    </li>

    <li className="navItem">
    <NavLink to="/menu3">
        <p>STARTERS</p>
      </NavLink>
    </li>

    <li className="navItem">
    <NavLink to="/menu2">
        <p>CHINES COURSE</p>
      </NavLink>
    </li>

    <li className="navItem">
    <NavLink to="/menu5">
        <p>SALADS</p>
      </NavLink>
    </li>

    <li className="navItem">
    <NavLink to="/menu6">
        <p>DESSERTS/ICE-CREAM</p>
      </NavLink>
    </li>

    <li className="navItem">
    <NavLink to="/menu7">
        <p>MAIN COURSE</p>
      </NavLink>
    </li>

    <li className="navItem">
    <NavLink to="/menu8">
        <p>VALUE COMBO</p>
      </NavLink>
    </li>
    
    </>
  )
}

export default NavCard
