import React from "react";
import Image from "next/image";

const Dashboard = () => {
  return (
    <section className="flex justify-center items-center h-full overflow-y-hidden">
      <div className="container grid grid-cols-2 gap-4">
        {/* Column 1 */}
        <div className="col-span-1 mt-52">
          {/* Text with large fonts */}
          <h1 className="text-5xl font-bold mb-4">Hello,</h1>
          {/* Additional content */}
          <p className="mb-4">Want something to create or work on together?</p>
          <button
            type="button"
            className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 space-x-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
          >
            Continue to the board
          </button>
        </div>

        {/* Column 2 */}
        <div className="col-span-1">
          {/* Image or other content */}
          <div className="mb-4">
            <Image src="/assets/image.jpg" alt="image" height={400} width={400} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
