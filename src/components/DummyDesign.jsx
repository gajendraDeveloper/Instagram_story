const DummyDesign = () => {
  const uiData = [
    {
      id: "1",
      label: "Hello User",
      desc: "welcome to the first story page of your account",
    },
    {
      id: "2",
      label: "Hello User",
      desc: "welcome to the first story page of your account",
    },
    {
      id: "3",
      label: "Hello User",
      desc: "welcome to the first story page of your account",
    },
    {
      id: "4",
      label: "Hello User",
      desc: "welcome to the first story page of your account",
    },
    {
      id: "5",
      label: "Hello User",
      desc: "welcome to the first story page of your account",
    },
    {
      id: "6",
      label: "Hello User",
      desc: "welcome to the first story page of your account",
    },
    {
      id: "7",
      label: "Hello User",
      desc: "welcome to the first story page of your account",
    },
    {
      id: "8",
      label: "Hello User",
      desc: "welcome to the first story page of your account",
    },
  ];
  return (
    <div className="p-2 bg-blue-100">
      <div className="flex flex-col  ">
        <h1 className="text-indigo-500 italic text-5xl font-semibold text-center">
          Welcome to Instagram
        </h1>

        <div>
          <h3 className="text-xl font-semibold italic underline text-orange-500 px-4">
            Hot Content
          </h3>
          <div className="space-y-2 ">
            {uiData.map((item) => (
              <div key={item.id} className=" hover:bg-green-400 px-4 ">
                <p>{item.label}</p>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DummyDesign;
