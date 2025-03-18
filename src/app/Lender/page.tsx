import React from "react";

function Page() {
  return (
    <div className="flex h-50 mt-18 bg-white p-3 overflow-hidden">
      <div className="bg-blue-950 flex p-2 rounded-lg shadow-md w-full h-40 gap-4">
        {/* Left Container (30%) */}
        <div className="bg-white h-full w-1/5 flex items-center justify-center">
          hello
        </div>

        {/* Right Container (70%) */}
        <div className="bg-white h-full w-4/5 flex">hello</div>
      </div>
    </div>
  );
}

export default Page;
