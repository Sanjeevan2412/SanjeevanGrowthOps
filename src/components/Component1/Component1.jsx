import PropTypes from "prop-types";

Component1.propTypes = {
  Icon: PropTypes.string,
  Title: PropTypes.string,
};

function Component1(props) {
  return (
    <div className="flex flex-col items-center w-fit group py-10 px-5 max-sm:scale-90 max-sm:py-5 max-sm:px-0">
      <div className="flex h-16 w-16 bg-zinc-800 rounded-full justify-center items-center mb-2 group-hover:bg-teal-500">
        <img src={props.Icon} className="h-5" />
      </div>
      <p className="text-base text-zinc-800 m-2">{props.Title}</p>
      <p className="text-sm text-neutral-500">Proin in magna a ipsum vivera scelerisq enec turp.</p>
      <p className="text-sm text-neutral-500">Nunc vestibulum fringila accumsan arnare quis.</p>
      <button className="text-sm font-medium text-neutral-500 border-2 rounded-md py-1 px-2 b mt-4 b group-hover:bg-teal-500 group-hover:border-teal-500 group-hover:text-zinc-300">Read More</button>
    </div>
  );
}

export default Component1;
