import { Avatar } from '@mui/material';
import Link from 'next/link';
import { useEffect, useState } from 'react'
import SignInModal from '../common/signInModal';
import SignUpModal from '../common/signUpModal';

type Props = {}

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'white',
  border: '2px solid #fff',
  boxShadow: 24,
  p: 4,
  padding: '50px 0 50px 0',
};

export default function Nav({ }: Props) {
  const [showSignUp, setShowSignUp] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSolution, setShowSolution] = useState(false);
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

  const handleShowSignUp = (bl: boolean) => {
    setShowSignUp(bl);
  }

  const handleShowSignIn = (bl: boolean) => {
    setShowSignIn(bl);
  }



  return (
    <div className="relative bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-2 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href='/'>
              {/* <span className="sr-only">Workflow</span> */}
              <img className="h-8 w-auto sm:h-10 hover:cursor-pointer" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="" />
            </Link>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <button type="button" className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-expanded="false">
              <span className="sr-only">Open menu</span>
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          <nav className="hidden md:flex space-x-10">
            <div className="relative">
              <button type="button" onClick={() => setShowSolution(!showSolution)} className="py-2 px-4 text-white group rounded-md inline-flex items-center text-base font-medium hover:text-gray-300" aria-expanded="false">
                <span>Solutions</span>
                <svg className="text-white ml-2 h-5 w-5 group-hover:text-gray-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              <div className={`absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2 ${showSolution ? '' : 'hidden'}`}>
                <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                  <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                    <a href="#" className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                      <svg className="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                      <div className="ml-4">
                        <p className="text-base font-medium text-gray-900">Analytics</p>
                        <p className="mt-1 text-sm text-gray-500">Get a better understanding of where your traffic is coming from.</p>
                      </div>
                    </a>

                    <a href="#" className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                      <svg className="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                      </svg>
                      <div className="ml-4">
                        <p className="text-base font-medium text-gray-900">Engagement</p>
                        <p className="mt-1 text-sm text-gray-500">Speak directly to your customers in a more meaningful way.</p>
                      </div>
                    </a>

                    <a href="#" className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                      <svg className="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                      <div className="ml-4">
                        <p className="text-base font-medium text-gray-900">Security</p>
                        <p className="mt-1 text-sm text-gray-500">Your customers&#039; data will be safe and secure.</p>
                      </div>
                    </a>

                    <a href="#" className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                      <svg className="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                      </svg>
                      <div className="ml-4">
                        <p className="text-base font-medium text-gray-900">Integrations</p>
                        <p className="mt-1 text-sm text-gray-500">Connect with third-party tools that you&#039;re already using.</p>
                      </div>
                    </a>

                    <a href="#" className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                      <svg className="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                      <div className="ml-4">
                        <p className="text-base font-medium text-gray-900">Automations</p>
                        <p className="mt-1 text-sm text-gray-500">Build strategic funnels that will drive your customers to convert</p>
                      </div>
                    </a>
                  </div>
                  <div className="px-5 py-5 bg-gray-50 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                    <div className="flow-root">
                      <a href="#" className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100">
                        <svg className="flex-shrink-0 h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <a href="tel:+849392844753" className="ml-3">Contact Developer</a>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
          {userName ?
            <div className="flex items-center md:order-2">
              <button type="button" className="flex mr-3 text-sm md:mr-0 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="dropdown">
                <span className="sr-only">Open user menu</span>
                <img className="w-10 h-10 rounded-full" src={avatar}/>
              </button>
              <div className="hidden z-50 my-4 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600" id="dropdown">
                <div className="py-3 px-4">
                  <span className="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
                  <span className="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">name@flowbite.com</span>
                </div>
                <ul className="py-1" aria-labelledby="dropdown">
                  <li>
                    <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</a>
                  </li>
                  <li>
                    <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</a>
                  </li>
                  <li>
                    <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Earnings</a>
                  </li>
                  <li>
                    <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
                  </li>
                </ul>
              </div>
              <button data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
              </button>
            </div>
            :
            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
              <button onClick={() => handleShowSignIn(true)} className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"> Sign in </button>
              <button onClick={() => handleShowSignUp(true)} className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"> Sign up </button>
            </div>}
        </div>
      </div>
      <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden hidden">
        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
          <div className="pt-5 pb-6 px-5">
            <div className="flex items-center justify-between">
              <div>
                <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow" />
              </div>
              <div className="-mr-2">
                <button type="button" className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Close menu</span>
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="mt-6">
              <nav className="grid gap-y-8">
                <a href="#" className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                  <svg className="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                  <span className="ml-3 text-base font-medium text-gray-900"> Analytics </span>
                </a>

                <a href="#" className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                  <svg className="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                  </svg>
                  <span className="ml-3 text-base font-medium text-gray-900"> Engagement </span>
                </a>

                <a href="#" className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                  <svg className="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <span className="ml-3 text-base font-medium text-gray-900"> Security </span>
                </a>

                <a href="#" className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                  <svg className="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                  <span className="ml-3 text-base font-medium text-gray-900"> Integrations </span>
                </a>

                <a href="#" className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                  <svg className="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  <span className="ml-3 text-base font-medium text-gray-900"> Automations </span>
                </a>
              </nav>
            </div>
          </div>
          <div className="py-6 px-5 space-y-6">
            <div className="grid grid-cols-2 gap-y-4 gap-x-8">
              <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700"> Pricing </a>

              <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700"> Docs </a>

              <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700"> Help Center </a>

              <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700"> Guides </a>

              <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700"> Events </a>

              <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700"> Security </a>
            </div>
            <div>
              <a href="#" className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"> Sign up </a>
              <p className="mt-6 text-center text-base font-medium text-gray-500">
                Existing customer?
                <a href="#" className="text-indigo-600 hover:text-indigo-500"> Sign in </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <SignUpModal showSignUp={showSignUp} handleShowSignUp={handleShowSignUp} />
      <SignInModal showSignIn={showSignIn} handleShowSignIn={handleShowSignIn} />
    </div>
  )
}