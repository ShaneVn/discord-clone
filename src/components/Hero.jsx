import { DownloadIcon } from "@heroicons/react/outline";
// import { auth, provider } from "../firebase";

function Hero() {
  // const signIn = (e) => {
  //   e.preventDefault();

  //   auth.signInWithPopup(provider).catch((error) => alert(error.message));
  // };

  // md:h-[83vh]
  return (
    <div className="bg-discord_blue pb-8 md:pb-0 h-screen lg:max-w-screen   ">
      <div className="p-7 md:flex w-full mx-auto mt-0 justify-between py-40">
        <div className="flex flex-col gap-7 md:max-w-md lg:max-w-full lg:justify-center ">
          <h1 className="text-5xl text-white font-bold">Your place to talk</h1>
          <h2 className="text-white text-lg font-light tracking-wide lg:max-w-3xl w-full">
            Whether you’re part of a school club, gaming group, worldwide art
            community, or just a handful of friends that want to spend time
            together, Discord makes it easy to talk every day and hang out more
            often.
          </h2>
          <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row md:items-start sm:items-center gap-6">
            <button className="bg-white w-60 font-medium flex items-center justify-center rounded-full p-4 text-lg hover:shadow-2xl hover:text-discord_blurple focus:outline-none transition duration-200 ease-in-out">
              <DownloadIcon className="w-6 mr-2" />
              Download for Mac
            </button>
            <button className="bg-gray-900 text-white w-72 font-medium flex items-center justify-center rounded-full p-4 text-lg hover:shadow-2xl hover:bg-gray-800 focus:outline-none transition duration-200 ease-in-out">
              Open Discord in your browser
            </button>
          </div>
        </div>
        <div className=" ">
          <img
            src="../bot.png"
            alt=""
            className=" -left-36 mt-16 sm:-left-44 md:hidden h-80"
          />
          <img
            src="../rightside.png"
            alt=""
            className="hidden md:inline  h-80"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
