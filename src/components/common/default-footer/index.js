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
      <div className="container">
        <footer class="text-gray-600 mb-16 body-font">
          <div class="px-5 mx-auto md:items-center lg:items-start md:flex-row md:flex-nowrap container flex flex-wrap
      flex-col">
            <div class="w-64 md:mx-0 md:text-left mx-auto text-center flex-shrink-0">
              <a class="font-medium items-center md:justify-start justify-center text-gray-900 flex title-font">
                <Link className="footer-logo" href="/">
                  <Image
                    width={258}
                    height={104}
                    className="mb40"
                    src="/images/thuistekoop-logo.svg"
                    alt=""
                  />
                </Link>
              </a>
            </div>
            <div class="md:pl-20 md:mt-0 md:text-left mt-10 text-center flex-grow flex flex-wrap -mb-10">
              <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                <p class="font-bold text-gray-900 tracking-widest text-sm mb-3 title-font">Info</p>
                <nav class="mb-10 list-none">
                  <li>
                    <a class="text-gray-600 hover:text-gray-800">info@thuistekoop.nl</a>
                  </li>
                  <li>
                    <a class="text-gray-600 hover:text-gray-800">0618181818</a>
                  </li>
                  <li>
                    <a class="text-gray-600 hover:text-gray-800">@thuistekoop</a>
                  </li>
                  <li></li>
                </nav>
              </div>
              <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                <p class="font-bold text-gray-900 tracking-widest text-sm mb-3 title-font">Voor verkopers</p>
                <nav class="mb-10 list-none">
                  <li>
                    <a class="text-gray-600 hover:text-gray-800">First Link</a>
                  </li>
                  <li>
                    <a class="text-gray-600 hover:text-gray-800">Second Link</a>
                  </li>
                  <li>
                    <a class="text-gray-600 hover:text-gray-800">Third Link</a>
                  </li>
                  <li>
                    <a class="text-gray-600 hover:text-gray-800">Fourth Link</a>
                  </li>
                </nav>
              </div>
              <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                <p class="font-bold text-gray-900 tracking-widest text-sm mb-3 title-font">Snel naar</p>
                <nav class="mb-10 list-none">
                  <li>
                    <a class="text-gray-600 hover:text-gray-800">First Link</a>
                  </li>
                  <li>
                    <a class="text-gray-600 hover:text-gray-800">Second Link</a>
                  </li>
                  <li>
                    <a class="text-gray-600 hover:text-gray-800">Third Link</a>
                  </li>
                  <li>
                    <a class="text-gray-600 hover:text-gray-800">Fourth Link</a>
                  </li>
                </nav>
              </div>
              <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                <p class="font-bold text-gray-900 tracking-widest text-sm mb-3 title-font">Meer over</p>
                <nav class="mb-10 list-none">
                  <li>
                    <a class="text-gray-600 hover:text-gray-800">First Link</a>
                  </li>
                  <li>
                    <a class="text-gray-600 hover:text-gray-800">Second Link</a>
                  </li>
                  <li>
                    <a class="text-gray-600 hover:text-gray-800">Third Link</a>
                  </li>
                  <li>
                    <a class="text-gray-600 hover:text-gray-800">Fourth Link</a>
                  </li>
                </nav>
              </div>
            </div>
          </div>
        </footer>
        {/* End .row */}
      </div>
      {/* End .container */}

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