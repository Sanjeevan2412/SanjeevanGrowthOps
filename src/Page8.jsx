import { useState } from "react";
import Logo1 from "../public/images/Scenthound-logo.png";
import Logo2 from "../public/images/Vividways-logo.png";
import Logo3 from "../public/images/Hobnob-logo.png";
import Logo4 from "../public/images/Burnabox-logo.png";

function Page8() {
  const [Index, setIndex] = useState(0);

  function SlideRight() {
    var X = 0;
    var ID1 = document.getElementById("1");
    var ID2 = document.getElementById("2");
    var ID3 = document.getElementById("3");
    var ID4 = document.getElementById("4");

    if (Index < 3) {
      setIndex(Index + 1);
      X = Index + 1;
    } else {
      setIndex(0);
      X = 0;
    }

    if (X == 0) {
      ID4.className = "flex opacity-20";
      ID1.className = "flex opacity-100";
    } else if (X == 1) {
      ID1.className = "flex opacity-20";
      ID2.className = "flex opacity-100";
    } else if (X == 2) {
      ID2.className = "flex opacity-20";
      ID3.className = "flex opacity-100";
    } else {
      ID3.className = "flex opacity-20";
      ID4.className = "flex opacity-100";
    }
  }

  function SlideLeft() {
    var X = 0;
    var ID1 = document.getElementById("1");
    var ID2 = document.getElementById("2");
    var ID3 = document.getElementById("3");
    var ID4 = document.getElementById("4");

    if (Index > 0) {
      setIndex(Index - 1);
      X = Index - 1;
    } else {
      setIndex(3);
      X = 3;
    }

    if (X == 0) {
      ID2.className = "flex opacity-20";
      ID1.className = "flex opacity-100";
    } else if (X == 1) {
      ID3.className = "flex opacity-20";
      ID2.className = "flex opacity-100";
    } else if (X == 2) {
      ID4.className = "flex opacity-20";
      ID3.className = "flex opacity-100";
    } else {
      ID1.className = "flex opacity-20";
      ID4.className = "flex opacity-100";
    }
  }

  return (
    <div className="min-h-fit w-full flex flex-col bg-zinc-800 justify-center items-center p-5 md:p-20">
      <div className="flex w-full max-w-screen-xl items-center justify-center">
        <div
          onClick={() => SlideLeft()}
          className="flex h-fit w-fit bg-white items-center justify-center rounded group hover:bg-teal-500"
        >
          <svg viewBox="0 0 20 21" className="m-1 w-2 sm:m-2 sm:w-3">
            <path
              d="M0.975609 11.973C-0.325204 11.3053 -0.325202 9.63609 0.97561 8.9684L17.0732 0.705699C18.374 0.0380064 20 0.872623 20 2.20801L20 18.7334C20 20.0688 18.374 20.9034 17.0732 20.2357L0.975609 11.973Z"
              className="fill-zinc-800 group-hover:fill-white"
            />
          </svg>
        </div>
        <div className="flex px-2 gap-2 sm:px-5 sm:gap-5 lg:px-10">
          <div id="1" className="flex opacity-100">
            <div className="flex w-full bg-zinc-950 justify-center items-center select-none p-2 sm:p-5 lg:p-10">
              <img src={Logo1} />
            </div>
          </div>
          <div id="2" className="flex opacity-20">
            <div className="flex w-full bg-zinc-950 justify-center items-center select-none p-2 sm:p-5 lg:p-10">
              <img src={Logo2} />
            </div>
          </div>
          <div id="3" className="flex opacity-20">
            <div className="flex w-full bg-zinc-950 justify-center items-center select-none p-2 sm:p-5 lg:p-10">
              <img src={Logo3} />
            </div>
          </div>
          <div id="4" className="flex opacity-20">
            <div className="flex w-full bg-zinc-950 justify-center items-center select-none p-2 sm:p-5 lg:p-10">
              <img src={Logo4} />
            </div>
          </div>
        </div>
        <div
          onClick={() => SlideRight()}
          className="flex h-fit w-fit bg-white items-center justify-center rounded group hover:bg-teal-500 rotate-180"
        >
          <svg viewBox="0 0 20 21" className="m-1 w-2 sm:m-2 sm:w-3">
            <path
              d="M0.975609 11.973C-0.325204 11.3053 -0.325202 9.63609 0.97561 8.9684L17.0732 0.705699C18.374 0.0380064 20 0.872623 20 2.20801L20 18.7334C20 20.0688 18.374 20.9034 17.0732 20.2357L0.975609 11.973Z"
              className="fill-zinc-800 group-hover:fill-white"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Page8;
