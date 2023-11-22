import Component4 from "./components/Component4/Component4";

function Page5() {
  return (
    <div className="min-h-fit xl:min-h-[50vh] flex flex-col bg-zinc-800 justify-center items-center p-20 max-sm:px-5 ">
      <div className="flex flex-col w-fit xl:scale-110">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 ">
          <Component4
            Name="Alexis Simpson"
            Position="Ceo & Developer"
            Email="a.simpson@unique.com"
            Number="+1 911 (77) 222-1111"
          />
          <Component4
            Name="Steven Cole"
            Position="User interface Designer"
            Email="s.cole@unique.com"
            Number="+1 911 (77) 222-1111"
          />
          <Component4
            Name="Frank Piener"
            Position="Sales Manager"
            Email="f.piener@unique.com"
            Number="+1 911 (77) 222-1111"
          />
          <Component4
            Name="Ashley Lennon"
            Position="IT Specialist"
            Email="a.lennon@unique.com"
            Number="+1 911 (77) 222-1111"
          />
        </div>
        <p className="text-base text-center text-zinc-200 bg-teal-500 uppercase p-2 rounded mt-7 border-2 border-teal-500 hover:border-zinc-400 hover:bg-zinc-800 ">
          VIEW ALL WORKS
        </p>
      </div>
    </div>
  );
}

export default Page5;
