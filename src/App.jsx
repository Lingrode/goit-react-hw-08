import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";

import { fetchContacts } from "./redux/contactsOps";

import style from "./App.module.css";
import { selectContacts, selectError } from "./redux/slices/selectors";

const App = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectContacts);
  const isError = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={style.container}>
      <h1 className={style.header}>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList contacts={items} />
      {isError && <h2>Something went wrong!</h2>}
    </div>
  );
};

export default App;
