"use client";
import Image from "next/image";
import Link from "next/link";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";

const ExploreProvincies = () => {
  const cities = [
    {
      id: 1,
      name: "Groningen",
      image: "/images/listings/provincies/1.png",
      number: 12,  
      // number is how many properties there are in that province 
    },
    {
      id: 2,
      name: "Friesland",
      image: "/images/listings/provincies/2.png",
      number: 8,
    },
    {
      id: 3,
      name: "Drenthe",
      image: "/images/listings/provincies/3.png",
      number: 15,
    },
    {
      id: 4,
      name: "Overijssel",
      image: "/images/listings/provincies/4.png",
      number: 10,
    },
    {
      id: 5,
      name: "Flevoland",
      image: "/images/listings/provincies/5.png",
      number: 12,
    },
    {
      id: 6,
      name: "Gelderland",
      image: "/images/listings/provincies/6.png",
      number: 8,
    },
    {
      id: 7,
      name: "Utrecht",
      image: "/images/listings/provincies/7.png",
      number: 8,
    },
    {
      id: 8,
      name: "Noord-Holland",
      image: "/images/listings/provincies/8.png",
      number: 8,
    },
    {
      id: 9,
      name: "Zuid-Holland",
      image: "/images/listings/provincies/9.png",
      number: 8,
    },
    {
      id: 10,
      name: "Zeeland",
      image: "/images/listings/provincies/10.png",
      number: 8,
    },
    {
      id: 11,
      name: "Noord-Brabant",
      image: "/images/listings/provincies/11.png",
      number: 8,
    },
    {
      id: 12,
      name: "Limburg",
      image: "/images/listings/provincies/12.png",
      number: 8,
    },
  
    // Add more cities if needed
  ];

  return (
    <>
      <Swiper
        spaceBetween={30}
        modules={[Navigation, Pagination]}
        navigation={{
          nextEl: ".cities_next__active",
          prevEl: ".cities_prev__active",
        }}
        pagination={{
          el: ".cities_pagination__active",
          clickable: true,
        }}
        breakpoints={{
          300: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 4,
          },
        }}
      >
        {cities.map((city) => (
          <SwiperSlide key={city.id}>
            <div className="item ">
              <Link href="/grid-default">
                <div className="feature-style2 mb30">
                  <div className="feature-img">
                    <Image
                      width={500}
                      height={500}
                      className="w-100 h-100 cover"
                      src={city.image}
                      alt="city listings"
                    />
                  </div>
                  <div className="feature-content pt20">
                    <h6 className="title mb-1 font-bold">{city.name}</h6>
                    <p className="text fz15">{city.number} Properties</p>
                  </div>
                </div>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default ExploreProvincies;
