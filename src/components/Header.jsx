import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import Cookies from 'js-cookie';
import ham from '../contents/ham.svg'
import logo from '../contents/profile-circle.svg'

export default function Header() {

  let userInfo = undefined;
  try {
    const loginInfo = Cookies.get('user_data');
    userInfo = JSON.parse(loginInfo);
  } catch (error) {
    
  }
  
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  function handlelogout() {


    try {
      // deleteUser();
      Cookies.remove('user_data');

    }
    catch { }
    finally { window.location.href = "/"; }

  }



  return (
    <header className=" shadow backdrop-blur-2xl mb-1 top-0 sticky z-50 flex justify-between p-1 font-poppins bg-tertiar">
      <div className="bg-primary p-2 rounded-full text-white flex align-baseline">
        <Link to="/" className="flex items-center p-2 hover:text-secondary font-semibold">MyBusTicket</Link>
      </div>
      <div className="md:hidden flex items-center">
        <button onClick={toggleSidebar} className="text-black transition-all delay-200 duration-200 ease-in-out">
          {/* hamburger icon */}
          <img src={ham} alt="" className='h-10' />
        </button>
      </div>
      <div className="hidden md:flex bg-primary p-2 rounded-full text-white mx-2">
        <ol className="flex list-none gap-12 m-2 font-semibold">
          <Link className='hover:text-secondary' to="/">Home</Link>
          <Link className='hover:text-secondary' to="/search">Search</Link>
          <Link className='hover:text-secondary' to="/about">About</Link>
        </ol>
      </div>
      <div className="text-white bg-black rounded-full flex items-center px-2">
        <Link className="h-10 flex " to="/">
          {/* account icon */}
          {userInfo && userInfo.status ?
            <Popover className="relative">
              <Popover.Button className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900  border-none">
                <img src={logo} className='h-10' alt='Account' />
              </Popover.Button>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >

                <Popover.Panel className="absolute right-0 z-10 mt-5 flex w-screen max-w-max ">
                  <div className=" max-w-sm bg-black flex-auto overflow-hidden rounded-xl text-sm leading-6 shadow-lg ring-1 ring-onsecondary">
                    <div>
                      <div className="group relative flex flex-wrap gap-x-6 rounded-lg ">
                        <div className='flex justify-center p-2 gap-4 items-center'>

                          <p className="font-semibold text-white text-lg">
                            User
                          </p>

                          <button onClick={handlelogout}   className="font-normal text-white text-lg hover:text-secondary">
                            Logout
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </Popover> : <Link className='flex items-center' to="/login"><p >Login</p></Link>}
        </Link>
      </div>
      {isSidebarOpen && (
        <div className="fixed  w-full top-0 h-screen bg-gray-800 bg-opacity-90 flex flex-col items-center justify-center z-50 md:hidden font-poppins ">
          <button onClick={toggleSidebar} className="text-secondary  absolute top-4 right-4 transition-all duration-300 ">
            <svg width="30" height="30" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <ol className="flex flex-col gap-6 text-white text-2xl font-poppins text-center font-semibold ">
            <Link to="/" onClick={toggleSidebar} className='hover:text-secondary'>Home</Link>
            <Link to="/search" onClick={toggleSidebar} className='hover:text-secondary'>Search</Link>
            <Link to="/about" onClick={toggleSidebar} className='hover:text-secondary'>About</Link>
          </ol>
        </div>
      )}
    </header>
  )
}
