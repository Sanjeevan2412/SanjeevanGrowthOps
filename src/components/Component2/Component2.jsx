import PropTypes from "prop-types";

Component2.propTypes = {
  Percentage: PropTypes.string,
  Text: PropTypes.string,
};

function Component2(props) {
  let Dash = "calc(250*(" + props.Percentage + "/100)) 250";

  return (
    <div className="flex flex-col w-36 items-center">
      <div className="relative w-24 h-24 mt-5">
        <svg
          className="absolute w-full h-full rotate-180"
          viewBox="0 0 100 100"
        >
          <circle
            className="text-zinc-300  progress-ring__circle stroke-current"
            strokeWidth="2"
            cx="50"
            cy="50"
            r="40"
            fill="transparent"
          ></circle>
          <circle
            className="text-teal-500 stroke-current"
            strokeWidth="2"
            strokeLinecap="round"
            cx="50"
            cy="50"
            r="40"
            fill="transparent"
            strokeDasharray={Dash}
          ></circle>
        </svg>
        <p className="absolute flex text-base text-zinc-300 font-bold justify-center items-center w-full h-full">
          {props.Percentage}%
        </p>
      </div>
      <p className="text-base text-neutral-500 m-2">{props.Text}</p>
    </div>
  );
}

export default Component2;
