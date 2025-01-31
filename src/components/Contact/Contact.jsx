import { useDispatch } from "react-redux";
import { FaUser, FaPhoneAlt } from "react-icons/fa";
import PropTypes from "prop-types";
import { Toaster } from "react-hot-toast";

import { deleteContact } from "../../redux/contacts/operations";
import { setCurrentContact } from "../../redux/contacts/slice";

import style from "./Contact.module.css";

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={style.card}>
      <div className={style.wrapper}>
        <div className={style.name}>
          <FaUser />
          <p>{name}</p>
        </div>
        <div className={style.number}>
          <FaPhoneAlt />
          <p>{number}</p>
        </div>
      </div>
      <button className={style.btn} onClick={handleDelete}>
        Delete
      </button>
      <Toaster
        toastOptions={{
          duration: 6000,
          style: {
            fontSize: 18,
          },
        }}
      />
      <button
        className={style.btn}
        onClick={() => dispatch(setCurrentContact(id))}
      >
        Edit
      </button>
    </div>
  );
};

Contact.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  id: PropTypes.string,
};

export default Contact;
