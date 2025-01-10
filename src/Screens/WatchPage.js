import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '../Layout/Layout';
import Movies from '../assets/Data/MoviesData';
import { BiArrowBack } from 'react-icons/bi';
import { FaCloudDownloadAlt, FaHeart, FaPlay } from 'react-icons/fa';


function WatchPage() {
  const { id } = useParams();
  const movie = Movies.find((movie) => movie.name === id); // Assuming Movies is used
  const [play, setPlay] = useState(false);

  return (
    <Layout>
      <div className="container mx-auto bg-dry p-6 mb-12">
        <div className="flex flex-wrap mb-6 gap-2 bg-main rounded border border-gray-800 p-4">
          {/* Back Button */}
          <Link
            to={`/movie/${movie?.name}`}
            className="md:text-xl text-sm flex gap-3 items-center font-bold text-dryGray"
          >
            <BiArrowBack /> Movies {/* Display only movie name */}
          </Link>

          {/* Buttons */}
          <div className="ml-auto flex items-center gap-4">
            {/* Heart Button */}
            <button className="bg-white hover:text-subMain transitions bg-opacity-30 text-white rounded px-4 py-3 text-sm">
              <FaHeart />
            </button>

            {/* Download Button */}
            <button className="bg-subMain flex items-center gap-2 hover:text-main transitions text-white rounded px-8 font-medium py-3 text-sm">
              <FaCloudDownloadAlt /> Download
            </button>
          </div>
          

        </div>
        {/* watch video */}
        {
          play ?(
            <video controls autoPlay={play} className='w-full h-screen rounded'>
              <source src="Trailer.mp4" type='video/mp4' title={movie?.name}/>
            </video>
          ) :(
            <div className='w-full h-screen  rounded-lg overflow-hidden relative'>
              <div className='absolute top-0 left-0 bottom-0 right-0 bg-main bg-opacity-30 flex-colo '>
                <button onClick={()=> setPlay(true)} className='bg-white text-subMain flex-colo border border-subMain rounded-full w-20 h-20 font-medium text-xl '>
                  <FaPlay/>
                </button>
              </div>
              <img src={movie?.image ? `/images/movies/${movie.image}`
              :"images/netmirorimage.png"
              } alt={movie?.name}
              className='w-full h-full object-cover rounded-lg'
              />
            </div>
          )
        }
      </div>
    </Layout>
  );
}

export default WatchPage;


