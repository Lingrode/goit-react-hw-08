import { useSelector } from "react-redux";

import { selectContacts } from "../../redux/contacts/selectors";

import Contact from "../Contact/Contact";
import style from "./ContactList.module.css";

const ContactList = () => {
  const items = useSelector(selectContacts);

  return (
    <ul className={style.list}>
      {items.map(({ id, name, number }) => {
        return (
          <li className={style.item} key={id}>
            <Contact name={name} number={number} id={id} />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
