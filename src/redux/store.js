import { configureStore } from "@reduxjs/toolkit";
import contactsSlice from "./slices/contactsSlice";
import filterSlice from "./slices/filterSlice";
import authSlice from "./auth/slice";

const store = configureStore({
  reducer: {
    contacts: contactsSlice,
    filter: filterSlice,
    auth: authSlice,
  },
});

export default store;
