/*eslint-disable*/
import Link from "next/link";
import React from "react";

import DashboardIcon from '@mui/icons-material/Dashboard';
import SettingsIcon from '@mui/icons-material/Settings';
import ProfilesIcon from '@mui/icons-material/FolderShared';
import UsersIcon from '@mui/icons-material/People';
import TotalTrafficIcon from '@mui/icons-material/SsidChart';
import IntermediateTrafficIcon from '@mui/icons-material/Timeline';
import ComputerIcon from '@mui/icons-material/Computer';

import NotificationDropdown from "./NotificationDropdown";
import UserDropdown from "./UserDropdown";

export default function Sidebar() {
  const [collapseShow, setCollapseShow] = React.useState("hidden");
  return (
    <>
      <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6">
        <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
          {/* Toggler */}
          <button
            className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
            type="button"
            onClick={() => setCollapseShow("bg-white m-2 py-3 px-6")}
          >
            <i className="fas fa-bars"></i>
          </button>
          {/* Brand */}
          <div className="md:block text-left md:pb-2 text-gray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0">
            <a
              className="text-2xl"
              href="/"
            >
              <span className="text-3xl text-blue-500">EA</span>VIET.com
            </a>
          </div>
          {/* User */}
          <ul className="md:hidden items-center flex flex-wrap list-none">
            <li className="inline-block relative">
              <NotificationDropdown />
            </li>
            <li className="inline-block relative">
              <UserDropdown />
            </li>
          </ul>
          {/* Collapse */}
          <div
            className={
              "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
              collapseShow
            }
          >
            {/* Collapse header */}
            <div className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-gray-200">
              <div className="flex flex-wrap">
                <div className="w-6/12">
                  <div className="md:block text-left md:pb-2 text-gray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0">
                    <a
                      href="/"
                    >
                      EAVIET
                    </a>
                  </div>
                </div>
                <div className="w-6/12 flex justify-end">
                  <button
                    type="button"
                    className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                    onClick={() => setCollapseShow("hidden")}
                  >
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>
            </div>
            {/* Form */}
            <form className="mt-6 mb-4 md:hidden">
              <div className="mb-3 pt-0">
                <input
                  type="text"
                  placeholder="Search"
                  className="border-0 px-3 py-2 h-12 border border-solid  border-gray-500 placeholder-gray-300 text-gray-600 bg-white rounded text-base leading-snug shadow-none outline-none focus:outline-none w-full font-normal"
                />
              </div>
            </form>

            {/* Divider */}
            <hr className="my-4 md:min-w-full" />
            {/* Heading */}
            <h6 className="md:min-w-full text-gray-500 text-sm uppercase font-bold block pt-1 pb-4 no-underline">
              General
            </h6>
            {/* Navigation */}

            <ul className="md:flex-col md:min-w-full flex flex-col list-none">
              <li className="items-center">
                <Link href="/admin">
                  <a
                    className={
                      "text-sm uppercase py-3 font-bold block flex " +
                      (window.location.href == window.location.origin + '/admin'
                        ? "text-blue-500 hover:text-blue-600"
                        : "text-gray-700 hover:text-gray-500")
                    }
                  >
                    <DashboardIcon fontSize="small" />
                    <span className="ml-1">Dashboard</span>
                  </a>
                </Link>
              </li>

              <li className="items-center">
                <Link href="/admin/settings">
                  <a
                    className={
                      "text-xs uppercase py-3 font-bold block " +
                      (window.location.href.indexOf("/admin/settings") !== -1
                        ? "text-blue-500 hover:text-blue-600"
                        : "text-gray-700 hover:text-gray-500")
                    }
                  >
                    <i
                      className={
                        "fas fa-tools mr-2 text-sm flex " +
                        (window.location.href.indexOf("/admin/settings") !== -1
                          ? "opacity-75"
                          : "text-gray-300")
                      }
                    ></i>{" "}
                    <SettingsIcon />
                    <span className="ml-1">Settings</span>
                  </a>
                </Link>
              </li>
            </ul>

            {/* Divider */}
            <hr className="my-4 md:min-w-full" />
            {/* Heading */}
            <h6 className="md:min-w-full text-gray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
              Data Management
            </h6>
            {/* Navigation */}

            <ul className="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
              <li className="items-center">
                <Link href="/admin/profiles">
                  <a
                    className={
                      "text-xs uppercase py-3 font-bold flex items-center " +
                      (window.location.href.indexOf("/admin/profiles") !== -1
                        ? "text-blue-500 hover:text-blue-700"
                        : "text-gray-700 hover:text-gray-500")
                    }
                  >
                    <ProfilesIcon />
                    <span className="ml-1">Profiles</span>
                  </a>
                </Link>
              </li>

              <li className="items-center">
                <Link href="/admin/users">
                  <a
                    className={
                      "text-xs uppercase py-3 font-bold block flex items-center " +
                      (window.location.href.indexOf("/admin/users") !== -1
                        ? "text-blue-500 hover:text-blue-700"
                        : "text-gray-700 hover:text-gray-500")
                    }
                  >
                    <UsersIcon />
                    <span className="ml-1">Users  </span>
                  </a>
                </Link>
              </li>

              <li className="items-center">
                <Link href="/admin/computers">
                  <a
                    className={
                      "text-xs uppercase py-3 font-bold block flex items-center " +
                      (window.location.href.indexOf("/admin/computers") !== -1
                        ? "text-blue-500 hover:text-blue-700"
                        : "text-gray-700 hover:text-gray-500")
                    }
                  >
                    <ComputerIcon/>
                    <span className="ml-1">Computers  </span>
                  </a>
                </Link>
              </li>
            </ul>

            {/* Divider */}
            <hr className="my-4 md:min-w-full" />
            {/* Heading */}
            <h6 className="md:min-w-full text-gray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
              TRAFFIC TRACKING
            </h6>
            {/* Navigation */}

            <ul className="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
              <li className="items-center">
                <Link href="/admin/traffic/total">
                  <a
                    className="text-gray-700 hover:text-gray-500 text-xs uppercase py-3 font-bold flex items-center"
                  >
                    <TotalTrafficIcon />
                    <span className="ml-1">TOTAL</span>
                  </a>
                </Link>
              </li>

              <li className="items-center">
                <Link href="/admin/traffic/intermediate-url">
                  <a
                    className="text-gray-700 hover:text-gray-500 text-xs uppercase py-3 font-bold block"
                    href="/profile"
                  >
                    <IntermediateTrafficIcon />
                    <span className="ml-1">INTERMEDIATE URL</span>
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <style jsx>{`
        /* width */
        ::-webkit-scrollbar {
          width: 10px;
        }
        
        /* Track */
        ::-webkit-scrollbar-track {
          box-shadow: inset 0 0 5px grey; 
          border-radius: 10px;
        }
         
        /* Handle */
        ::-webkit-scrollbar-thumb {
          background: #4195a6; 
          border-radius: 10px;
        }
        
        /* Handle on hover */
        ::-webkit-scrollbar-thumb:hover {
          background: #2c6696; 
        }
      `}</style>
      </nav>
    </>
  );
}
