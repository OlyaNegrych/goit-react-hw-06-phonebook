
export const getContacts = state => state.contacts;

export const getFilter = state => state.filter;

export const getVisibleContacts = (contacts, filter) => {
    const normalizedContacts = filter.toLoverCase();
    return contacts.filter(contact =>
      contact.name.toLoverCase().includes(normalizedContacts)
    );
}
