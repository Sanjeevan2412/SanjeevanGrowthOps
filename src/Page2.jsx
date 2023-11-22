import Square from "../public/images/Squares.svg";
import Component1 from "./components/Component1/Component1";

function Page2() {
  return (
    <div className="min-h-fit xl:min-h-[50vh] flex justify-center items-center p-20 max-sm:px-5">
      <div className="w-fit xl:scale-125 2xl:scale-150">
        <div className="flex w-full items-center justify-center h-7">
          <div className="flex grow flex-col gap-y-0.5 mr-1">
            <hr className="w-full" />
            <hr className="w-full" />
          </div>
          <div className="flex justify-center items-center">
            <img src={Square} className="h-2.5 sm:h-3" />
            <div className="flex justify-center max-sm:text-base text-lg my-6 px-4">
              <p className="text-zinc-800 ">WHAT WE&nbsp;</p>
              <p className="text-teal-500">OFFER</p>
            </div>
            <img src={Square} className="h-2.5 sm:h-3 rotate-180" />
          </div>
          <div className="flex grow flex-col gap-y-0.5 ml-1">
            <hr className="w-full" />
            <hr className="w-full" />
          </div>
        </div>
        <div className="flex text-center justify-center text-sm text-neutral-500 max-sm:text-xs ">
          We offer our customer the best services & solutions. this is our main
          services list
        </div>
        <div className="flex items-center max-lg:flex-col">
          <div className="flex max-sm:flex-col">
            <Component1
              Title="RESPONSIVE & MULTIPURPOSE"
              Icon="../../../public/images/Monitor.png"
            />
            <Component1
              Title="EASY CUSTOMIZATION"
              Icon="../../../public/images/Puzzle.png"
            />
          </div>
          <Component1
            Title="AWESOME FRIENDLY SUPPORT"
            Icon="../../../public/images/Blackhole.png"
          />
        </div>
      </div>
    </div>
  );
}

export default Page2;
