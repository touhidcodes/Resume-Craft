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

          {/* Main Content */}
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
            <main className="flex-1 p-6 overflow-y-auto">{children}</main>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReusmeLoading;
