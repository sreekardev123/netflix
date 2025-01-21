import React, { useState, useEffect } from "react";
import MainModal from "./MainModal";
import { Input } from "../UsedInputs";
import Uploder from "../Uploder";
import save1 from "../../assets/save1.jpg";

function CastsModal({ modalOpen, setModalOpen, cast, onSave }) {
  const [categoryName, setCategoryName] = useState("");
  const [image, setImage] = useState(save1); // Default image

  useEffect(() => {
    if (cast) {
      setCategoryName(cast.title || "");
      setImage(cast.image || save1); // Load cast image or default image
    } else {
      setCategoryName("");
      setImage(save1); // Reset to default
    }
  }, [cast]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSave) {
      onSave({ ...cast, title: categoryName, image });
    }
    setModalOpen(false); // Close modal after save
  };

  return (
    <MainModal modalOpen={modalOpen} setModalOpen={setModalOpen}>
      <div className="inline-block w-full max-w-md rounded-lg bg-gray-900 p-8">
        {/* Title */}
        <h2 className="text-2xl font-bold text-center text-white mb-6">
          {cast ? "Update Cast" : "Create Cast"}
        </h2>

        {/* Form */}
        <form className="flex flex-col gap-6 text-left" onSubmit={handleSubmit}>
          {/* Input Field */}
          <div>
            <label className="text-sm text-gray-400 mb-2 block">Cast Name</label>
            <Input
              label=""
              placeholder="Enter Cast Name"
              type="text"
              value={categoryName}
              onChange={(e) => setCategoryName(e.target.value)}
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
            />
          </div>

          {/* Image Uploader */}
          <div className="flex flex-col gap-2">
            <p className="text-border font-semibold text-sm">Cast Image</p>
            <Uploder onUpload={(uploadedImage) => setImage(uploadedImage)} />
            <div className="w-32 h-32 p-2 bg-main border border-border rounded">
              <img
                src={image}
                alt={categoryName || "Default Cast"}
                className="w-full h-full object-cover rounded"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full flex-rows gap-4 py-3 text-lg font-medium border-2 border-red-500 bg-subMain text-white rounded-lg hover:bg-gray-800 transition"
          >
            {cast ? "Update" : "Add"}
          </button>
        </form>
      </div>
    </MainModal>
  );
}

export default CastsModal;
