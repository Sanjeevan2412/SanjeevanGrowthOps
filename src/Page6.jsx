import { useState } from "react";

function Page6() {
  const [state, setState] = useState({
    Name: "",
    Email: "",
    Occupation: "",
    Contact: "",
    Message: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setState((prevProps) => ({
      ...prevProps,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(state);
  };

  return (
    <div className="min-h-fit flex justify-center items-center p-20 max-sm:px-5">
      <div className="flex flex-col w-full max-w-screen-lg">
        <p className="text-2xl max-sm:text-xl text-teal-500 w-fit">
          Register Your Interest
        </p>
        <form
          onSubmit={handleSubmit}
          className="p-8 border-2 border-zinc-300 rounded max-sm:mt-5 mt-10 text-sm "
        >
          <div className="grid grid-rows-1 md:grid-cols-2 md:grid-rows-2 gap-8 group">
            <div className="flex rounded border-2 border-zinc-200 py-2 px-4">
              <input
                required
                type="text"
                name="Name"
                id="Name"
                value={state.Name}
                onChange={handleInputChange}
                className="block flex-1 text-zinc-400 placeholder:text-zinc-400 outline-none"
                placeholder="Name"
              />
            </div>
            <div className="flex rounded border-2 border-zinc-200 py-2 px-4 relative">
              <div className="flex h-fit w-fit bg-zinc-800 group-hover:bg-teal-500 items-center justify-center rounded hover:bg-teal-500 absolute right-0 top-0 mr-4 mt-2 pointer-events-none">
                <svg viewBox="0 0 20 21" className="w-2.5 m-1">
                  <path
                    d="M11.5023 19.4951C10.8346 20.7959 9.16539 20.7959 8.4977 19.4951L0.234995 3.3975C-0.432698 2.0967 0.401919 0.470703 1.73731 0.470703L18.2627 0.470702C19.5981 0.470702 20.4327 2.0967 19.765 3.3975L11.5023 19.4951Z"
                    className="fill-zinc-200"
                  />
                </svg>
              </div>
              <select
                required
                name="Occupation"
                id="Occupation"
                placeholder="Name"
                value={state.Occupation}
                onChange={handleInputChange}
                className="text-zinc-400 outline-none w-full pointer-events-auto"
              >
                <option disabled selected hidden>
                  Occupation
                </option>
                <option value="Occupation1">Occupation1</option>
                <option value="Occupation2">Occupation2</option>
                <option value="Occupation3">Occupation3</option>
              </select>
            </div>
            <div className="flex rounded border-2 border-zinc-200 py-2 px-4">
              <input
                required
                type="email"
                name="Email"
                id="Email"
                value={state.Email}
                onChange={handleInputChange}
                className="block flex-1 text-zinc-400 placeholder:text-zinc-400 outline-none"
                placeholder="Email Address"
              />
            </div>
            <div className="flex rounded border-2 border-zinc-200 py-2 px-4">
              <input
                required
                type="number"
                name="Contact"
                id="Contact"
                value={state.Contact}
                onChange={handleInputChange}
                className="block flex-1 text-zinc-400 placeholder:text-zinc-400 outline-none"
                placeholder="Contact No"
              />
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div className="flex rounded border-2 border-zinc-200 py-2 px-4">
              <textarea
                required
                name="Message"
                id="Message"
                value={state.Message}
                onChange={handleInputChange}
                className="block flex-1 text-zinc-400 placeholder:text-zinc-400 outline-none max-h-72"
                placeholder="Message..."
                maxLength="1000"
              ></textarea>
            </div>
          </div>
          <button
            type="submit"
            className="text-base text-center text-zinc-200 bg-teal-500 uppercase p-2 rounded mt-7 border-2 border-teal-500 hover:border-zinc-400 hover:bg-zinc-800 min-w-fit w-1/4 max-w-xs "
          >
            SUBMIT MESSAGE
          </button>
        </form>
      </div>
    </div>
  );
}

export default Page6;
