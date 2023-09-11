import React from "react";
import Image from "next/image";

const Dashboard = () => {
  return (
    <section className="flex justify-center items-center h-screen overflow-y-hidden">
      <div className="container grid grid-cols-2 gap-4 ">
        {/* Column 1 */}
        <div className="col-span-1">
          {/* Text with large fonts */}
          <h1 className="text-4xl font-bold">Hello welcome to the project</h1>
          {/* Additional content */}
          <p>Your text content goes here.</p>
        </div>

        {/* Column 2 */}
        <div className="col-span-1">
          {/* Image or other content */}
          <Image src="/assets/image.jpg" alt="image" height={400} width={400} />
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
