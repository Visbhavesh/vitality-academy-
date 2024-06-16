import React from "react";
import {
  Navbar,Collapse,
  Typography,IconButton,
} from "@material-tailwind/react";
import {
  Menu,MenuHandler,
  MenuList,MenuItem,Button,
} from "@material-tailwind/react";

import photo from "..//Images/navbar.png";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

function NavList({ isLoggedIn, username, handleLogout }) {
  return (
    <div className="flex  rounded-none">
      <ul className="my-2   flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-bold"
        >
          <a
            href="/"
            className="flex items-center hover:text-blue-500 transition-colors"
          >
            Home
          </a>
        </Typography>
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-bold"
        >
          <a
            href="/academics"
            className="flex items-center hover:text-blue-500 transition-colors"
          >
            Academics
          </a>
        </Typography>
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-bold"
        >
          <a
            href="/about"
            className="flex items-center hover:text-blue-500 transition-colors"
          >
            About
          </a>
        </Typography>
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-bold"
        >
          <a
            href="/admission"
            className="flex items-center hover:text-blue-500 transition-colors"
          >
            Admission
          </a>
        </Typography>

        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-bold"
        >
          <a
            href="/faculty"
            className="flex items-center hover:text-blue-500 transition-colors"
          >
            Faculty
          </a>
        </Typography>
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-bold"
        >
          <a
            href="/courses"
            className="flex items-center hover:text-blue-500 transition-colors"
          >
            Courses
          </a>
        </Typography>
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-bold"
        >
          <a
            href="/notes"
            className="flex items-center hover:text-blue-500 transition-colors"
          >
            Notes
          </a>
        </Typography>
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-bold"
        >
          <a
            href="/lectures"
            className="flex items-center hover:text-blue-500 transition-colors"
          >
            Lectures
          </a>
        </Typography>
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-bold"
        >
          <a
            href="/result"
            className="flex items-center hover:text-blue-500 transition-colors"
          >
           Result
          </a>
        </Typography>
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-bold"
        >
          <a
            href="/contacts"
            className="flex items-center hover:text-blue-500 transition-colors"
          >
            Contact
          </a>
        </Typography>
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-bold"
        >
          {isLoggedIn ? (
            <Menu>
              <MenuHandler>
                <Button className="flex items-center hover:text-blue-800 transition-colors bg-blue-400 px-4 py-2 rounded-[5px] ">
                  Welcome ,{username}
                </Button>
              </MenuHandler>
              <MenuList className="flex items-center justify-center">
                <Button
                  onClick={handleLogout}
                  className="flex items-center  transition-colors bg-red-400 px-12 py-4 rounded-[5px] "
                >
                  Logout
                </Button>

                {/* <MenuItem>
                 
                    
                  </MenuItem> */}
              </MenuList>
            </Menu>
          ) : (
            <Typography
              as="li"
              variant="small"
              color="blue-gray"
              className="p-1 font-bold"
            >
              <Menu>
                <MenuHandler>
                  <Button className="flex items-center hover:text-blue-800 transition-colors bg-blue-400 px-4 py-2 rounded-[5px] ">
                    Login
                  </Button>
                </MenuHandler>
                <MenuList>
                  <MenuItem>
                    <a
                      href="/login"
                      className="flex items-center hover:text-blue-800 transition-colors px-4 py-2 rounded-[5px]"
                    >
                      User Login
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href="/stafflogin"
                      className="flex items-center hover:text-blue-800 transition-colors px-4 py-2 rounded-[5px]"
                    >
                      Staff Login
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href="/adminLogin"
                      className="flex items-center hover:text-blue-800 transition-colors px-4 py-2 rounded-[5px]"
                    >
                      Admin Login
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href="/studentLogin"
                      className="flex items-center hover:text-blue-800 transition-colors px-4 py-2 rounded-[5px]"
                    >
                      Student Login
                    </a>
                  </MenuItem>
                </MenuList>
              </Menu>
            </Typography>
          )}
        </Typography>
      </ul>
    </div>
  );
}

export function NavbarSimple() {
  const [openNav, setOpenNav] = React.useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const isLoggedIn = localStorage.getItem("accessToken") !== null;
  const username = isLoggedIn ? localStorage.getItem("username") : "";

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("username");
    window.location.reload(); // Refresh the page to reflect the logout
  };

  return (
    <Navbar className="mx-auto z-10 fixed top-0 rounded-none bg-blue-100 max-w-full px-6 py-3">
      <div className="flex items-center h-13 w-15 justify-between text-blue-gray-900">
        <a href="/about">
          <img src={photo} alt="image 1" className="h-12 w-19 object-cover " />
        </a>
        <div className="hidden lg:block">
          <NavList
            isLoggedIn={isLoggedIn}
            username={username}
            handleLogout={handleLogout}
          />
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList
          isLoggedIn={isLoggedIn}
          username={username}
          handleLogout={handleLogout}
        />
      </Collapse>
    </Navbar>
  );
}
