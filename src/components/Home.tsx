"use client";

import { motion } from "motion/react";

const Home = () => {
  return (
    <section className="container mx-auto min-h-screen bg-base-200">
      <div className="hero min-h-[90vh] px-6 justify-center items-center  grid grid-cols-2">
        <div className="hero-content flex flex-col  gap-8">
          <div className="flex flex-col gap-5">
            <h1 className="text-7xl font-bold text-primary font-inter">
              Arif Biswas
            </h1>
            <p className="text-2xl font-inter font-normal ">
              React Native Developer | Software Engineer
            </p>
            <p className="text-2xl w-[80%] font-inter font-light  text-gray-800 ">
              Building fast, user-friendly mobile apps for e-commerce.
            </p>
          </div>
          <div className="flex gap-5">
            <button className=" btn-primary">Download Resume</button>
            <button className=" btn-outline">Contact Me</button>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-primary h-[75vh]  w-[75vh] rounded-full relative overflow-hidden"
          >
            <motion.img
              src="/avatar-one.png"
              className="h-full object-cover w-full absolute"
              alt=""
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-blue-500 h-[30vh] top-0  w-[30vh] rounded-full absolute"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-blue-500 h-[30vh] z-50 bottom-0 top-0 right-0 left-0 absolute w-[30vh] rounded-full "
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.1 }}
              transition={{ duration: 0.5 }}
              className="bg-blue-500 h-[30vh] bottom-0 right-0 w-[30vh] rounded-full absolute"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home;
