import { NavLink } from "react-router-dom";
import logo from "../assets/Zoo Logo-Colours.jpg";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuTrigger,
} from "../components/ui/navigation-menu";
import { CircleUserRound, UserRoundPlus } from "lucide-react";
import { Button } from "./ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../components/ui/popover";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { menuDataItems } from "./Header/menuDataItems";
import MenuItems from "./Header/MenuItems";
import Search from "./Search";

export default function Header() {
  return (
    <header className="flex justify-center">
      <div className="">
        <NavLink to="/">
          <img src={logo} alt="zoo logo" width="62px"></img>
        </NavLink>
      </div>

      <div className="flex flex-row justify-around items-center bg-green-900 p-2 shantell">
        <NavigationMenu>
          {menuDataItems &&
            menuDataItems.map((menu, index) => (
              <NavigationMenuItem
                key={index}
                className="flex flex-row justify-around items-center bg-green-900 p-2"
              >
                {menu.submenu ? (
                  <>
                    <NavigationMenuTrigger className="flex flex-row justify-around items-center bg-green-900 text-white-50 svg-white">
                      <NavLink
                        to={menu.to}
                        className="px-3 py-2 text-orange-50 hover:text-white text-base"
                        activeClassName="active"
                      >
                        {menu.icon} {menu.name}
                      </NavLink>
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <MenuItems menu={menu.submenu} />
                    </NavigationMenuContent>
                  </>
                ) : (
                  <NavLink
                    to={menu.to}
                    className="px-3 py-2 text-orange-50 hover:text-white text-base"
                    activeClassName="active"
                  >
                    {menu.icon} {menu.name}
                  </NavLink>
                )}
              </NavigationMenuItem>
            ))}
        </NavigationMenu>
      </div>

        <Popover className="flex flex-row justify-around items-center bg-green-900 p-2 svg-white">
          <PopoverTrigger>
            {" "}
            <Button className="irregular-border-radius bg-transparent transition-all ease-in-out duration-700 hover:bg-transparent transform hover:scale-150">
                <FontAwesomeIcon
                  className=""
                  icon={solid("magnifying-glass")}
                />
            </Button>
          </PopoverTrigger>
          <PopoverContent><Search /></PopoverContent>
        </Popover>
      <div className="flex flex-row justify-around items-center bg-green-900 p-2">
        <Button className="bg-white text-green-900 hover:text-green-900 hover:bg-green-100 irregular-border-radius shantell">
          Buy Tickets
        </Button>
      </div>
      <div className="flex flex-row justify-around items-center bg-green-900 p-2 text-white shantell">
        <NavLink to="/login">
          {" "}
          <Button
            className="irregular-border-radius hover:bg-green-100"
            variant="outline"
            size="icon"
          >
            <CircleUserRound className="h-6 w-6 text-green-900 " />
          </Button>
        </NavLink>{" "}
        <NavLink className="ml-4" to="/login">
          {" "}
          <Button
            className="irregular-border-radius hover:bg-green-100"
            variant="outline"
            size="icon"
          >
            <UserRoundPlus className="h-6 w-6 text-green-900 " />
          </Button>
        </NavLink>
      </div>
    </header>
  );
}
