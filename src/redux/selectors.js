
export const getContacts = state => state.contacts.contacts;

export const getFilter = state => state.filter.filter;

export const getVisibleContacts = (contacts, filter) => {
  const normalizedFilter = filter.toLowerCase();
  
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
};
