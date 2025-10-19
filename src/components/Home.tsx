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
        <div>
          <img src="/profile.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Home;
