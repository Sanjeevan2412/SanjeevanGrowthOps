import PropTypes from "prop-types";

Component3.propTypes = {
  Title1: PropTypes.string,
  Title2: PropTypes.string,
  Desc: PropTypes.string,
  Desc2: PropTypes.string,
};

function Component3(props) {
  return (
    <div className="flex group">
      <svg width="25" height="50" className="mr-4">
        <path
          className="fill-teal-500 group-hover:fill-zinc-800"
          d="M0 13.391a2 2 0 0 1 2-2h21a2 2 0 0 1 2 2v23.45a2 2 0 0 1-.596 1.424l-10.5 10.35a2 2 0 0 1-2.808 0l-10.5-10.35A2 2 0 0 1 0 36.841v-23.45z"
        />
        <path
          className="fill-zinc-800 group-hover:fill-teal-500"
          d="M0 2a2 2 0 0 1 2-2h21a2 2 0 0 1 2 2v24.022a2 2 0 0 1-.581 1.409l-10.5 10.571a2 2 0 0 1-2.838 0L.581 27.431A2 2 0 0 1 0 26.022V2z"
        />
      </svg>
      <div className="w-56">
        <p className="text-base text-zinc-800">{props.Title1}</p>
        <p className="text-xs text-zinc-400 mb-2">{props.Title2}</p>
        <p className="text-xs text-zinc-500">{props.Desc}</p>
        <p className="text-xs text-zinc-500 flex justify-end">{props.Desc2}</p>
      </div>
    </div>
  );
}

export default Component3;
