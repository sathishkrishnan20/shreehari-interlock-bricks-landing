import React, { useState } from "react";

// import react slick
import Slider from "react-slick";
import Image from "next/image";
import Stars from "../public/assets/Icon/stars.svg";
import ArrowBack from "../public/assets/Icon/eva_arrow-back-fill.svg";
import ArrowNext from "../public/assets/Icon/eva_arrow-next-fill.svg";

const Testimoni = ({
  listTestimoni = [
    {
      name: "Suresh K",
      image: "/assets/people-1.png",
      city: "Kannankulam",
      country: "Tirunelveli",
      rating: "5",
      testimoni:
      "We chose Shree Hari Bricks for our driveway, and we couldn't be happier with the results. The 6-inch interlock bricks are incredibly durable and look fantastic. The team was professional and helped us throughout the process. Highly recommend!"
      
    },
    {
      name: "Anjali R",
      image: "/assets/people-2.png",
      city: "Anjugram",
      country: "Kannyakumari",
      rating: "4.5",
      testimoni: "Shree Hari Bricks provided exceptional service and high-quality bricks for our garden project. The 8-inch interlock bricks were perfect for our large patio, and the installation was seamless. We'll definitely be using their products again for future projects."
  
    },
    {
      name: "Rajesh P.",
      image: "/assets/people-3.png",
      city: "Tuticorin",
      country: "Tuticorin",
      rating: "4.5",
      testimoni:
      "Excellent quality and great customer service! The interlock bricks from Shree Hari have transformed our backyard. The bricks are strong, beautifully designed, and eco-friendly. The brick calculator on their website made it easy for us to estimate our needs. Very satisfied!"
      
    },
    {
      name: "Meena S.",
      image: "/assets/people-3.png",
      city: "Nagercoil",
      country: "Kanyakumai",
      rating: "4",
      testimoni: "We were impressed by the precision and strength of Shree Hari's 6-inch interlock bricks. They were perfect for our walkway, providing both durability and aesthetic appeal. The staff was knowledgeable and supportive, making our purchase a pleasant experience."

    },
  ],
}) => {
  const settings = {
    dots: true,
    customPaging: function (i) {
      return (
        <a className="">
          <span className="mx-2 rounded-l-full rounded-r-full h-4 w-4 block cursor-pointer transition-all "></span>
        </a>
      );
    },
    dotsClass: "slick-dots w-max absolute mt-20  ",
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const [sliderRef, setSliderRef] = useState(null);

  return (
    <>
      <Slider
        {...settings}
        arrows={false}
        ref={setSliderRef}
        className="flex items-stretch justify-items-stretch"
      >
        {listTestimoni.map((listTestimonis, index) => (
          <div className="px-3 flex items-stretch" key={index}>
            <div className="border-2 border-gray-500 hover:border-orange-500 transition-all rounded-lg p-8 flex flex-col">
              <div className="flex flex-col xl:flex-row w-full items-stretch xl:items-center">
                <div className="flex order-2 xl:order-1">
                  <Image
                    src={listTestimonis.image}
                    height={50}
                    width={50}
                    alt="Icon People"
                  />
                  <div className="flex flex-col ml-5 text-left">
                    <p className="text-lg text-white-500 capitalize">
                      {listTestimonis.name}
                    </p>
                    <p className="text-sm text-white-100 capitalize">
                      {listTestimonis.city},{listTestimonis.country}
                    </p>
                  </div>
                </div>
                <div className="flex flex-none items-center ml-auto order-1 xl:order-2">
                  {Array(Number(Math.round(listTestimonis.rating))).fill(0).map(e => (
                    <span className="flex ">
                      <Stars className="h-4 w-4" />
                    </span>
                  ))}
                  {/* <p className="text-sm">{listTestimonis.rating}</p>
                  */}
                </div>
              </div>
              <p className="mt-5 text-left text-white-500">“{listTestimonis.testimoni}</p>
            </div>
          </div>
        ))}
      </Slider>
      <div className="flex w-full items-center justify-end">
        <div className="flex flex-none justify-between w-auto mt-14">
          <div
            className="mx-4 flex items-center justify-center h-14 w-14 rounded-full bg-white border-white-500 border hover:bg-orange-500 hover:text-white-500 transition-all text-orange-500 cursor-pointer"
            onClick={sliderRef?.slickPrev}
          >
            <ArrowBack color="white" className="h-6 w-6  " />
          </div>
          <div
            className="flex items-center justify-center h-14 w-14 rounded-full bg-white border-white-500 border hover:bg-orange-500 hover:text-white-500 transition-all text-orange-500 cursor-pointer"
            onClick={sliderRef?.slickNext}
          >
            <ArrowNext color="white" className="h-6 w-6" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimoni;
