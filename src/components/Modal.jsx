import { useEffect } from "react";
import PropTypes from "prop-types";

const Modal = ({ isOpen, close, handleDelete }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  return (
    <div
      className={`${
        isOpen ? "block" : "hidden"
      } bg-black/50 p-5 fixed inset-0 flex items-center justify-center`}
    >
      <div className="bg-white p-16 rounded-lg shadow-lg ">
        <p className="mb-6 text-2xl">
          Are you sure you want to delete the contact?
        </p>
        <div className="flex gap-9 justify-center  ">
          <button
            className="cursor-pointer px-6 py-2 text-white bg-red-500 hover:bg-red-600 transition-colors rounded-lg"
            onClick={handleDelete}
          >
            Yes
          </button>
          <button
            className="cursor-pointer px-6 py-2 text-black bg-gray-300 hover:bg-gray-400/70 transition-colors rounded-lg"
            onClick={close}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool,
  close: PropTypes.func,
  handleDelete: PropTypes.func,
};

export default Modal;
