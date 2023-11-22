/* eslint-disable react/no-unescaped-entities */
import Square from "../public/images/Squares.svg";
import Phone from "../public/images/Phone2.png";
import Component2 from "./components/Component2/Component2";

function Page3() {
  return (
    <div className="relative min-h-fit xl:min-h-[50vh] flex flex-col bg-zinc-800 justify-center items-center p-20 max-sm:px-5">
      <div className="absolute justify-center items-center flex -top-5">
        <div className="flex bg-teal-500 w-10 h-10 rotate-45 rounded"></div>
        <img className="absolute h-7" src={Phone} />
      </div>
      <div className=" xl:scale-125 2xl:scale-150">
        <div className="flex flex-col place-self-center">
          <div className="flex w-full items-center justify-center h-7">
            <div className="flex justify-center items-center">
              <img src={Square} className="h-2.5 sm:h-3" />
              <div className="flex justify-center max-sm:text-base text-lg my-6 px-4">
                <p className="text-zinc-300">OUR POWERFUL&nbsp;</p>
                <p className="text-teal-500">SKILLS</p>
              </div>
              <img src={Square} className="h-2.5 sm:h-3 rotate-180" />
            </div>
          </div>
          <div className="flex text-center justify-center text-sm text-neutral-500 max-sm:text-xs ">
            We're good and experienced at different things and areas and we
            promise about quality of our works
          </div>
        </div>
        <div className="flex items-center pt-10 max-lg:flex-col max-sm:pt-5">
          <div className="flex">
            <Component2 Percentage="75" Text="WEB DESIGN" />
            <Component2 Percentage="92" Text="WEB DEVELOPMENT" />
          </div>
          <div className="flex">
            <Component2 Percentage="68" Text="SPEED OPTIMIZATION" />
            <Component2 Percentage="100" Text="CUSTOMER SUPPORT" />
          </div>
          <div className="flex">
            <Component2 Percentage="83" Text="MARKETING" />
            <Component2 Percentage="50" Text="ADVERTISMENT" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page3;
