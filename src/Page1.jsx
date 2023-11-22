/* eslint-disable react/no-unescaped-entities */
import Square from "../public/images/Squares.svg";
import Arrow from "../public/images/Arrow.svg";

function Page1() {
  return (
    <div className="bg-[url('../public/images/bg.jpg')] bg-cover h-screen flex items-center max-md:justify-center">
      <div className="w-fit relative md:left-40 max-sm:scale-90 md:scale-125 lg:scale-125 2xl:scale-150">
        <p className="text-sm text-zinc-800 flex w-full justify-center -mb-3 sm:-mb-4">
          WHAT ARE YOU WAITING FOR ?
        </p>
        <p className="text-2xl max-sm:text-xl text-zinc-800 w-fit">
          LET'S BE CREATIVE !
        </p>
        <p className="bg-zinc-800 text-xs text-gray-200 p-1.5 my-1.5 rounded">
          LOREM IPSUM DOLOR SI AMET
        </p>
        <div className="flex w-full items-center justify-center">
          <div className="flex grow flex-col gap-y-0.5 mr-1">
            <hr className="w-full" />
            <hr className="w-full" />
          </div>
          <div className="flex justify-center items-center">
            <img src={Square} className="h-2.5 sm:h-3"/>
            <div className="flex text-lg  my-5 px-4">
              <p className="text-teal-500">START&nbsp;</p>
              <p className="text-zinc-800">DOING THAT</p>
            </div>
            <img src={Square} className="h-2.5 sm:h-3 rotate-180"/>
          </div>
          <div className="flex grow flex-col gap-y-0.5 ml-1">
            <hr className="w-full" />
            <hr className="w-full" />
          </div>
        </div>
        <div className="flex w-full justify-center">
          <img src={Arrow} className="h-7 aspect-square rounded-full border-2 border-teal-500 p-0.5"/>
        </div>
      </div>
    </div>
  );
}

export default Page1;
