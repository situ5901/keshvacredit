import fs from "fs";
import path from "path";
import Link from "next/link";

export default function DirectLenderPage() {
  const dirPath = path.join(process.cwd(), "src", "app", "directlender");
  const items = fs.readdirSync(dirPath, { withFileTypes: true });

  const folders = items.filter((item) => item.isDirectory()).map((item) => item.name);

  return (
    <div className="min-h-screen p-6 mt-16 max-w-5xl mx-auto">
     <h1 className="text-3xl font-extrabold mb-2">Direct Lender</h1>
<p className=" text-base ">
  Explore our trusted network of direct lenders offering quick and hassle-free loans tailored to your financial needs.
</p>

      <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {folders.map((folder) => (
          <div key={folder} className="mt-5 shadow-md p-4 bg-gray-600 rounded-lg">
            <Link
              href={`/directlender/${folder}`}
              className="block bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-6 text-center cursor-pointer
                active:scale-95 active:duration-150 active:ease-in-out
                transform-gpu"
            >
              <h2 className="text-xl font-semibold text-gray-800">{folder} </h2>
              <span className="animate-blink text-xs mt-0.1 color-black font-bold">
                Click to Apply
              </span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
