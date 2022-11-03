import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {contacts: []},
  reducers: {
    addContact: {
      reducer(state, action) {
        state.contacts.push(action.payload);
      },
    },
    
    deleteContact(state, action) {
      const index = state.contacts.findIndex(contact => contact.id === action.payload.id);
      state.contacts.splice(index, 1);
    },
  },
});

export const contactsReducer = contactsSlice.reducer;

const persistConfig = {
  key: 'contacts',
  storage,
};

export const persistedContactsReduser = persistReducer(
  persistConfig,
  contactsReducer
);

export const { addContact, deleteContact } = contactsSlice.actions;

