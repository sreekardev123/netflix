// import React from 'react'
// import Layout from '../Layout/Layout'

// function WatchPage() {
//   return (
//     <Layout>
//         <h1>WatchPage</h1>
//     </Layout>
//   )
// }

// export default WatchPage


import React from "react";
import { Link } from "react-router-dom";
import Layout from "../Layout/Layout";
import { BiArrowBack } from "react-icons/bi";
import { FaCloudDownloadAlt } from "react-icons/fa";

function WatchPage() {
  const movieName = "Sample Movie"; // Replace with dynamic movie data
  const trailerUrl = "https://www.youtube.com/embed/dQw4w9WgXcQ"; // Replace with your desired YouTube video link

  return (
    <Layout>
      <div className="container mx-auto bg-main text-white p-6">
        {/* Header Section */}
        <div className="flex items-center justify-between bg-subMain p-4 rounded-md">
          <Link
            to="/"
            className="flex items-center gap-3 text-white text-sm font-medium"
          >
            <BiArrowBack className="text-lg" />
            Back
          </Link>
          <h2 className="text-lg font-bold">{movieName}</h2>
          <button
            className="bg-white text-subMain px-4 py-2 rounded-md flex items-center gap-2 hover:bg-opacity-80 transition"
          >
            <FaCloudDownloadAlt />
            Download
          </button>
        </div>

        {/* Trailer Section */}
        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-4">Trailer</h3>
          <div className="w-full h-80 bg-dry rounded-md overflow-hidden">
            <iframe
              className="w-full h-full"
              src={trailerUrl}
              title="Movie Trailer"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default WatchPage;
