import React, { useState, useEffect } from "react";
import MainModal from "./MainModal";
import { Input } from "../UsedInputs";

function CategoryModal({ modalOpen, setModalOpen, category, onSave }) {
  const [categoryName, setCategoryName] = useState("");

  useEffect(() => {
    if (category) {
      setCategoryName(category.title || "");
    } else {
      setCategoryName("");
    }
  }, [category]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSave) {
      onSave({ ...category, title: categoryName });
    }
    setModalOpen(false); // Close modal after save
  };

  return (
    <MainModal modalOpen={modalOpen} setModalOpen={setModalOpen}>
      <div className="inline-block w-full max-w-md rounded-lg bg-gray-900 p-8">
        {/* Title */}
        <h2 className="text-2xl font-bold text-center text-white mb-6">
          {category ? "Update" : "Create"}
        </h2>

        {/* Form */}
        <form className="flex flex-col gap-6 text-left" onSubmit={handleSubmit}>
          {/* Input Field */}
          <div>
            <label className="text-sm text-gray-400 mb-2 block">Category Name</label>
            <Input
              label=""
              placeholder="Enter category name"
              type="text"
              value={categoryName}
              onChange={(e) => setCategoryName(e.target.value)}
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full flex-rows  gap-4 py-3 text-lg font-medium border-2 border-red-500 bg-subMain text-white rounded-lg hover:bg-gray-800 transition"
          >
            {category ? "Update" : "Add"}
          </button>
        </form>
      </div>
    </MainModal>
  );
}

export default CategoryModal;
