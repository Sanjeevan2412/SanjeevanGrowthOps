import { useState } from "react";

import Quotation from "../public/images/Quotation.png";
import Quotation2 from "../public/images/Quotation2.png";

function Page7() {
  const [Index, setIndex] = useState(0);

  function SlideRight() {
    var textElement = document.getElementById("Transition");
    if (textElement.className) {
      textElement.className = "";
    }
    textElement.className = "opacity-0";
    if (Index < 3) {
      setIndex(Index + 1);
    } else {
      setIndex(0);
    }
    textElement.focus();
    textElement.className =
      "transition-opacity ease-in duration-700 opacity-100";
  }

  function SlideLeft() {
    var textElement = document.getElementById("Transition");
    if (textElement.className) {
      textElement.className = "";
    }
    textElement.className = "opacity-0";
    if (Index > 0) {
      setIndex(Index - 1);
    } else {
      setIndex(3);
    }
    textElement.focus();
    textElement.className =
      "transition-opacity ease-in duration-700 opacity-100";
  }

  const data = [
    {
      Name: "Alexis Simpson",
      Position: "CEO & Developer",
      Quote:
        "Lorem ipsum dolor sit amet, totam rem. Mobi sagittis, sem quis lacinia faucibus, orci ipsum gravida tortor, vel interdum mi sapien ut justo consequat magna, id molestie ipsum volutpat quis.",
    },
    {
      Name: "Steven Cole",
      Position: "User Interface Designer",
      Quote:
        "Sed ut felis vehicula, vulputate lorem sed, vulputate purus. Nulla posuere bibendum nibh vitae lacinia. Proin lacus nunc, iaculis sed tortor euismod, egestas elementum nulla. Sed nec varius dolor. Integer.",
    },
    {
      Name: "Frank Piener",
      Position: "Sales Manager",
      Quote:
        "Nunc molestie suscipit nisi, et semper felis. Etiam pellentesque felis quis molestie dignissim. Aliquam ornare mi nec est lacinia faucibus. Fusce nec metus metus. Praesent ornare justo eget risus commodo.",
    },
    {
      Name: "Ashley Lennon",
      Position: "IT Specialist",
      Quote:
        "Proin dignissim nunc sit amet turpis interdum, et finibus augue ultricies. Nulla urna nulla, gravida non sollicitudin quis, dictum id nulla. Maecenas ultricies, elit non ornare scelerisque, tortor sapien dignissim.",
    },
  ];

  return (
    <div className="relative min-h-fit flex flex-col bg-teal-500 justify-center items-center p-20 max-sm:px-5">
      <div className="absolute justify-center items-center flex -top-5">
        <div className="flex bg-zinc-800 w-10 h-10 rotate-45 rounded"></div>
        <img className="absolute h-5" src={Quotation2} />
      </div>
      <div id="Transition">
        <div className="flex flex-col items-center min-w-full">
          <p className="flex max-sm:flex-col w-fit text-base text-center text-teal-500 bg-white uppercase p-2 rounded">
            {data[Index].Name} &nbsp;
            <p className="text-xs text-zinc-400">- {data[Index].Position}</p>
          </p>
          <p className="text-base md:text-lg md:font-normal text-white text-center p-4">
            <span className="inline-flex items-bottom">
              <img src={Quotation} className="h-5" />
            </span>
            {data[Index].Quote}
            <span className="inline-flex items-bottom">
              <img src={Quotation} className="h-5 rotate-180" />
            </span>
          </p>
        </div>
      </div>

      <div className="flex gap-2 items-center">
        <div
          onClick={() => SlideLeft()}
          className="flex h-fit w-fit bg-white items-center justify-center rounded group hover:bg-zinc-800"
        >
          <svg viewBox="0 0 20 21" className="m-2 w-3">
            <path
              d="M0.975609 11.973C-0.325204 11.3053 -0.325202 9.63609 0.97561 8.9684L17.0732 0.705699C18.374 0.0380064 20 0.872623 20 2.20801L20 18.7334C20 20.0688 18.374 20.9034 17.0732 20.2357L0.975609 11.973Z"
              className="fill-zinc-800 group-hover:fill-white"
            />
          </svg>
        </div>
        <div
          onClick={() => SlideRight()}
          className="flex h-fit w-fit bg-white items-center justify-center rounded group hover:bg-zinc-800 rotate-180"
        >
          <svg viewBox="0 0 20 21" className="m-2 w-3">
            <path
              d="M0.975609 11.973C-0.325204 11.3053 -0.325202 9.63609 0.97561 8.9684L17.0732 0.705699C18.374 0.0380064 20 0.872623 20 2.20801L20 18.7334C20 20.0688 18.374 20.9034 17.0732 20.2357L0.975609 11.973Z"
              className="fill-zinc-800 group-hover:fill-white"
            />
          </svg>
        </div>
        <img src="" />
      </div>
    </div>
  );
}

export default Page7;
