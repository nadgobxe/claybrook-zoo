import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/Zoo Logo-Colours.jpg";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "../components/ui/navigation-menu";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import { menuDataItems } from "./Header/menuDataItems";
import MenuItems from "./Header/MenuItems";


export default function Header() {

  return (
    <header className="flex justify-center">
      <div className="">
        <NavLink to="/">
          <img src={logo} alt="zoo logo" width="62px"></img>
        </NavLink>
      </div>

      <div className="flex flex-row justify-around items-center bg-green-900 p-2">
        <NavigationMenu>
          {menuDataItems && menuDataItems.map((menu, index) => (
            <NavigationMenuItem key={index} className="flex flex-row justify-around items-center bg-green-900 p-2">
              {menu.submenu ? (
                <>
                  <NavigationMenuTrigger className="flex flex-row justify-around items-center bg-green-900 p-2 text-white-50 svg-white">
                    <NavLink to={menu.to} className="px-3 py-2 text-orange-50 hover:text-white" activeClassName="active">
                     {menu.icon} {menu.name}
                    </NavLink>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <MenuItems menu={menu.submenu} />
                  </NavigationMenuContent>
                </>
              ) : (
                <NavLink to={menu.to} className="px-3 py-2 text-orange-50 hover:text-white" activeClassName="active">
                 {menu.icon}  {menu.name}
                </NavLink>
              )}
            </NavigationMenuItem>
          ))}
        </NavigationMenu>
      </div>

      <div className="flex flex-row justify-around items-center bg-green-900 p-2 svg-white">
        <FontAwesomeIcon icon={solid("magnifying-glass")} />
</div>
      <div className="flex flex-row justify-around items-center bg-green-900 p-2">Buy Tickets</div>
      <div className="flex flex-row justify-around items-center bg-green-900 p-2">Login | Sign-up</div>
    </header>
  );
}
