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
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
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
                      {menu.name}
                    </NavLink>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <MenuItems menu={menu.submenu} />
                  </NavigationMenuContent>
                </>
              ) : (
                <NavLink to={menu.to} className="px-3 py-2 text-orange-50 hover:text-white" activeClassName="active">
                  {menu.name}
                </NavLink>
              )}
            </NavigationMenuItem>
          ))}
        </NavigationMenu>
      </div>


      {/* <NavigationMenuContent>
                  <nav className="flex flex-row w-full justify-around items-center bg-green-900 p-2">
                    {subMenus["menuPlanVisit"].map((subMenuItem, subIndex) => (
                      <NavLink
                        key={subIndex}
                        to={subMenuItem.to}
                        className="px-3 py-2 text-orange-50 hover:text-white w-48"
                        activeClassName="active"
                      >
                        {subMenuItem.name}
                      </NavLink>
                    ))}
                  </nav>
                </NavigationMenuContent> */}

      {/* <NavigationMenuItem className="flex flex-row justify-around items-center bg-green-900 p-2">
            <NavLink
              to="/contact-us"
              className="px-3 py-2 text-orange-50 hover:text-white"
              activeClassName="active"
            >
              Contact Us
            </NavLink>
          </NavigationMenuItem> */}
      {/* </div> */}
      <div className="flex flex-row justify-around items-center bg-green-900 p-2"><FontAwesomeIcon icon={icon({ name: 'user-secret' })} />
        <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" /> </div>
      <div className="flex flex-row justify-around items-center bg-green-900 p-2">Buy Tickets</div>
      <div className="flex flex-row justify-around items-center bg-green-900 p-2">Login | Sign-up</div>
    </header>
  );
}
