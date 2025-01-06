import React from "react";
import { FiUser } from "react-icons/fi";
import netmirorimage from "../../assets/netmirorimage.png"

function Promos() {
  return (
    <>
      <div className="my-20 py-10 px-8 bg-dry">
        <div className="lg:grid lg:grid-cols-2 lg:gap-10 items-center">
          <div className="flex lg:gap-10 gap-6 flex-col">
            <h1 className="xl:text-3xl text-xl capitalize font-sans font-medium leading xl:leading-relaxed ">
              Download Your Movies Watch offline. <br /> Enjoy on Your Mobile
            </h1>
            <p className="text-text text-sm xl:text-base leading-6 xl:leading-8">
              NetMirror is a real-time screen-sharing and collaboration tool
              designed for seamless remote communication. It allows users to
              share their screens instantly, making it ideal for online
              meetings, presentations, and troubleshooting. With its low-latency
              streaming, it ensures smooth and uninterrupted performance. The
              platform prioritizes user privacy by offering encrypted
              connections. NetMirror is easy to use, compatible with multiple
              devices, and enhances productivity for remote teams.
            </p>
            <div className="flex gap-4 md:text-lg text-sm">
              <div className="flex-colo bg-black text-subMain px-6 py-3 rounded font-bold">
                HD 4K
              </div>
              <div className="flex-rows gap-4 bg-black text-subMain px-6 py-3 rounded font-bold">
                <FiUser/> 2K
              </div>
            </div>
          </div>
          <div>
           <img src={netmirorimage} alt="mobilenetflix" className="object-contain"/>
          </div>
        </div>
         </div>
    </>
  );
}

export default Promos;
