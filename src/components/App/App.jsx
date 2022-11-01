import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import Notiflix from 'notiflix';
import ContactForm from '../ContactForm/ContactForm';
import Filter from '../Filter/Filter';
import ContactList from 'components/ContactList/ContactList';
import Section from '../Section/Section';

const App = () => {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem('contacts')) ?? [];
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleSubmit = ({ name, number }) => {
    const checkNameList = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (checkNameList) {
      Notiflix.Report.warning(`${name} is already in contacts`);
      return;
    }

    const contact = { id: nanoid(4), name: name, number: number };
    setContacts(prevState => [contact, ...prevState]);
  };

  const onDeleteContact = contactId => {
    setContacts(prevState => prevState.filter(contact => contact.id !== contactId));
  };

  const onFilterChange = e => {
    setFilter(e.target.value);
  };

  const onFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLocaleLowerCase())
    );
  };

    return (
      <>
        <Section title="Phonebook">
          <ContactForm onFormSubmit={handleSubmit} />
        </Section>

        <Section title="Contacts">
          {' '}
          <Filter onChange={onFilterChange} value={filter} />
          <ContactList
            contacts={onFilteredContacts()}
            onDeleteContact={onDeleteContact}
          />
        </Section>
      </>
    );
}

export default App;


// class App extends Component {
//   state = {
//     contacts: [
//       { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//       { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//       { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//       { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//     ],
//     filter: '',
//   };

//   componentDidMount() {
//     const contacts = JSON.parse(localStorage.getItem('contacts'));
//     if (contacts) {
//       this.setState({ contacts: contacts });
//     }
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (this.state.contacts !== prevState.contact) {
//       localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//     }
//   }

//   handleSubmit = ({ name, number }) => {
//     // e.preventDefault();
//     // const { name, number } = e.target.elements;

//     const checkNameList = this.state.contacts.some(
//       contact => contact.name.toLowerCase() === name.toLowerCase()
//     );

//     if (checkNameList) {
//       Notiflix.Notify.warning(`${name} is already in contacts`);
//       return;
//     }

//     const contact = { id: nanoid(4), name: name, number: number };
//     this.setState(prevState => ({
//       contacts: [contact, ...prevState.contacts],
//     }));
//   };

//   onDeleteContact = contactId => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(contact => contact.id !== contactId),
//     }));
//   };

//   onFilterChange = e => {
//     this.setState({ filter: e.target.value });
//   };

//   onFilteredContacts = () => {
//     const contacts = this.state.contacts;
//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(this.state.filter)
//     );
//   };

//   render() {
//     return (
//       <>
//         <Section title="Phonebook">
//           <ContactForm onFormSubmit={this.handleSubmit} />
//         </Section>

//         <Section title="Contacts">
//           {' '}
//           <Filter onChange={this.onFilterChange} value={this.state.filter} />
//           <ContactList
//             contacts={this.onFilteredContacts()}
//             onDeleteContact={this.onDeleteContact}
//           />
//         </Section>
//       </>
//     );
//   }
// }

// export default App;
