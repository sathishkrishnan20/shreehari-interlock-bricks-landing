import React from "react";
import Facebook from "../../public/assets/Icon/facebook.svg";
import Twitter from "../../public/assets/Icon/twitter.svg";
import Instagram from "../../public/assets/Icon/instagram.svg";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-white-300 pt-44 pb-24">
      <div className="max-w-screen-xl w-full mx-auto px-6 sm:px-8 lg:px-16 grid grid-rows-6 sm:grid-rows-1 grid-flow-row sm:grid-flow-col grid-cols-3 sm:grid-cols-12 gap-4">
        <div className="row-span-2 sm:col-span-4 col-start-1 col-end-4 sm:col-end-5  flex-col items-start ">
        <Image
              src="/assets/shree_hari_bricks_logo.png"
              alt="Shree hari bricks"
              layout="responsive"
              quality={100}
              height={80}
              width={200}
            />
          <p className="mb-4">
            <strong className="font-medium">At Shree Hari Bricks,</strong>  we are committed to quality and sustainability. Our bricks are manufactured using eco-friendly processes and materials, ensuring that every brick contributes to a greener planet
          </p>
          <div className="flex w-full mt-2 mb-8 -mx-2">
            <a href="https://facebook.com" className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <Facebook className="h-6 w-6" />
            </a>
            <a href="https://www.youtube.com/channel/UC8LITkTLpt7lh3Fr7njWcIA" hrefLang="_blank" className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <Twitter className="h-6 w-6" />
            </a>
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <Instagram className="h-6 w-6" />
            </div>
          </div>
          <p className="text-gray-400">©{new Date().getFullYear()} - Shreehari Bricks</p>
        </div>
        <div className=" row-span-2 sm:col-span-2 sm:col-start-7 sm:col-end-9 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">Address</p>
          <ul className="text-black-500 ">
            <li className="my-2 hover:text-orange-500 transition-all">
              11/296, Kannankulam
            </li>
            <li className="my-2 hover:text-orange-500 transition-all">
                Anjugram Uvari Road
            </li>
            <li className="my-2 hover:text-orange-500 transition-all">
                Radhapuram Taluk
            </li>
            <li className="my-2 hover:text-orange-500  transition-all">
                Tirunelveli District
            </li>
            <li className="my-2 hover:text-orange-500  transition-all">
              Tamilnadu
            </li>
            <li className="my-2 hover:text-orange-500  transition-all">
              SH 176 Road
            </li>
           
          </ul>
        </div>
        <div className="row-span-2 sm:col-span-2 sm:col-start-9 sm:col-end-11 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">Contact At</p>
          <ul className="text-black-500">
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              +91 9443 750 809
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              rameshannathai@gmail.com
            </li>
          
          </ul>
        </div>
        {/* <div className="row-span-2 sm:col-span-2 sm:col-start-11 sm:col-end-13 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">Earn Money</p>
          <ul className="text-black-500">
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Affiliate{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Become Partner{" "}
            </li>
          </ul>
        </div> */}
      </div>
    </div>
  );
};

export default Footer;
