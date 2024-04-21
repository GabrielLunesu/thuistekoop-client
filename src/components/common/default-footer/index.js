import Image from "next/image";
import Link from "next/link";
import ContactMeta from "./ContactMeta";
import AppWidget from "./AppWidget";
import Social from "./Social";
import Subscribe from "./Subscribe";
import MenuWidget from "./MenuWidget";
import Copyright from "./Copyright";

const Footer = () => {
  return (
    <>
      <div className="container mx-auto px-4">
        <footer className="text-gray-600 mb-16 body-font">
          <div className="flex flex-col md:flex-row justify-between items-start">
            <div className="w-full md:w-64 md:text-left text-center flex-shrink-0 mb-10 md:mb-0">
              <Link href="/" className="footer-logo">
                <Image
                  src="/images/thuistekoop-logo.svg"
                  alt=""
                  width={258}
                  height={104}
                  className="mb-4"
                />
              </Link>
            </div>
            <div className="flex-grow flex flex-wrap ml-5 justify-center md:justify-start mb-10 md:-mb-0">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4 mb-10 md:mb-0 mt-4 md:mt-12">
                <p className="font-bold text-gray-900 tracking-widest text-sm mb-3 title-font">Info</p>
                <nav className="mb-10 list-none">
                  <li><a className="text-gray-600 hover:text-gray-800">info@thuistekoop.nl</a></li>
                  <li><a className="text-gray-600 hover:text-gray-800">0618181818</a></li>
                  <li><a className="text-gray-600 hover:text-gray-800">@thuistekoop</a></li>
                </nav>
              </div>
              <div className="lg:w-1/4 md:w-1/2 w-full px-4 mb-10 md:mb-0 mt-4 md:mt-12">
                <p className="font-bold text-gray-900 tracking-widest text-sm mb-3 title-font">Voor verkopers</p>
                <nav className="mb-10 list-none">
                  <li><a className="text-gray-600 hover:text-gray-800">First Link</a></li>
                  <li><a className="text-gray-600 hover:text-gray-800">Second Link</a></li>
                  <li><a className="text-gray-600 hover:text-gray-800">Third Link</a></li>
                  <li><a className="text-gray-600 hover:text-gray-800">Fourth Link</a></li>
                </nav>
              </div>
              <div className="lg:w-1/4 md:w-1/2 w-full px-4 mb-10 md:mb-0 mt-4 md:mt-12">
                <p className="font-bold text-gray-900 tracking-widest text-sm mb-3 title-font">Snel naar</p>
                <nav className="mb-10 list-none">
                  <li><a className="text-gray-600 hover:text-gray-800">First Link</a></li>
                  <li><a className="text-gray-600 hover:text-gray-800">Second Link</a></li>
                  <li><a className="text-gray-600 hover:text-gray-800">Third Link</a></li>
                  <li><a className="text-gray-600 hover:text-gray-800">Fourth Link</a></li>
                </nav>
              </div>
              <div className="lg:w-1/4 md:w-1/2 w-full px-4 mb-10 md:mb-0 mt-4 md:mt-12">
                <p className="font-bold text-gray-900 tracking-widest text-sm mb-3 title-font">Meer over</p>
                <nav className="mb-10 list-none">
                  <li><a className="text-gray-600 hover:text-gray-800">First Link</a></li>
                  <li><a className="text-gray-600 hover:text-gray-800">Second Link</a></li>
                  <li><a className="text-gray-600 hover:text-gray-800">Third Link</a></li>
                  <li><a className="text-gray-600 hover:text-gray-800">Fourth Link</a></li>
                </nav>
              </div>
            </div>
          </div>
        </footer>
      </div>


      <Copyright />
      {/* End copyright */}
    </>
  );
};

export default Footer;

{/* <Link className="footer-logo" href="/">
<Image
  width={288}
  height={124}
  className="mb40"
  src="/images/thuistekoop-logo.svg"
  alt=""
/>
</Link> */}