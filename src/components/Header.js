import React from "react";
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

export default function Header() {
  return (
    <header className="flex">
      <div className="">
        <NavLink to="/">
          <img src={logo} alt="zoo logo" width="62px"></img>
        </NavLink>
      </div>
      <div className="flex flex-col">
        <nav className="flex flex-row justify-around items-center bg-green-900 p-2">
          <NavLink
            to="/explore-zoo"
            className="px-3 py-2 text-orange-50 hover:text-white"
            activeClassName="active"
          >
            Explore our Zoo
          </NavLink>
          <NavLink
            to="/plan-visit"
            className="px-3 py-2 text-orange-50 hover:text-white"
            activeClassName="active"
          >
            Plan your Visit
          </NavLink>
          <NavLink
            to="/events"
            className="px-3 py-2 text-orange-50 hover:text-white"
            activeClassName="active"
          >
            Events
          </NavLink>
          <NavLink
            to="/education-learn"
            className="px-3 py-2 text-orange-50 hover:text-white"
            activeClassName="active"
          >
            Education and Learning
          </NavLink>
          <NavLink
            to="/about-us"
            className="px-3 py-2 text-orange-50 hover:text-white"
            activeClassName="active"
          >
            About us
          </NavLink>
          <NavLink
            to="/contact-us"
            className="px-3 py-2 text-orange-50 hover:text-white"
            activeClassName="active"
          >
            Contact us
          </NavLink>
        </nav>
        <div className="flex flex-row justify-around items-center bg-gray-200 p-2">
          sub menu
        </div>
      </div>
      <div className="">search</div>
      <div className="">Buy Tickets</div>
      <div className="">Buy Tickets</div>
      <nav className="flex flex-row justify-around items-center bg-green-900 p-2">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              {" "}
              <NavLink
                to="/explore-zoo"
                className="px-3 py-2 text-orange-50 hover:text-white"
                activeClassName="active"
              >
                Explore our Zoo
              </NavLink>
            </NavigationMenuTrigger>

            <NavigationMenuContent>
              <nav className="flex flex-row justify-around items-center bg-green-900 p-2">
                <NavLink
                  to="/explore-zoo"
                  className="px-3 py-2 text-orange-50 hover:text-white"
                  activeClassName="active"
                >
                  Explore our Zoo
                </NavLink>
                <NavLink
                  to="/plan-visit"
                  className="px-3 py-2 text-orange-50 hover:text-white"
                  activeClassName="active"
                >
                  Plan your Visit
                </NavLink>
                <NavLink
                  to="/events"
                  className="px-3 py-2 text-orange-50 hover:text-white"
                  activeClassName="active"
                >
                  Events
                </NavLink>
                <NavLink
                  to="/education-learn"
                  className="px-3 py-2 text-orange-50 hover:text-white"
                  activeClassName="active"
                >
                  Education and Learning
                </NavLink>
                <NavLink
                  to="/about-us"
                  className="px-3 py-2 text-orange-50 hover:text-white"
                  activeClassName="active"
                >
                  About us
                </NavLink>
                <NavLink
                  to="/contact-us"
                  className="px-3 py-2 text-orange-50 hover:text-white"
                  activeClassName="active"
                >
                  Contact us
                </NavLink>
              </nav>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      </nav>
    </header>
  );
}
