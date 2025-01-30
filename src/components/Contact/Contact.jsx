import { useDispatch } from "react-redux";
import { FaUser, FaPhoneAlt } from "react-icons/fa";
import PropTypes from "prop-types";

import { deleteContact } from "../../redux/contacts/operations";

import style from "./Contact.module.css";
import { setCurrentContact } from "../../redux/contacts/slice";

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();

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
      <button className={style.btn} onClick={() => dispatch(deleteContact(id))}>
        Delete
      </button>
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
