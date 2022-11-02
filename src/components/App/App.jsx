// import { useEffect } from 'react';
import ContactForm from '../ContactForm/ContactForm';
import Filter from '../Filter/Filter';
import ContactList from 'components/ContactList/ContactList';
import Section from '../Section/Section';

const App = () => {

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

    return (
      <>
        <Section title="Phonebook">
          <ContactForm />
        </Section>

        <Section title="Contacts">
          {' '}
          <Filter />
          <ContactList />
        </Section>
      </>
    );
}

export default App;