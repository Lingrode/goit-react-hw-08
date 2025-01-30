import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCurrentContact,
  selectError,
  selectLoading,
} from "../redux/contacts/selectors";
import ContactList from "../components/ContactList/ContactList";
import SearchBox from "../components/SearchBox/SearchBox";
import ContactForm from "../components/ContactForm/ContactForm";
import { fetchContacts } from "../redux/contacts/operations";
import EditForm from "../components/EditForm/EditForm";

const Contacts = () => {
  const dispatch = useDispatch();
  const isError = useSelector(selectError);
  const isLoading = useSelector(selectLoading);
  const isEdit = useSelector(selectCurrentContact);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      {isEdit ? <EditForm /> : <ContactForm />}
      <SearchBox />
      <div>{isLoading && "Request in progress..."}</div>
      <ContactList />
      {isError && <h2>Something went wrong!</h2>}
    </div>
  );
};

export default Contacts;
