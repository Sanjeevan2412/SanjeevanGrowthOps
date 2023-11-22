import PropTypes from "prop-types";
import Twitter from "../../../public/images/Twitter.png";
import Facebook from "../../../public/images/Facebook.png";
import Google from "../../../public/images/Google.png";
import Linkedin from "../../../public/images/Linkedin.png";
import Reddit from "../../../public/images/Reddit.png";
import Phone from "../../../public/images/Phone.png";
import Mail from "../../../public/images/Mail.png";

Component4.propTypes = {
  Name: PropTypes.string,
  Position: PropTypes.string,
  Email: PropTypes.string,
  Number: PropTypes.string,
};

function Component4(props) {
  return (
    <div className="rounded-t ">
      <div className="flex relative w-52 h-52 group items-end justify-center">
        <div className="absolute w-52 h-52 bg-teal-500 hidden group-hover:flex rounded-t">
          <div className="flex w-52 items-center justify-center gap-0.5">
            <div className="flex items-center justify-center relative w-5 h-5 group/icon hover:z-50">
              <img src={Twitter} className="w-4 h-4 z-10" />
              <div className="bg-white w-6 h-6 rotate-45 rounded-sm absolute group-hover/icon:bg-zinc-800"></div>
              <div className="bg-teal-500 w-3.5 h-3.5 rounded-full absolute group-hover/icon:bg-zinc-800"></div>
            </div>
            <div className="flex items-center justify-center relative w-5 h-5 group/icon hover:z-50">
              <img src={Facebook} className="w-4 h-4 z-10" />
              <div className="bg-white w-6 h-6 rotate-45 rounded-sm absolute group-hover/icon:bg-zinc-800"></div>
              <div className="bg-teal-500 w-3.5 h-3.5 rounded-full absolute group-hover/icon:bg-zinc-800"></div>
            </div>
            <div className="flex items-center justify-center relative w-5 h-5 group/icon hover:z-50">
              <img src={Google} className="w-4 h-4 z-10" />
              <div className="bg-white w-6 h-6 rotate-45 rounded-sm absolute group-hover/icon:bg-zinc-800"></div>
              <div className="bg-teal-500 w-3.5 h-3.5 rounded-full absolute group-hover/icon:bg-zinc-800"></div>
            </div>
            <div className="flex items-center justify-center relative w-5 h-5 group/icon hover:z-50">
              <img src={Linkedin} className="w-4 h-4 z-10" />
              <div className="bg-white w-6 h-6 rotate-45 rounded-sm absolute group-hover/icon:bg-zinc-800"></div>
              <div className="bg-teal-500 w-3.5 h-3.5 rounded-full absolute group-hover/icon:bg-zinc-800"></div>
            </div>
            <div className="flex items-center justify-center relative w-5 h-5 group/icon hover:z-50">
              <img src={Reddit} className="w-4 h-4 z-10" />
              <div className="bg-white w-6 h-6 rotate-45 rounded-sm absolute group-hover/icon:bg-zinc-800"></div>
              <div className="bg-teal-500 w-3.5 h-3.5 rounded-full absolute group-hover/icon:bg-zinc-800"></div>
            </div>
          </div>
        </div>
        <div className="flex absolute w-52 h-52 bg-zinc-400 group-hover:hidden rounded-t"></div>
        <p className="absolute text-base text-zinc-200 w-fit bg-teal-500 uppercase p-2 rounded -bottom-4 group-hover:bg-zinc-800 ">
          {props.Name}
        </p>
      </div>
      <div className="flex flex-col w-52 text-zinc-400 items-center pt-4 rounded-b border-2 border-t-0 border-zinc-400">
        <div>
          <p className="text-xs text-zinc-500 py-2">{props.Position}</p>
          <hr className="w-full" />
        </div>
        <div className="flex py-2 items-center">
          <img src={Phone} className="h-5" />
          <p className="text-xs ml-2 hover:text-teal-500">{props.Email}</p>
        </div>
        <div className="flex pb-2 items-center">
          <img src={Mail} className="h-5" />
          <p className="text-xs ml-2 hover:text-teal-500">{props.Number}</p>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default Component4;
