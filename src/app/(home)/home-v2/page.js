import MobileMenu from "@/components/common/mobile-menu";
import Partner from "@/components/common/Partner";
import Agents from "@/components/home/home-v2/Agents";
import ApartmentType from "@/components/home/home-v2/ApartmentType";
import Explore from "@/components/home/home-v2/Explore";
import ExploreProvincies from "@/components/home/home-v2/ExploreProvincies";
import NewListings from "@/components/home/home-v2/NewListings";
import FindHomeBlock from "@/components/home/home-v2/FindHomeBlock";
import Header from "@/components/home/home-v2/Header-1";
import Testimonial from "@/components/home/home-v2/Testimonial";
import About from "@/components/home/home-v2/about";
import Hero from "@/components/home/home-v2/hero-1";
import React from "react";
import Footer from "@/components/common/default-footer";
import Cta from "@/components/home/home-v2/Cta";
import DefaultHeader from "@/components/common/DefaultHeader";
import Image from "next/image";

import Link from "next/link";

export const metadata = {
  title: "Home || Thuistekoop - De Online Makelaar",
};

const Home_V2 = () => {
  return (
    <>
      {/* Main Header Nav */}
      <Header />
      {/* End Main Header Nav */}

      {/* Mobile Nav  */}
      <MobileMenu />
      {/* End Mobile Nav  */}

      {/* Home Banner Style V2 */}
      {/* <section className="home-banner-style2 p0">
        <div className="home-style2">
          <div className="container maxw1600">
            <div className="home2-hero-banner bdrs12"></div>
            <div className="row">
              <div className="col-xl-10 mx-auto">
                <Hero />
              </div>
            </div>
          </div>
       
        </div>
      </section> */}
      {/* End Home Banner Style V2 */}

      {/* Home Banner Style V6 */}
      <section className="home-banner-style6 p0">
        <div className="home-style1">
          <div className="container">
            <div className="row">
              <div className="col-xl-10">
                <Hero />
              </div>
            </div>
          </div>
          {/* End .container */}
        </div>
      </section>
      {/* End Home Banner Style V6 */}

      {/* Explore Apartment Home */}

      <div class="py-16">
        <div class="xl:container m-auto space-y-16 px-6 text-black md:px-12">
          <div>
            <h2 class="mt-4 text-2xl font-bold text-black dark:text-white md:text-4xl">
              A transparent housing market, <br class="sm:block" hidden />
              for everyone..
            </h2>
          </div>
          <div class="md:-mx-8 mt-16 grid gap-8 lg:gap-0 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <div class="group relative p-8 rounded-3xl bg-white dark:border-gray-700 dark:bg-gray-800 dark:lg:bg-transparent border border-gray-100 lg:border-transparent hover:border-gray-100 dark:shadow-none dark:hover:border-gray-700 dark:hover:bg-gray-800 shadow-2xl shadow-gray-600/10 lg:shadow-transparent lg:hover:shadow-gray-600/10 sm:gap-8 sm:flex transition duration-300">
              <div class="relative">
                <img
                  src="https://img.icons8.com/ios/100/000000/checkmark--v1.png"
                  class="w-10 mb-3"
                  width="512"
                  height="512"
                  alt="package-delivery "
                />
                <h3 class="mt-8 mb-4 text-2xl font-semibold text-black transition dark:text-white">
                  First feature
                </h3>
                <p class="text-black dark:text-gray-300">
                  Neque Dolor, alias quae, quibusdam accusantium, laudantium recusandae tenetur fugiat
                  non cum doloribus aperiam voluptates nostrum.
                </p>
              </div>
            </div>
            <div class="group relative p-8 rounded-3xl bg-white dark:border-gray-700 dark:bg-gray-800 dark:lg:bg-transparent border border-gray-100 lg:border-transparent hover:border-gray-100 dark:shadow-none dark:hover:border-gray-700 dark:hover:bg-gray-800 shadow-2xl shadow-gray-600/10 lg:shadow-transparent lg:hover:shadow-gray-600/10 sm:gap-8 sm:flex transition duration-300">
              <div class="relative">
                <img
                  src="https://img.icons8.com/ios/100/000000/checkmark--v1.png"
                  class="w-10 mb-3"
                  width="512"
                  height="512"
                  alt="package-delivery "
                />
                <h3 class="mt-8 mb-4 text-2xl font-semibold text-black transition dark:text-white">
                  Second feature
                </h3>
                <p class="text-black dark:text-gray-300">
                  Neque Dolor, alias quae, quibusdam accusantium, laudantium recusandae tenetur fugiat
                  non cum doloribus aperiam voluptates nostrum.
                </p>
              </div>
            </div>
            <div class="group relative p-8 rounded-3xl bg-white dark:border-gray-700 dark:bg-gray-800 dark:lg:bg-transparent border border-gray-100 lg:border-transparent hover:border-gray-100 dark:shadow-none dark:hover:border-gray-700 dark:hover:bg-gray-800 shadow-2xl shadow-gray-600/10 lg:shadow-transparent lg:hover:shadow-gray-600/10 sm:gap-8 sm:flex transition duration-300">
              <div class="relative">
                <img
                  src="https://img.icons8.com/ios/100/000000/checkmark--v1.png"
                  class="w-10 mb-3"
                  width="512"
                  height="512"
                  alt="package-delivery "
                />
                <h3 class="mt-8 mb-4 text-2xl font-semibold text-black transition dark:text-white">
                  Third feature
                </h3>
                <p class="text-black dark:text-gray-300">
                  Neque Dolor, alias quae, quibusdam accusantium, laudantium recusandae tenetur fugiat
                  non cum doloribus aperiam voluptates nostrum.
                </p>
              </div>
            </div>
            <div class="group relative p-8 rounded-3xl bg-white dark:border-gray-700 dark:bg-gray-800 dark:lg:bg-transparent border border-gray-100 lg:border-transparent hover:border-gray-100 dark:shadow-none dark:hover:border-gray-700 dark:hover:bg-gray-800 shadow-2xl shadow-gray-600/10 lg:shadow-transparent lg:hover:shadow-gray-600/10 sm:gap-8 sm:flex transition duration-300">
              <div class="relative">
                <img
                  src="https://img.icons8.com/ios/100/000000/checkmark--v1.png"
                  class="w-10 mb-3"
                  width="512"
                  height="512"
                  alt="package-delivery "
                />
                <h3 class="mt-8 mb-4 text-2xl font-semibold text-black transition dark:text-white">
                  Fourth feature
                </h3>
                <p class="text-black dark:text-gray-300">
                  Neque Dolor, alias quae, quibusdam accusantium, laudantium recusandae tenetur fugiat
                  non cum doloribus aperiam voluptates nostrum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* Explore Apartment Home */}

      {/* Explore Apartment */}
      <section className="pb90 pb30-md">
        <div className="container">
          <h2 className="title text-3xl mb-5 font-semibold text-black">Explore all types of houses</h2>
          <div className="row justify-content-center" data-aos="fade">
            <div className="col-lg-12">
              <ApartmentType />
            </div>
          </div>
        </div>
      </section>
      {/* End Explore Apartment */}

      {/* Featured Listings */}
      <section className="pt0 pb60 pb30-md bgc-white">
        <div className="container">
          <div className="row align-items-center" data-aos="fade-up">
            <div className="col-lg-9">
              <div className="main-title2">
                <h2 className="title text-3xl font-semibold text-black">Discover Our New Listings</h2>
                {/* <p className="paragraph ">
                  Here are all our new listings!
                </p> */}
              </div>
            </div>
            <div className="col-lg-3">
              <div className="text-start text-lg-end mb-3">
                <Link className="ud-btn2" href="/banner-search-v2">
                  See All Properties
                  <i className="fal fa-arrow-right-long" />
                </Link>
              </div>
            </div>
          </div>
          {/* End header */}

          <div className="row">
            <div className="col-lg-12" data-aos="fade-up" data-aos-delay="200">
              <div className="feature-listing-slider">
                <NewListings />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Explore Featured Listings */}

      {/* Property Cities */}
      <section className="pt0 pb90 pb50-md">
        <div className="container">
          <div className="row  justify-content-between align-items-center">
            <div className="col-auto">
              <div
                className="main-title"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <h2 className="title text-3xl font-semibold text-black">Explore Provincies</h2>
                {/* <p className="paragraph">
                  Checkout our properties per province!
                </p> */}
              </div>
            </div>
            {/* End header */}

            <div className="col-auto mb30">
              <div className="row align-items-center justify-content-center">
                <div className="col-auto">
                  <button className="cities_prev__active swiper_button">
                    <i className="far fa-arrow-left-long" />
                  </button>
                </div>
                {/* End prev */}

                <div className="col-auto">
                  <div className="pagination swiper--pagination cities_pagination__active" />
                </div>
                {/* End pagination */}

                <div className="col-auto">
                  <button className="cities_next__active swiper_button">
                    <i className="far fa-arrow-right-long" />
                  </button>
                </div>
                {/* End Next */}
              </div>
            </div>
            {/* End .col for navigation and pagination */}
          </div>
          {/* End .row */}

          <div className="row">
            <div className="col-lg-12" data-aos="fade-up" data-aos-delay="300">
              <div className="property-city-slider">
                <ExploreProvincies />
              </div>
            </div>
          </div>
          {/* End .row */}
        </div>
      </section>
      {/* End property cities */}

      {/* Explore Apartment */}
      <section className="p-0">
        <div className="how-we-help position-relative mx-auto bgc-thm-light maxw1600 pt120 pt60-md pb90 pb30-md bdrs12 mx20-lg">
          <div className="container">
            <div className="row">
              <div
                className="col-lg-6 m-auto wow fadeInUp"
                data-wow-delay="300ms"
              >
                <div className="main-title text-center">
                  <h2 className="title text-3xl font-semibold text-black">How can we help you?</h2>
                  <p className="paragraph">
                    Buying or selling? We&apos;re here to help
                  </p>
                </div>
              </div>
            </div>
            {/* End .row */}

            <div className="row">
              <Explore />
            </div>
          </div>
        </div>
      </section>
      {/* End Explore Apartment */}



      {/* Our CTA */}

      <div class="py-16">
        <div class="container m-auto space-y-8 px-6 text-black md:px-12 lg:px-20">
          <div class="flex items-center justify-center -space-x-2">
            <img
              loading="lazy"
              width="220"
              height="220"
              src="https://img.icons8.com/color/96/circled-user-male-skin-type-1-2--v1.png"
              alt="member photo"
              class="h-8 w-8 rounded-full object-cover"
            />
            <img
              loading="lazy"
              width="220"
              height="220"
              src="https://img.icons8.com/color/96/circled-user-male-skin-type-1-2--v1.png"
              alt="member photo"
              class="h-12 w-12 rounded-full object-cover"
            />
            <img
              loading="lazy"
              width="220"
              height="220"
              src="https://img.icons8.com/color/96/circled-user-male-skin-type-1-2--v1.png"
              alt="member photo"
              class="z-10 h-16 w-16 rounded-full object-cover"
            />
            <img
              loading="lazy"
              width="220"
              height="220"
              src="https://img.icons8.com/color/96/circled-user-male-skin-type-1-2--v1.png"
              alt="member photo"
              class="relative h-12 w-12 rounded-full object-cover"
            />
            <img
              loading="lazy"
              width="220"
              height="220"
              src="https://img.icons8.com/color/96/circled-user-male-skin-type-1-2--v1.png"
              alt="member photo"
              class="h-8 w-8 rounded-full object-cover"
            />
          </div>
          <div class="m-auto space-y-6 md:w-8/12 lg:w-7/12">
            <h1 class="text-center text-4xl font-bold text-black md:text-5xl">Get Started now</h1>
            <p class="text-center text-xl text-black">
              Be part of millions people around the world using tailus in modern User Interfaces.
            </p>
            <div class="flex flex-wrap justify-center gap-6">
              <a href="/contact">
                <button class="bg-navy hover:bg-blue-800 active:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full shadow-md transform transition-transform duration-300 hover:scale-105">
                  Contact
                </button>
              </a>

              <a href="/about">
                <button class="text-navy hover:text-blue-800 active:text-blue-700 font-semibold py-3 px-6 border border-blue-900 rounded-full shadow-md transform transition-transform duration-300 hover:scale-105">
                  About us
                </button>
              </a>

            </div>
          </div>
        </div>
      </div>

      {/* End Our CTA */}

      {/* Start Our Footer */}
      <section className="footer-style1 at-home2 pb-0">
        <Footer />
      </section>
      {/* End Our Footer */}
    </>
  );
};

export default Home_V2;
