import img from "../img/image.png";

const Banner = () => {
  return (
    <div>
      <div
        className="bg-contain  6 lg:min-h-[700px] min-h-[300px] bg-no-repeat mt-4"
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="text-white flex flex-col items-center justify-center lg:gap-8 gap-1 lg:pt-40 pt-3">
          <h1 className="lexend lg:text-7xl text-xl font-semibold text-center space-y-5">
            Discover an exceptional cooking </h1>
            <h1 className="lexend lg:text-7xl font-semibold text-center space-y-5 lg:mt-6 mt-1">
              class tailored for you!
            </h1>
         
          <p className="text-center lg:text-lg lexend text-gray-300 text-sm">
            {" "}
            Chef Pierre Thiam not only creates delicious food in the fine dining
            world, he also writes and teaches his skills in the kitchen <br />{" "}
            to others. He has catered huge events that have involved the
            President and big name celebrities too!
          </p>
          <div className="flex lg:gap-6 gap-2">
            <button className="btn rounded-full bg-[#0BE58A] border-none lg:text-xl lexend lg:w-40 lg:h-16">
              Explore Now
            </button>
            <button className="btn btn-outline border-white rounded-full text-white lg:text-xl lexend lg:w-40 lg:h-16">
              Secondary
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
