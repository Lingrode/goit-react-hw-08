import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectContacts, selectError } from "../redux/slices/selectors";
import ContactList from "../components/ContactList/ContactList";
import SearchBox from "../components/SearchBox/SearchBox";
import ContactForm from "../components/ContactForm/ContactForm";
import { fetchContacts } from "../redux/contactsOps";

const Contacts = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectContacts);
  const isError = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <ContactForm />
      <SearchBox />
      <ContactList contacts={items} />
      {isError && <h2>Something went wrong!</h2>}
    </div>
  );
};

export default Contacts;
