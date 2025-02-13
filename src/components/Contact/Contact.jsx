import { useDispatch } from "react-redux";
import { FaUser, FaPhoneAlt } from "react-icons/fa";
import PropTypes from "prop-types";
import { Toaster } from "react-hot-toast";

import Modal from "../Modal";

import { deleteContact } from "../../redux/contacts/operations";
import { setCurrentContact } from "../../redux/contacts/slice";
import useToggle from "../../hooks/useToggle";

import style from "./Contact.module.css";

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();
  const { isOpen, open, close } = useToggle();

  const handleDelete = () => {
    dispatch(deleteContact(id));
    close();
  };

  return (
    <div className="border-2 border-solid bg-base-200 rounded-xl p-4 text-base-content shadow-lg">
      <div className="flex flex-col ">
        <div className="flex flex-col gap-2.5 mb-5">
          <div className={style.name}>
            <FaUser />
            <p>{name}</p>
          </div>
          <div className={style.number}>
            <FaPhoneAlt />
            <p>{number}</p>
          </div>
        </div>
        <div className="flex gap-6 self-end">
          <button className="btn btn-outline btn-error" onClick={open}>
            Delete
          </button>
          <button
            className="btn btn-outline"
            onClick={() => dispatch(setCurrentContact(id))}
          >
            Edit
          </button>
        </div>
      </div>
      <Modal isOpen={isOpen} close={close} handleDelete={handleDelete} />
      <Toaster
        toastOptions={{
          duration: 6000,
          style: {
            fontSize: 18,
          },
        }}
      />
    </div>
  );
};

Contact.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  id: PropTypes.string,
};

export default Contact;
