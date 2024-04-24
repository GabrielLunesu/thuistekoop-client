import { XIcon } from "@heroicons/react/solid";
import ContactInfo from "./ContactInfo";
import MenuItems from "./MenuItems";
import SocialLinks from "./SocialLinks";

const SidebarPanel = () => {
  return (
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

      <div className="hsidebar-content">
        <div className="hiddenbar_navbar_content">
          <div className="hiddenbar_navbar_menu">
            <div className="flex flex-col bg-white shadow-lg rounded-lg pl-5">


              <nav className="mt-4">
                <a href="/" className="block py-2 text-xl text-gray-800 font-bold hover:bg-gray-100 rounded">Home</a>
                <a href="/banner-search-v2" className="block py-2 text-xl text-gray-800 font-bold hover:bg-gray-100 rounded">Listings</a>
                <a href="/about" className="block py-2 text-xl text-gray-800 font-bold hover:bg-gray-100 rounded">About us</a>
                <a href="/contact" className="block py-2 text-xl text-gray-800 font-bold hover:bg-gray-100 rounded">Contact</a>

              </nav>

              <div className="mt-4">
                <p className="text-gray-800">Hier om al uw vragen te beantwoorden</p>
                <p className="text-gray-800 font-bold mt-2">+31 6 12 34 56 78</p>
                <p className="text-gray-800 mt-4">Hulp nodig?</p>
                <a href="mailto:hi@homez.com" className="text-blue-600 hover:underline">info@thuistekoop.com</a>
              </div>


            </div>
          </div>
          {/* End .hiddenbar_navbar_menu */}

          <div className="hiddenbar_footer position-relative bdrt1">

            {/* End .row */}

            <div className="row pt30 pb30 bdrt1">
              <div className="col-auto">
                <div className="social-style-sidebar d-flex align-items-center pl30">
                  <h6 className="me-4 mb-0">Follow us</h6>
                  <SocialLinks />
                </div>
              </div>
            </div>
          </div>
          {/* hiddenbar_footer */}
        </div>
      </div>
      {/* End hsidebar-content */}
    </div>
  );
};

export default SidebarPanel;
