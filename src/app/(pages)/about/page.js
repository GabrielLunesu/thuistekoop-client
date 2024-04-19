import CallToActions from "@/components/common/CallToActions";
import DefaultHeader from "@/components/common/DefaultHeader";
import Partner from "@/components/common/Partner";
import Footer from "@/components/common/default-footer";
import MobileMenu from "@/components/common/mobile-menu";
import Agents from "@/components/pages/about/Agents";
import Features from "@/components/pages/about/Features";
import FunFact from "@/components/pages/about/FunFact";
import Mission from "@/components/pages/about/Mission";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "About us || Thuistekoop ",
};

const About = () => {
  return (
    <>
      {/* Main Header Nav */}
      <DefaultHeader />
      {/* End Main Header Nav */}

      {/* Mobile Nav  */}
      <MobileMenu />
      {/* End Mobile Nav  */}

      {/* from here about us starts */}

      {/* hero */}
      <div >
        <section class="text-gray-600 body-font">
          <div class="mx-auto px-5 items-center justify-center container flex flex-col">
          <img class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover mb-5 object-center rounded" alt="hero" src="https://dummyimage.com/720x600"/>
            <div class="text-center lg:w-2/3 w-full">
              <p class="sm:text-4xl text-3xl mb-4 font-medium text-gray-900 title-font">Thuistekoop, the perfect place to buy
                your home.</p>
              <p class="mb-8 leading-relaxed">Meggings kinfolk echo park stumptown DIY, kale chips beard jianbing tousled.
                Chambray dreamcatcher trust fund, kitsch vice godard disrupt ramps hexagon mustache umami snackwave tilde
                chillwave ugh. Pour-over meditation PBR&B pickled ennui celiac mlkshk freegan photo booth af
                fingerstache pitchfork.</p>
              <div class="justify-center flex"></div>
            </div>
          </div>
        </section>
        <section class="text-gray-600 body-font">
          <div class="px-5 py-2 mx-auto container flex flex-wrap">
            <div class="pt-10 pb-20 sm:items-center md:w-2/3 mx-auto flex relative">
              <div class="h-full w-6 items-center justify-center absolute inset-0 flex">
                <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
              </div>
              <div class="w-6 h-6 rounded-full mt-10 sm:mt-0 items-center justify-center bg-blue-900 text-white font-medium
            text-sm flex-shrink-0 inline-flex relative z-10 title-font">1</div>
              <div class="md:pl-8 sm:items-center sm:flex-row pl-6 items-start flex-grow flex flex-col">
                <div class="w-24 h-24 bg-gray-200 text-indigo-500 rounded-full items-center justify-center flex-shrink-0
              inline-flex">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    class="w-12 h-12 text-blue-900" viewbox="0 0 24 24" id="Windframe_7fEJ5zLaQ"><path d="M12 22s8-4
                8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                </div>
                <div class="sm:pl-6 sm:mt-0 mt-6 flex-grow">
                  <p class="font-medium text-gray-900 mb-1 text-xl title-font">Shooting Stars</p>
                  <p class="leading-relaxed">VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard
                    cliche palo santo offal.</p>
                </div>
              </div>
            </div>
            <div class="pb-20 sm:items-center md:w-2/3 mx-auto flex relative">
              <div class="h-full w-6 items-center justify-center absolute inset-0 flex">
                <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
              </div>
              <div class="w-6 h-6 rounded-full mt-10 sm:mt-0 items-center justify-center bg-blue-900 text-white font-medium
            text-sm flex-shrink-0 inline-flex relative z-10 title-font">2</div>
              <div class="md:pl-8 sm:items-center sm:flex-row pl-6 items-start flex-grow flex flex-col">
                <div class="w-24 h-24 bg-gray-200 text-indigo-500 rounded-full items-center justify-center flex-shrink-0
              inline-flex">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    class="w-12 h-12 text-blue-900" viewbox="0 0 24 24" id="Windframe__ELmFSjNw"><path d="M22 12h-4l-3 9L9
                3l-3 9H2"/></svg>
                </div>
                <div class="sm:pl-6 sm:mt-0 mt-6 flex-grow">
                  <p class="font-medium text-gray-900 mb-1 text-xl title-font">The Catalyzer</p>
                  <p class="leading-relaxed">VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard
                    cliche palo santo offal.</p>
                </div>
              </div>
            </div>
            <div class="pb-20 sm:items-center md:w-2/3 mx-auto flex relative">
              <div class="h-full w-6 items-center justify-center absolute inset-0 flex">
                <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
              </div>
              <div class="w-6 h-6 rounded-full mt-10 sm:mt-0 items-center justify-center bg-blue-900 text-white font-medium
            text-sm flex-shrink-0 inline-flex relative z-10 title-font">3</div>
              <div class="md:pl-8 sm:items-center sm:flex-row pl-6 items-start flex-grow flex flex-col">
                <div class="w-24 h-24 bg-gray-200 text-indigo-500 rounded-full items-center justify-center flex-shrink-0
              inline-flex">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    class="w-12 h-12 text-blue-900" viewbox="0 0 24 24" id="Windframe_Epcd4EApn"><circle cx="12" cy="5"
                      r="3" /><path d="M12 22V8M5 12H2a10 10 0 0020 0h-3" /></svg>
                </div>
                <div class="sm:pl-6 sm:mt-0 mt-6 flex-grow">
                  <p class="font-medium text-gray-900 mb-1 text-xl title-font">The 400 Blows</p>
                  <p class="leading-relaxed">VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard
                    cliche palo santo offal.</p>
                </div>
              </div>
            </div>
            <div class="pb-10 sm:items-center md:w-2/3 mx-auto flex relative">
              <div class="h-full w-6 items-center justify-center absolute inset-0 flex">
                <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
              </div>
              <div class="w-6 h-6 rounded-full mt-10 sm:mt-0 items-center justify-center bg-blue-900 text-white font-medium
            text-sm flex-shrink-0 inline-flex relative z-10 title-font">4</div>
              <div class="md:pl-8 sm:items-center sm:flex-row pl-6 items-start flex-grow flex flex-col">
                <div class="w-24 h-24 bg-gray-200 text-indigo-500 rounded-full items-center justify-center flex-shrink-0
              inline-flex">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    class="w-12 h-12 text-blue-900" viewbox="0 0 24 24" id="Windframe_pxAj3E0BD"><path d="M20 21v-2a4 4 0
                00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4" /></svg>
                </div>
                <div class="sm:pl-6 sm:mt-0 mt-6 flex-grow">
                  <p class="font-medium text-gray-900 mb-1 text-xl title-font">Neptune</p>
                  <p class="leading-relaxed">VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard
                    cliche palo santo offal.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="text-gray-600 body-font">
          <div class="px-5 py-12 mx-auto container">
            <div class="text-center w-full mb-20 flex flex-col">
              <p class="sm:text-3xl text-2xl font-medium mb-4 text-gray-900 title-font">Master Cleanse Reliac Heirloom</p>
              <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn
                asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably havent heard of them man bun
                deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
            </div>
            <div class="mt-3 text-center flex flex-wrap -m-4">
              <div class="md:w-1/4 sm:w-1/2 w-full p-4">
                <div class="px-4 py-6 rounded-lg border-2 border-gray-200">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    class="text-blue-900 w-12 h-12 mb-3 inline-block" viewbox="0 0 24 24" id="Windframe_Ic0hhP8le"><path
                      d="M8 17l4 4 4-4m-4-5v9" /><path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29" /></svg>
                  <p class="font-medium text-3xl text-gray-900 title-font">60%</p>
                  <p class="leading-relaxed">off properties sell above value</p>
                </div>
              </div>
              <div class="md:w-1/4 sm:w-1/2 w-full p-4">
                <div class="px-4 py-6 rounded-lg border-2 border-gray-200">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    class="text-blue-900 w-12 h-12 mb-3 inline-block" viewbox="0 0 24 24" id="Windframe_F3vf5P9ia"><path
                      d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0
                00-3-3.87m-4-12a4 4 0 010 7.75"/></svg>
                  <p class="font-medium text-3xl text-gray-900 title-font">1.3K</p>
                  <p class="leading-relaxed">Users</p>
                </div>
              </div>
              <div class="md:w-1/4 sm:w-1/2 w-full p-4">
                <div class="px-4 py-6 rounded-lg border-2 border-gray-200">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    class="text-blue-900 w-12 h-12 mb-3 inline-block" viewbox="0 0 24 24" id="Windframe_9SXejQSs7"><path
                      d="M3 18v-6a9 9 0 0118 0v6" /><path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0
                002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"/></svg>
                  <p class="font-medium text-3xl text-gray-900 title-font">74</p>
                  <p class="leading-relaxed">Files</p>
                </div>
              </div>
              <div class="md:w-1/4 sm:w-1/2 w-full p-4">
                <div class="px-4 py-6 rounded-lg border-2 border-gray-200">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    class="text-blue-900 w-12 h-12 mb-3 inline-block" viewbox="0 0 24 24" id="Windframe_e2TDrG1Ev"><path
                      d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                  <p class="font-medium text-3xl text-gray-900 title-font">46</p>
                  <p class="leading-relaxed">Places</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <span>{/* statistics */}</span>
      </div>
      <div class="bg-white pt-16 pr-4 pb-16 pl-4 md:px-24 lg:px-8 lg:py-20">
        <div class="mr-auto ml-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
          <div class="mr-auto ml-auto sm:mx-auto lg:max-w-2xl max-w-xl">
            <div class="mt-0 mr-0 mb-16 ml-0 sm:text-center flex flex-col">
              <div></div>
              <div class="mt-0 mr-auto mb-6 ml-auto text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl
            md:mx-auto max-w-lg font-sans">
                <div class="relative"></div>
                <p class="font-bold text-3xl tracking-tight sm:text-4xl sm:leading-none inline font-sans">FAQ</p>
              </div>
              <p class="text-gray-700 text-base md:text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</p>
            </div>
            <div class="space-y-4">
              <div class="border-b">
                <div class="items-center w-full pt-4 pr-4 pb-4 pl-4 flex focus:outline-none">
                  <p class="text-lg font-medium">How do I register on the platform?</p>
                </div>
                <div class="pt-0 pr-4 pb-4 pl-4">
                  <p class="text-gray-700">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                    doloremque rem aperiam, eaque ipsa quae.</p>
                </div>
              </div>
              <div class="border-b">
                <div class="items-center w-full pt-4 pr-4 pb-4 pl-4 flex focus:outline-none">
                  <p class="text-lg font-medium">What is the ID verification process?</p>
                </div>
                <div class="pt-0 pr-4 pb-4 pl-4">
                  <p class="text-gray-700">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                    doloremque rem aperiam, eaque ipsa quae.</p>
                </div>
              </div>
              <div class="border-b">
                <div class="items-center w-full pt-4 pr-4 pb-4 pl-4 flex focus:outline-none">
                  <p class="text-lg font-medium">How can I bid on houses?</p>
                </div>
                <div class="pt-0 pr-4 pb-4 pl-4">
                  <p class="text-gray-700">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                    doloremque rem aperiam, eaque ipsa quae.</p>
                </div>
              </div>
              <div class="border-b">
                <div class="items-center w-full pt-4 pr-4 pb-4 pl-4 flex focus:outline-none">
                  <p class="text-lg font-medium">Can I track the status of my bids?</p>
                </div>
                <div class="pt-0 pr-4 pb-4 pl-4">
                  <p class="text-gray-700">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                    doloremque rem aperiam, eaque ipsa quae.</p>
                </div>
                <div class="items-center w-full pt-4 pr-4 pb-4 pl-4 flex focus:outline-none">
                  <p class="text-lg font-medium">What happens if my bid is accepted?</p>
                </div>
                <div class="pt-0 pr-4 pb-4 pl-4">
                  <p class="text-gray-700">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                    doloremque rem aperiam, eaque ipsa quae.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full bg-white pt-20 pr-4 pb-20 pl-4 bg-gradient-to-b from-gray-100 to-white">
        <div class="w-full mt-0 mr-auto mb-0 ml-auto text-left md:text-center md:w-3/4 lg:w-2/4">
          <p class="mb-2 text-base font-semibold text-blue-900">Register today!</p>
          <p class="mt-0 mr-0 mb-6 ml-0 text-3xl font-extrabold">Sign up for a free account to start bidding on houses</p>
          <div class="mt-- mr-- mb-0 ml-- space-x-0 md:space-x-2">
            <div class="bg-blue-900 text-white font-bold pt-2 pr-4 pb-2 pl-4 rounded inline-flex items-center justify-center
          w-full mb-2 hover:bg-blue-900 sm:w-auto sm:mb-0">
              <p class="inline-flex">Get Started</p>
              <p class="inline-flex w-4 h-4 ml-1">
                <svg classname="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 20 20" fill="currentColor"><path
                  fillrule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586
              11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" cliprule="evenodd" /></svg>
              </p>
            </div>
            <div class="bg-gray-100 text-gray-800 font-bold pt-2 pr-4 pb-2 pl-4 rounded inline-flex items-center
          justify-center w-full mb-2 hover:bg-gray-200 sm:w-auto sm:mb-0">
              <p class="inline-flex">Contact</p>
              <p class="inline-flex w-4 h-4 ml-1">
                <svg classname="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 20 20" fill="currentColor"><path
                  fillrule="evenodd" d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1
              1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0
              101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415
              1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0
              001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z" cliprule="evenodd" /></svg>
              </p>
            </div>
          </div>
        </div>
      </div>




      {/* Our CTA */}
      {/* <CallToActions /> */}
      {/* Our CTA */}

      {/* Start Our Footer */}
      <section className="footer-style1 pt60 pb-0">
        <Footer />
      </section>
      {/* End Our Footer */}
    </>
  );
};

export default About;
