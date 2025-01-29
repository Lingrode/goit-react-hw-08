import { configureStore } from "@reduxjs/toolkit";
import contactsSlice from "./slices/contactsSlice";
import filterSlice from "./slices/filterSlice";

const store = configureStore({
  reducer: {
    contacts: contactsSlice,
    filter: filterSlice,
  },
});

export default store;
