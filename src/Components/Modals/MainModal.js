import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment, useRef } from "react";
import { IoClose } from "react-icons/io5";

function MainModal({ modalOpen, setModalOpen, children }) {
  const cancelButtonRef = useRef(null);

  return (
    <Transition show={modalOpen} as={Fragment} appear>
      <Dialog
        as="div"
        className="fixed inset-0 z-50 overflow-y-auto"
        initialFocus={cancelButtonRef}
        onClose={() => setModalOpen(false)}
      >
        {/* Overlay */}
        <div className="fixed inset-0 bg-black bg-opacity-80" aria-hidden="true"></div>

        {/* Modal Wrapper */}
        <div className="flex items-center justify-center min-h-screen px-4 text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            {/* Modal Panel */}
            <Dialog.Panel className="relative w-full max-w-md bg-gray-900 text-white rounded-lg shadow-lg border border-gray-700">
              {/* Close Button */}
              <button
                ref={cancelButtonRef}
                onClick={() => setModalOpen(false)}
                type="button"
                className="absolute top-4 right-4 inline-flex items-center justify-center w-8 h-8 text-white bg-gray-800 rounded-full hover:bg-red-500"
                aria-label="Close Modal"
              >
                <IoClose className="w-5 h-5" />
              </button>

              {/* Modal Content */}
              <div className="p-6">{children}</div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}

export default MainModal;

