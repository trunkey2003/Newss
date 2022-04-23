import Link from "next/link";
import React, { useEffect, useState } from "react";
import DashboardIcon from '@mui/icons-material/Dashboard';

import UserDropdown from "./UserDropdown.jsx";

export default function Navbar() {
  const [userName, setUsername] = useState('');
  const [avatar, setAvatar] = useState('');

  function getCookie(cname : string) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  useEffect(() => {
    setUsername(getCookie('userName'));
    setAvatar(getCookie('avatar'));
  }, [])
  
  return (
    <>
      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full z-10 bg-transparent md:flex-row md:flex-nowrap md:justify-start flex items-center p-4">
        <div className="w-full mx-autp items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4">
          {/* Brand */}
          <Link href='/admin'>
          <a
            className="text-white text-2xl uppercase flex font-semibold items-center hover:opacity-80"
          >
            <DashboardIcon fontSize="large"/>  <div className="ml-2">Dashboard</div>
          </a>
          </Link>
          {/* Form */}
          <form className="md:flex hidden flex-row flex-wrap items-center lg:ml-auto mr-3">
            <div className="relative flex w-full flex-wrap items-stretch">
              <span className="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
                <i className="fas fa-search"></i>
              </span>
              <input
                type="text"
                placeholder="Search here..."
                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10"
              />
            </div>
          </form>
          {/* User */}
          <ul className="flex-col md:flex-row list-none items-center hidden md:flex">
            <img className="h-8 w-8 rounded-full" src={avatar}></img>
          </ul>
        </div>
      </nav>
      {/* End Navbar */}
    </>
  );
}