import React from "react";
import { Link, useLocation } from "react-router-dom";
import Layout from "../Layout/Layout";
import { BiArrowBack } from "react-icons/bi";
import { FaCloudDownloadAlt, FaHeart } from "react-icons/fa";
import Movies from "../assets/Data/MoviesData";

function WatchPage() {
  const location = useLocation();
  const { movieId } = location.state || {}; // Get movieId from passed state
  const movie = Movies.find((movie) => movie.id === movieId);

  // Function to convert a normal YouTube URL into an embeddable format
  const getEmbedUrl = (url) => {
    const videoId = url.split("v=")[1]?.split("&")[0]; // Extracts the video ID
    return `https://www.youtube.com/embed/${videoId}?autoplay=1&controls=1`;
  };

  return (
    <Layout>
      <div className="container mx-auto bg-main text-white p-6">
        {/* Header Section */}
        <div className="flex items-center justify-between bg-main border border-gray-800 p-4 rounded-md mb-6">
          <Link
            to="/home"
            className="flex items-center gap-3 text-white text-sm font-medium"
          >
            <BiArrowBack className="text-lg" />
            Back
          </Link>
          <h2 className="text-lg font-bold border-b-2 border-gray-700">
            {movie?.name || "Unknown Movie"}
          </h2>
          <div className="flex gap-2">
            <button className="border border-gray-700 bg-subMain text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-opacity-80">
              <FaHeart />
              Like
            </button>
            <button className="border border-gray-700 bg-subMain px-4 py-2 rounded-md flex items-center gap-2 hover:text-dryGray transitions">
              <FaCloudDownloadAlt />
              Download
            </button>
          </div>
        </div>

        {/* Trailer Section */}
        <div className="w-full h-[500px] bg-dry rounded-md border border-gray-700 relative">
          {movie.trailerurl ? (
            <iframe
              className="w-full h-full rounded-md"
              src={getEmbedUrl(movie.trailerurl)} // Convert URL to embeddable format
              title={movie.name}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ) : (
            <p className="text-center p-6 text-white">Trailer not available</p>
          )}
        </div>
      </div>
    </Layout>
  );
}

export default WatchPage;
