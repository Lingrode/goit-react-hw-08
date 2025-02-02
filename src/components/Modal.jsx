import { useEffect } from "react";
import PropTypes from "prop-types";

const Modal = ({ isOpen, close, handleDelete }) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        close();
      }
    };

    if (isOpen) {
      document.body.classList.add("overflow-hidden");
      document.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, close]);

  return (
    <div
      className={`${
        isOpen ? "visible opacity-100" : "invisible opacity-0"
      } bg-black/50 p-5 fixed inset-0 flex items-center justify-center transition-all cursor-pointer`}
      onClick={close}
    >
      <div
        className="bg-white p-16 rounded-lg shadow-lg cursor-auto"
        onClick={(event) => event.stopPropagation()}
      >
        <p className="mb-6 text-2xl">
          Are you sure you want to delete the contact?
        </p>
        <div className="flex gap-9 justify-center  ">
          <button
            className="btn btn-soft btn-lg btn-error"
            onClick={handleDelete}
          >
            Yes
          </button>
          <button className="btn btn-lg btn-soft" onClick={close}>
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
