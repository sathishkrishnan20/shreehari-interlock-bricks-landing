import React, { useMemo, useState } from "react";
import Image from "next/image";
import Testimoni from "./Testimoni";
import ButtonPrimary from "./misc/ButtonPrimary";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import Calculator from "./Calculator";
import ContactUsDialog from "./contactUs";
import Gallery from "./Gallery";

const Pricing = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div
      className="bg-gradient-to-r from-orange-500 to-black-500 w-full py-14"
      id="pricing"
    >
      <div className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
        <div className="flex flex-col w-full">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-white-500 leading-relaxed"
            >
              Choose Your Plan
            </motion.h3>
            <motion.p
              variants={scrollAnimation}
              className="leading-normal w-10/12 sm:w-7/12 lg:w-6/12 mx-auto my-2 text-center text-white-100"
            >
              Explore our range of 6-inch and 8-inch bricks, designed to meet your specific needs and preferences.
            </motion.p>
          </ScrollAnimationWrapper>
          <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-12 py-8 lg:py-12 px-6 sm:px-0 lg:px-6">
            
              <motion.div
                variants={scrollAnimation}
                className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20"
                whileHover={{
                  scale : 1.1,
                  transition: {
                    duration: .2
                  }
                }}
              >
                <div className="p-4 lg:p-0 mt-6 lg:mt-[-3rem]">
                  <Image
                    src="/assets/calculator.png"
                    width={145}
                    height={165}
                    alt="Free Plan"
                  />
                </div>
                <p className="text-lg text-white-100 font-medium capitalize my-2 sm:my-7">
                  Brick Calculator
                </p>
                <p className="text-white-500">
                  Planning your next project? Use our simple brick calculator to estimate the number of bricks you’ll need
                  </p>
                <Calculator />
                
              </motion.div>
           
           
              <motion.div
                variants={scrollAnimation}
                className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20"
                whileHover={{
                  scale : 1.1,
                  transition: {
                    duration: .2
                  }
                }}
              >
              <div className="p-4 lg:p-0 mt-6 lg:mt-16">
                <Image
                  src="/assets/6inch_brick.png"
                  width={145}
                  height={165}
                  alt="6inch Brick"
                />
              </div>
              <p className="text-lg text-white-100 font-medium capitalize my-2 sm:my-7">
                6"inch Brick{" "}
              </p>
              <p className="text-white-500">
                6-inch interlock bricks are perfect for residential and commercial projects
                </p>
              <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-white-500 flex-grow">
                <li className="relative check custom-list my-2">
                High strength and durability
                </li>
                <li className="relative check custom-list my-2">
                Perfect for residential and commercial use
                </li>
                <li className="relative check custom-list my-2">
                Aesthetic design that enhances any project
                </li>
               
              </ul>
              <div className="flex flex-col w-full justify-center mb-8 flex-none mt-12">
                <p className="text-2xl text-white-500 text-center mb-4 ">
                  ₹32 <span className="text-white-100">/ Brick</span>
                </p>
              
              </div>
              </motion.div>
           
           
              <motion.div
                variants={scrollAnimation}
                className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20"
                whileHover={{
                  scale : 1.1,
                  transition: {
                    duration: .2
                  }
                }}
              >
              <div className="p-4 lg:p-0 mt-6 lg:mt-16">
                <Image
                  src="/assets/8inch_brick.png"
                  width={145}
                  height={165}
                  alt="8inch Brick"
                />
              </div>
              <p className="text-lg text-white-100 font-medium capitalize my-2 sm:my-7">
                8"inch Brick
              </p>
              <p className="text-white-500">
              Designed for larger projects, our 8-inch interlock bricks provide the ultimate in stability and strength.
              </p>
              <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-white-500 flex-grow">
                <li className="relative check custom-list my-2">
                Superior stability and strength
                </li>
                <li className="relative check custom-list my-2">
                Ideal for large-scale and industrial projects
                </li>
                <li className="relative check custom-list my-2">
                Easy installation with secure interlocking system
                </li>
               
              </ul>
              <div className="flex flex-col w-full justify-center mb-8 flex-none mt-12">
                <p className="text-2xl text-white-500 text-center mb-4 ">
                  ₹42 <span className="text-white-100">/ Brick</span>
                </p>

               
              </div>
              </motion.div>
           
          </div>
        </div>
        
        {/* <div className="flex flex-col w-full my-16">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed w-9/12 sm:w-6/12 lg:w-4/12 mx-auto">
              Huge Global Network of Fast VPN{" "}
            </motion.h3>
            <motion.p className="leading-normal  mx-auto my-2 w-10/12 sm:w-7/12 lg:w-6/12" variants={scrollAnimation}>
              See LaslesVPN everywhere to make it easier for you when you move
              locations.
            </motion.p>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper>
            <motion.div className="py-12 w-full px-8 mt-16" variants={scrollAnimation}> 
              <Maps className="w-full h-auto" />
            </motion.div>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper>
            <motion.div className="w-full flex justify-evenly items-center mt-4 flex-wrap lg:flex-nowrap" variants={scrollAnimation}>
              
              <img
                src="/assets/Icon/amazon.png"
                className="h-14 w-auto mt-4 lg:mt-2"
                alt=""
              />
              <img
                src="/assets/Icon/netflix.png"
                className="h-14 w-auto mt-2 lg:mt-0"
                alt=""
              />
              <img
                src="/assets/Icon/reddit.png"
                className="h-12 w-auto mt-2 lg:mt-0"
                alt=""
              />
              <img
                src="/assets/Icon/discord.png"
                className="h-14 w-auto mt-2 lg:mt-0"
                alt=""
              />
              <img
                src="/assets/Icon/spotify.png"
                className="h-12 w-auto mt-2 lg:mt-0"
                alt=""
              />
            </motion.div>
          </ScrollAnimationWrapper>
        </div> */}
        <div className="flex flex-col w-full my-16" id="testimoni">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-white-500 leading-normal w-9/12 sm: lg:w-4/12 mx-auto">
                Discover the Stunning Projects Completed with Our Bricks
            </motion.h3>
            <motion.p
              variants={scrollAnimation}
              className="leading-normal mx-auto mb-2 mt-4 w-10/12 sm:w-7/12 lg:w-6/12 text-white-100"
            >
              We leverage the latest technology and innovative techniques to produce interlock bricks that are not only strong and durable but also beautiful and versatile. Our continuous investment in research and development ensures that we stay at the forefront of the industry, delivering products that set new standards in quality and performance.
            </motion.p>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper className="w-full flex flex-col py-12">
            <motion.div variants={scrollAnimation}>
              <Gallery />
            </motion.div>
          </ScrollAnimationWrapper>

          <ScrollAnimationWrapper>
            <motion.h4
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-white-500 leading-normal w-9/12 sm: lg:w-4/12 mx-auto">
              Trusted by Thousands of Happy Customer{" "}
            </motion.h4>
            <motion.p
              variants={scrollAnimation}
              className="leading-normal mx-auto mb-2 mt-4 w-10/12 sm:w-7/12 lg:w-6/12 text-white-100"
            >
              Customer satisfaction is our top priority. We work closely with our clients to understand their needs and provide tailored solutions that meet their project specifications.
              These are the stories of our customers who have joined us with great
              pleasure
            </motion.p>
          </ScrollAnimationWrapper>

          <ScrollAnimationWrapper className="w-full flex flex-col py-12">
            <motion.div variants={scrollAnimation}>
              <Testimoni />
            </motion.div>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper className="relative w-full mt-16">
            <motion.div variants={scrollAnimation} custom={{duration: 3}}>
              <div className="absolute rounded-xl  py-8 sm:py-14 px-6 sm:px-12 lg:px-16 w-full flex flex-col sm:flex-row justify-between items-center z-10 bg-white-500">
                <div className="flex flex-col text-left w-10/12 sm:w-7/12 lg:w-5/12 mb-6 sm:mb-0">
                  <h5 className="text-black-600 text-xl sm:text-2xl lg:text-3xl leading-relaxed font-medium">
                    Contact us to <br /> Get Special Discounts!
                  </h5>
                  <p>Let's have cool deal with us </p>
                </div>
                
                <ButtonPrimary onClick={handleClickOpen}>Contact US</ButtonPrimary>
                <ContactUsDialog open={open} handleClose={handleClose} />
              </div>
              <div
                className="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-60 sm:h-56 top-0 mt-8 mx-auto left-0 right-0"
                style={{ filter: "blur(114px)" }}
                ></div>
            </motion.div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
