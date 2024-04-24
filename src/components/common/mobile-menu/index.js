"use client";
import Link from "next/link";
import Image from "next/image";
import ContactInfo from "./ContactInfo";
import Social from "./Social";
import ProSidebarContent from "./ProSidebarContent";
import { XIcon } from '@heroicons/react/solid'; // Make sure to have heroicons installed



const MobileMenu = () => {
  return (
    <div className="mobilie_header_nav stylehome1">
      <div className="mobile-menu">
        <div className="header innerpage-style">
          <div className="menu_and_widgets">
            <div className="mobile_menu_bar d-flex justify-content-between align-items-center">
              <a
                className="menubar"
                href="#"
                data-bs-toggle="offcanvas"
                data-bs-target="#mobileMenu"
                aria-controls="mobileMenu"
              >
                <Image
                  width={25}
                  height={9}
                  src="/images/mobile-dark-nav-icon.svg"
                  alt="mobile icon"
                />
              </a>
              <Link className="mobile_logo" href="/">
                <Image
                  width={138}
                  height={44}
                  src="/images/thuistekoop-logo.svg"
                  alt="logo"
                />
              </Link>
              <Link href="/login">
                <span className="icon fz18 far fa-user-circle" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* /.mobile-menu meta */}

      <div
        className="offcanvas offcanvas-start mobile_menu-canvas"
        tabIndex="-1"
        id="mobileMenu"
        aria-labelledby="mobileMenuLabel"
        data-bs-scroll="true"
      >
        <div className="rightside-hidden-bar">
          <div className="hsidebar-header">
            <div className="flex items-center justify-between"> {/* This will align items vertically and spread them horizontally */}
              <img src="/images/thuistekoop-logo.jpg" alt="Logo" className="h-16 mb-3" />
              <button
                className="bg-navy p-2 rounded-full text-white hover:bg-navy-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-navy"
                aria-label="Close"
                data-bs-dismiss="offcanvas"
              >
                <XIcon className="h-6 w-6" />
              </button>
            </div>
          </div>
          {/* End header */}

          <div className="flex flex-col bg-white shadow-lg rounded-lg pl-5">


            <nav className="mt-4">
              <a href="/" className="block py-2 text-xl text-gray-800 font-bold hover:bg-gray-100 rounded">Home</a>
              <a href="/listings" className="block py-2 text-xl text-gray-800 font-bold hover:bg-gray-100 rounded">Listings</a>
              <a href="/property" className="block py-2 text-xl text-gray-800 font-bold hover:bg-gray-100 rounded">Property</a>
              <a href="/dashboard" className="block py-2 text-xl text-gray-800 font-bold hover:bg-gray-100 rounded">Dashboard</a>
              <a href="/blog" className="block py-2 text-xl text-gray-800 font-bold hover:bg-gray-100 rounded">Blog</a>
              <a href="/pages" className="block py-2 text-xl text-gray-800 font-bold hover:bg-gray-100 rounded">Pages</a>
            </nav>

            <div className="mt-4">
              <p className="text-gray-800">Hier om al uw vragen te beantwoorden</p>
              <p className="text-gray-800 font-bold mt-2">+31 6 12 34 56 78</p>
              <p className="text-gray-800 mt-4">Hulp nodig?</p>
              <a href="mailto:hi@homez.com" className="text-blue-600 hover:underline">info@thuistekoop.com</a>
            </div>


          </div>
          {/* End hsidebar-content */}
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
