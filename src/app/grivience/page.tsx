"use client";
import React from "react";
import Image from "next/image";

const lenders = [
  {
    name: "ramfin corporation",
    image: "https://www.ramfincorp.com/images/logo.png",
    GrievanceOfficername: "Saourav Kumar",
    email: "info@ramfincorp.com",
  },
  {
    name: "zype",
    image:
      "https://www.getzype.com/wp-content/uploads/2024/08/Group-852775729.webp",
    GrievanceOfficername: "vikas",
    email: "support@getzype.com",
  },
  {
    name: "mPokket",
    image: "https://cdn.prod.website-files.com/64ea130f10713e77f6320da4/67ac2defec09b58763dac780_Logo_Full_mPokket_2312_R01.svg",
    GrievanceOfficername: "Ridham",
    email: "support@mpokket.com",
  },
  {
    name: "olyv",
    image:
      "https://framerusercontent.com/images/csl8apTjCrYTK5Qi20a4osUIHw.png?scale-down-to=512",
    GrievanceOfficername: "Ravi kumar",
    email: "grievance@smartcoin.co.in",
  },
];

function Page() {
  return (
    <div className="min-h-screen  p-6 py-20">
      <h1 className="text-5xl font-extrabold text-center mb-16 ">
        Lender Grievance
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-7xl mx-auto">
        {lenders.map((lender, idx) => (
          <div
            key={idx}
            className="group bg-white/30 backdrop-blur-md border border-white/40 shadow-lg hover:shadow-2xl rounded-3xl overflow-hidden transition-all duration-300 hover:scale-[1.02]"
          >
            {/* Top Section */}
            <div className="bg-gradient-to-tr from-[#beabd0] to-[#4f46e5] text-white flex flex-col items-center justify-center text-center p-8">

              <div className="w-[160px] h-[60px] flex items-center justify-center  overflow-hidden">
                <Image
                  src={lender.image}
                  alt={lender.name}
                  width={160}
                  height={130}
                  className="object-contain"
                />
              </div>
              {/* <h2 className="text-xl font-semibold tracking-wide">
                {lender.name}
              </h2> */}
            </div>

            {/* Bottom Section */}
            <div className="p-6 bg-white space-y-5">
              <div className="flex items-start gap-4">
                <Image
                  src="https://cdn-icons-png.flaticon.com/128/3135/3135715.png"
                  alt="Officer"
                  width={24}
                  height={24}
                />
                <div>
                  <p className="font-medium text-gray-700">Grievance Officer :</p>
                  <p className="text-gray-900">{lender.GrievanceOfficername}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Image
                  src="https://cdn-icons-png.flaticon.com/128/561/561127.png"
                  alt="Email"
                  width={24}
                  height={24}
                />
                <div>
                  <p className="font-medium text-gray-700">Email :</p>
                  <a
                    href={`mailto:${lender.email}`}
                    className="text-blue-600 hover:underline break-words"
                  >
                    {lender.email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Page;
