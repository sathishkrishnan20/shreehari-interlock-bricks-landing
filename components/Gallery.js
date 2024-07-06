import React, { useState } from "react";

// import react slick
import Slider from "react-slick";
import Image from "next/image";
import ArrowBack from "../public/assets/Icon/eva_arrow-back-fill.svg";
import ArrowNext from "../public/assets/Icon/eva_arrow-next-fill.svg";

const Gallery = ({
  listGallery = [
    {
      name: "Meena S.",
      image: "/assets/gallery_8.jpeg",
      city: "Nagercoil",
      country: "Kanyakumai",
    },
    {
      name: "Suresh K",
      image: "/assets/gallery_1.jpeg",
      city: "Kannankulam",
      country: "Tirunelveli",
      rating: "5",
     
    },
    {
      name: "Anjali R",
      image: "/assets/gallery_2.jpeg",
      city: "Anjugram",
      country: "Kannyakumari",
      rating: "4.5",
     
    },
    {
      name: "Rajesh P.",
      image: "/assets/gallery_3.jpeg",
      city: "Tuticorin",
      country: "Tuticorin",
     
    },
    {
      name: "Meena S.",
      image: "/assets/gallery_4.jpeg",
      city: "Nagercoil",
      country: "Kanyakumai",
    },
    {
      name: "Meena S.",
      image: "/assets/gallery_5.jpeg",
      city: "Nagercoil",
      country: "Kanyakumai",
    },
    {
      name: "Meena S.",
      image: "/assets/gallery_6.jpeg",
      city: "Nagercoil",
      country: "Kanyakumai",
    },
    {
      name: "Meena S.",
      image: "/assets/gallery_7.jpeg",
      city: "Nagercoil",
      country: "Kanyakumai",
    },
    
  ],
}) => {
  const settings = {
    dots: true,
    customPaging: function (i) {
      return (
        <a className="">
          <span className=" mx-2 rounded-l-full rounded-r-full h-4 w-4 block cursor-pointer transition-all "></span>
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
        {listGallery.map((listGallries, index) => (
          <div className="px-3 flex items-stretch" key={index}>
            <div className="border-2 border-gray-500 hover:border-orange-500 transition-all rounded-lg p-8 flex flex-col">
              <div className="flex flex-col xl:flex-row w-full items-stretch xl:items-center">
                  <Image
                    src={listGallries.image}
                    height={500}
                    width={500}
                    alt="Icon People"
                  />
              </div>
             
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
            <ArrowBack color="white" className="h-6 w-6 " />
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

export default Gallery;
