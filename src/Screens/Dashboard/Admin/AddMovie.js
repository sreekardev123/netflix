import React, { useEffect, useState } from "react";
import SideBar from "../SideBar";
import Message, { Input } from "../../../Components/UsedInputs";
import Uploder from "../../../Components/Uploder";
import save1 from "../../../assets/save1.jpg";
import save2 from "../../../assets/save2.jpg";
import { Select } from "@headlessui/react";
import CategoriesData from "../../../assets/Data/CategoriesData";
import UserData from "../../../assets/Data/UserData";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { ImUpload } from "react-icons/im";
import CastsModal from "../../../Components/Modals/CastsModal";


function AddMovie() {
   const [modalOpen, setModalOpen] = useState(false);
   const [cast, setCast] = useState(null)
  const [movieCategory, setMovieCategory] = useState(
    CategoriesData[0]?.title || ""
  );
  useEffect(() => {
    if (modalOpen === false ) {
    setCast()

    }
 
  
 }, [modalOpen])

  return (
    <SideBar>
      <CastsModal modalOpen={modalOpen} setModalOpen={setModalOpen} cast={cast}/>
      <div className="flex flex-col gap-6">
        <h2 className="text-xl font-bold">Create Movie</h2>
        <div className="w-full grid md:grid-cols-2 gap-6">
          <Input
            label="Movie Title"
            placeholder="Game of thrones"
            type="text"
            bg={true}
          />
          <Input label="Hours" placeholder="2hr" type="text" bg={true} />
        </div>
        <div className="w-full grid md:grid-cols-2 gap-6">
          <Input
            label="Language Used"
            placeholder="English"
            type="text"
            bg={true}
          />
          <Input
            label="Year of the Release"
            placeholder="2022"
            type="number"
            bg={true}
          />
        </div>
        {/* images */}
        <div className="w-full grid md:grid-cols-2 gap-6">
          {/*image without title  */}
          <div className="flex flex-col gap-2">
            <p className="text-border font-semibold text-sm">
              Image Without Title
            </p>
            <Uploder />
            <div className="w-32 h-32 p-2 bg-main border border-border rounded">
              <img
                src={save1}
                alt=""
                className="w-full h-full object-cover rounded"
              />
            </div>
          </div>
          {/* images withtitle */}
          <div className="flex flex-col gap-2">
            <p className="text-border font-semibold text-sm">
              Image With Title
            </p>
            <Uploder />
            <div className="w-32 h-32 p-2 bg-main border border-border rounded">
              <img
                src={save2}
                alt=""
                className="w-full h-full object-cover rounded"
              />
            </div>
          </div> 
        </div>
        {/* Description */}
        <Message
          label=" Movie Description"
          placeholder="Make it Short and Sweet"
        />
        {/* CATEGORY */}
        <div className="text-sm w-full">
          <label className="text-sm text-gray-400 mb-2 block">
            Movie Category
          </label>
          <select
            value={movieCategory}
            onChange={(e) => setMovieCategory(e.target.value)}
            className="w-full px-4 py-3 bg-gray-800 text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-subMain"
          >
            {CategoriesData.map((category, index) => (
              <option key={index} value={category.title}>
                {category.title}
              </option>
            ))}
          </select>
        </div>
        {/* movie video */}
        <div className="flex flex-col gap-2 w-full">
          <label className="text-border font-semibold text-sm">
            Movie video
          </label>
          <Uploder />
        </div>
        {/* casts */}
        <div className="w-full grid lg:grid-cols-2 gap-6 items-start">
          <button 
          onClick={() => setModalOpen(true)} 
          className="w-full py-4 ng-main border border-subMain border-dashed text-white rounded"
          >
            Add Cast
          </button>
          <div className="grid 2xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-4 grid-cols-2 gap-4 ">
            {UserData.map((user, i) => (
              <div
                key={i}
                className="p-2 italic text-xs text-text rounded flex-colo bg-main border border-border"
              >
                <img
                  src={`${user.image ? user.image : "user.jpg"}`}
                  alt={user.fullName}
                  className="w-full h-24 object-cover rounded mb-4"
                />
                <p>{user.fullName}</p>
                <div className="flex-rows mt-2 w-full gap-2">
                  <button className="w-6 h-6 flex-colo bg-dry border border-border text-subMain rounded">
                    <MdDelete />
                  </button>
                  <button
                  onClick={() => {
                    setCast(user);
                    setModalOpen(true)
                  }}
                   className="w-6 h-6 flex-colo bg-dry border border-border text-green-600  rounded">
                    <FaEdit />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* submit */}
        <button className="bg-subMain w-full flex-rows gap-6 font-medium  text-white py-4 rounded ">
        <ImUpload /> Publish Movie
        </button>
      </div>
    </SideBar>
  );
}

export default AddMovie;
