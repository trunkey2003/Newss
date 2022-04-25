import Link from "next/link";
import React, { useEffect, useState } from "react";
import DashboardIcon from '@mui/icons-material/Dashboard';

import UserDropdown from "./UserDropdown.jsx";
import axios from "axios";
import { Axios } from "../../configs/axios";
import ConfirmModal from "../common/ConfirmModal";

export default function Navbar() {
  const [userName, setUsername] = useState('');
  const [avatar, setAvatar] = useState('');

  const [showConfirmSignOut, setShowConfirmSignOut] = useState(false);

  const handleCloseConfirmSignOut = () =>{
    setShowConfirmSignOut(false);
  }

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

  const handleSignOut = () => {
    Axios.get('/api/user/sign-out')
    .then(() => {
      window.location.href = window.location.origin + '/admin';
    })
    .catch(() =>{
      
    })
  }
  
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
          <div className="flex items-center">
            <img className="h-8 w-8 rounded-full" src={avatar}></img>

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="fill-white hover:fill-gray-300 hover:cursor-pointer ml-2 h-7 w-7" onClick={() => setShowConfirmSignOut(true)}>
              <path d="M96 480h64C177.7 480 192 465.7 192 448S177.7 416 160 416H96c-17.67 0-32-14.33-32-32V128c0-17.67 14.33-32 32-32h64C177.7 96 192 81.67 192 64S177.7 32 160 32H96C42.98 32 0 74.98 0 128v256C0 437 42.98 480 96 480zM504.8 238.5l-144.1-136c-6.975-6.578-17.2-8.375-26-4.594c-8.803 3.797-14.51 12.47-14.51 22.05l-.0918 72l-128-.001c-17.69 0-32.02 14.33-32.02 32v64c0 17.67 14.34 32 32.02 32l128 .001l.0918 71.1c0 9.578 5.707 18.25 14.51 22.05c8.803 3.781 19.03 1.984 26-4.594l144.1-136C514.4 264.4 514.4 247.6 504.8 238.5z"/>
            </svg>
          </div>
          
        </div>
      </nav>
      <ConfirmModal open={showConfirmSignOut} content='Are you sure you want to sign out ?' buttonConfirm='Sign Out' handleClose={handleCloseConfirmSignOut} handleConfirm={handleSignOut}/>
      {/* End Navbar */}
    </>
  );
}
