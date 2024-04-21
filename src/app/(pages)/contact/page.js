import CallToActions from "@/components/common/CallToActions";
import DefaultHeader from "@/components/common/DefaultHeader";
import Footer from "@/components/common/default-footer";
import MobileMenu from "@/components/common/mobile-menu";
import Form from "@/components/pages/contact/Form";
import Office from "@/components/pages/contact/Office";

export const metadata = {
  title: "Contact  || Thuistekoop",
};

const Contact = () => {
  return (
    <>
      {/* Main Header Nav */}
      <DefaultHeader />
      {/* End Main Header Nav */}

      {/* Mobile Nav  */}
      <MobileMenu />
      {/* End Mobile Nav  */}

      {/* contact info section */}
      <section className="text-gray-600">
        <div className="px-5 mx-auto container">
          <div className="text-center w-full mb-22 flex flex-col">
            <p className="text-xs text-navy tracking-widest font-medium mb-1">contact</p>
            <p className="sm:text-3xl text-2xl font-medium mb-4 text-gray-900">Any questions?</p>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn
              asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably havent heard of them man bun deep
              jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
          </div>
          <div className="flex mt-5 flex-wrap">
            <div className="xl:w-1/3 md:w-full lg:w-1/3 px-4">
              <div className="bg-navy rounded-lg shadow-md border border-gray-200 p-6 mb-6">
                <p className="text-lg sm:text-xl text-white font-medium mb-2 text-center">Bezoekadres</p>
                <p className="leading-relaxed text-white text-base mb-4 text-center">
         
                  Huys Europa<br />
                  Piet 167<br />
                  1019 GM Amsterdam
                </p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-full lg:w-1/3 px-4">
              <div className="bg-navy rounded-lg shadow-md border border-gray-200 p-6 mb-6">
                <p className="text-lg sm:text-xl text-white font-medium mb-2 text-center">Postadres</p>
                <p className="leading-relaxed text-white text-base mb-4 text-center">
                  Postbus 94591<br />
                  1030 GN Amsterdam<br />
                  Nederland
                </p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-full lg:w-1/3 px-4">
              <div className="bg-navy rounded-lg shadow-md border border-gray-200 p-6 mb-6">
                <p className="text-lg sm:text-xl text-white font-medium mb-2 text-center">Info</p>
                <p className="leading-relaxed text-white text-base mb-4 text-center">
                  <span>E-mail: <a href="mailto:info@thuistekoop.nl">info@thuistekoop.nl</a></span><br />
                  <span>KvK: 8903428534085</span><br />
                  <span>BTW: 342r432433</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Our Contact With Map */}
      <section class="text-gray-600 body-font relative">
        <div class="absolute inset-0 bg-navy">
          <iframe width="100%" height="100%" frameborder="0" marginheight="0" marginwidth="0" title="map" scrolling="no" src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=%C4%B0zmir+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed" className="filter grayscale contrast-120 opacity-40"></iframe>
        </div>
        <div class="container shadow-3xl px-5 py-24 mx-auto flex">
          <div class="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
            <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">Send us a message!</h2>
            <p class="leading-relaxed mb-5 text-gray-600">Post-ironic portland shabby chic echo park, banjo fashion axe</p>
            <div class="relative mb-4">
              <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
              <input type="email" id="email" name="email" class="w-full bg-white shadow-xl  rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <div class="relative mb-4">
              <label for="message" class="leading-7 text-sm text-gray-600">Message</label>
              <textarea id="message" name="message" class="w-full bg-white shadow-xl rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
            </div>
            <button class="text-white bg-navy border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Submit</button>
            {/* call us button */}
            <button class="flex items-center justify-center text-black bg-white border-1 border-black py-2 px-6 mt-4 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26" class="h-6 w-6">
                <path d="M21.384,17.752a2.108,2.108,0,0,1-.522,3.359,7.543,7.543,0,0,1-5.476.642C10.5,20.523,3.477,13.5,2.247,8.614a7.543,7.543,0,0,1,.642-5.476,2.108,2.108,0,0,1,3.359-.522L8.333,4.7a2.094,2.094,0,0,1,.445,2.328A3.877,3.877,0,0,1,8,8.2c-2.384,2.384,5.417,10.185,7.8,7.8a3.877,3.877,0,0,1,1.173-.781,2.092,2.092,0,0,1,2.328.445Z" />
              </svg>
              <span>Call us</span>
            </button>

            <p class="text-xs text-gray-500 mt-3">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p>
          </div>
        </div>
      </section>





      {/* Start Our Footer */}
      <section className="footer-style1 pt60 pb-0">
        <Footer />
      </section>
      {/* End Our Footer */}
    </>
  );
};

export default Contact;
