import { IconAccessible } from "@tabler/icons-react";
import { ModeToggle } from "./mode-toggle";
import { NavLink } from "react-router";

const Navbar = () => {
  const navLink = [
    {
      path: "/tasks",
      name: "Tasks",
    },
    // {
    //   path: "/users",
    //   name: "Users",
    // },
  ];
  return (
    <div className="max-w-7xl mx-auto py-3 flex items-center justify-between">
      <div className="flex gap-2 items-center text-2xl">
        <span>
          <IconAccessible />
        </span>
        <h3 className="font-semibold">Todo App</h3>
      </div>
      <div className="nav-links">
        {navLink?.map((nav, index) => (
          <NavLink to={nav.path} key={index}>
            <li className="list-none inline mr-5 font-semibold text-xl">
              {nav?.name}
            </li>
          </NavLink>
        ))}
      </div>
      <div className="Theme-toggle">
        <ModeToggle />
      </div>
    </div>
  );
};

export default Navbar;
