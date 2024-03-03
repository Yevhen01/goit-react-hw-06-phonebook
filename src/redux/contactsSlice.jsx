import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { nanoid } from "nanoid";

const initialState = {
  contacts: [],
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,

  reducers: {
    addContact(state, { payload }) {
      const contact = {
        id: nanoid(),
        name: payload.name,
        number: payload.number,
      };

      state.contacts.push(contact);
    },

    deleteContact: {
      reducer(state, action) {
        state.contacts = state.contacts.filter((e) => e.id !== action.payload);
      },
    },
  },
});

const persistConfig = {
  key: "contacts",
  storage,
};

export const contactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);

export const { addContact, deleteContact } = contactsSlice.actions;
export const getContacts = (state) => state.contacts.contacts;
