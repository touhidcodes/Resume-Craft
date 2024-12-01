const ReusmeLoading = ({ children }) => {
  return (
    <>
      <div className="animate-pulse  dark:bg-gray-300">
        <div className="flex h-screen bg-gray-100">
          {/* Sidebar */}
          <aside className="w-64 bg-white shadow-md">
            <div className="p-6">
              <h1 className="text-2xl font-bold bg-gray-100 w-[180px] rounded   h-[30px]"></h1>
            </div>
            <nav className="mt-6">
              <ul className="space-y-2 px-2">
                <li>
                  <a
                    href="#"
                    className="flex items-center px-4 py-5  bg-gray-100 rounded-md"
                  ></a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center px-4 py-5 text-gray-600 bg-gray-100 rounded-md"
                  ></a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center px-4 py-5 text-gray-600 bg-gray-100 rounded-md"
                  ></a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center px-4 py-5 text-gray-600 bg-gray-100 rounded-md"
                  ></a>
                </li>
              </ul>
            </nav>
          </aside>

          <div className="flex-1 flex flex-col">
            {/* Top Bar */}
            <header className="bg-white">
              <div className="flex justify-between items-center px-6 py-4">
                <h2 className="text-lg font-semibold w-[150px] h-[30px] bg-gray-100 text-gray-800"></h2>
                <div>
                  <button className="px-10 py-5 bg-gray-100 text-white rounded-md "></button>
                </div>
              </div>
            </header>

            {/* Content Area */}
            <main className="flex-1 p-6 overflow-y-auto ">
              <div className="min-h-[590px] max-w-[750px] mx-auto py-[30px] px-[50px] rounded-[9px] border my-[20px] bg-slate-50">
                <div className="font-roboto  cursor-pointer relative group duration-100 ease-in-out transition-all mb-10">
                  <div className="hidden w-[40px] h-[40px] bg-[#FFFF] shadow-sm justify-center items-center rounded-[10px] absolute  top-1 right-1 duration-100 ease-in-out transition-all"></div>

                  <h1 className="text-[20px] leading-[30px] font-semibold  w-[200px] h-[20px] mb-2 bg-gray-100 rounded-[24px]">
                    {" "}
                  </h1>
                  <div className="w-[100%] h-[2px] bg-gray-100 mb-1"></div>
                  <div className="flex gap-x-1  text-[#6E6E6E] text-[13px] bg-gray-100 w-[500px] h-[20px] rounded-[24px]"></div>
                </div>
                <div className="font-roboto  cursor-pointer relative group duration-100 ease-in-out transition-all mb-5">
                  <div className="hidden w-[40px] h-[40px] bg-[#FFFF] shadow-sm justify-center items-center rounded-[10px] absolute  top-1 right-1 duration-100 ease-in-out transition-all"></div>

                  <h1 className="text-[20px] leading-[30px] font-semibold  w-[200px] h-[20px] mb-2 bg-gray-100 rounded-[24px]">
                    {" "}
                  </h1>
                  <div className="w-[100%] h-[2px] bg-gray-100 mb-1"></div>
                  <div className="flex gap-x-1  text-[#6E6E6E] text-[13px] bg-gray-100 w-[500px] h-[20px] rounded-[24px]"></div>
                </div>
                <div className="font-roboto  cursor-pointer relative group duration-100 ease-in-out transition-all mb-10">
                  <div className="hidden w-[40px] h-[40px] bg-[#FFFF] shadow-sm justify-center items-center rounded-[10px] absolute  top-1 right-1 duration-100 ease-in-out transition-all"></div>

                  <h1 className="text-[20px] leading-[30px] font-semibold  w-[200px] h-[20px] mb-2 bg-gray-100 rounded-[24px]">
                    {" "}
                  </h1>
                  <div className="w-[100%] h-[2px] bg-gray-100 mb-1"></div>
                  <div className="flex gap-x-1  text-[#6E6E6E] text-[13px] bg-gray-100 w-[500px] h-[20px] rounded-[24px]"></div>
                </div>
                <div className="font-roboto  cursor-pointer relative group duration-100 ease-in-out transition-all mb-10">
                  <div className="hidden w-[40px] h-[40px] bg-[#FFFF] shadow-sm justify-center items-center rounded-[10px] absolute  top-1 right-1 duration-100 ease-in-out transition-all"></div>

                  <h1 className="text-[20px] leading-[30px] font-semibold  w-[200px] h-[20px] mb-2 bg-gray-100 rounded-[24px]">
                    {" "}
                  </h1>
                  <div className="w-[100%] h-[2px] bg-gray-100 mb-1"></div>
                  <div className="flex gap-x-1  text-[#6E6E6E] text-[13px] bg-gray-100 w-[500px] h-[20px] rounded-[24px]"></div>
                </div>
                <div className="font-roboto  cursor-pointer relative group duration-100 ease-in-out transition-all mb-10">
                  <div className="hidden w-[40px] h-[40px] bg-[#FFFF] shadow-sm justify-center items-center rounded-[10px] absolute  top-1 right-1 duration-100 ease-in-out transition-all"></div>

                  <h1 className="text-[20px] leading-[30px] font-semibold  w-[200px] h-[20px] mb-2 bg-gray-100 rounded-[24px]">
                    {" "}
                  </h1>
                  <div className="w-[100%] h-[2px] bg-gray-100 mb-1"></div>
                  <div className="flex gap-x-1  text-[#6E6E6E] text-[13px] bg-gray-100 w-[500px] h-[20px] rounded-[24px]"></div>
                </div>
                <div className="font-roboto  cursor-pointer relative group duration-100 ease-in-out transition-all mb-10">
                  <div className="hidden w-[40px] h-[40px] bg-[#FFFF] shadow-sm justify-center items-center rounded-[10px] absolute  top-1 right-1 duration-100 ease-in-out transition-all"></div>

                  <h1 className="text-[20px] leading-[30px] font-semibold  w-[200px] h-[20px] mb-2 bg-gray-100 rounded-[24px]">
                    {" "}
                  </h1>
                  <div className="w-[100%] h-[2px] bg-gray-100 mb-1"></div>
                  <div className="flex gap-x-1  text-[#6E6E6E] text-[13px] bg-gray-100 w-[500px] h-[20px] rounded-[24px]"></div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReusmeLoading;
