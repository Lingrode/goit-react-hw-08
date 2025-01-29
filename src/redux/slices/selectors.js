import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = (state) => state.contacts.items;
export const selectLoading = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;
export const selectFilter = (state) => state.filter.name;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, name) => {
    return contacts.filter((item) =>
      item.name.toLowerCase().includes(name.toLowerCase())
    );
  }
);
