import React from "react";
import { NavLink } from "react-router-dom";

export default function MenuItems({ menu }) {
    return (
     <>
         <nav className="flex flex-row w-full justify-around items-center bg-green-900 p-2">
                    {menu.map((menu, index) => (
                      <NavLink
                        key={index}
                        to={menu.to}
                        className="px-3 py-2 text-orange-50 hover:text-white w-48"
                        activeClassName="active"
                      >
                        {menu.name}
                      </NavLink>
                    ))}
                  </nav>
     </>   
    )
}
