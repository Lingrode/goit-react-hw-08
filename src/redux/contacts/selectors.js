import { createSelector } from "@reduxjs/toolkit";
import { selectFilterValue } from "../filter/selectors";

export const selectContacts = (state) => state.contacts.items;
export const selectLoading = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilterValue],
  (contacts, value) => {
    return contacts.filter(
      (item) =>
        item.name.toLowerCase().includes(value.toLowerCase()) ||
        item.number.trim().includes(value.trim())
    );
  }
);
