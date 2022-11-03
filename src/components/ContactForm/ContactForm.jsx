import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import Notiflix from 'notiflix';
import { addContact } from 'redux/contactsSlice';
import { Label, Input, AddBtn } from '../ContactForm/ContactForm.styled';

const validationSchema = Yup.object({
  name: Yup.string().required(),
  number: Yup.string().required(),
});

const initialValues = {
  name: '',
  number: '',
};

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts);

  const handleSubmit = ({ name, number }, { resetForm }) => {
        
    const checkNameInList = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (checkNameInList) {
      Notiflix.Report.warning(`${name} is already in contacts`);
      return resetForm();;
    }

    const contact = { id: nanoid(4), name, number };
    dispatch(addContact(contact));

    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form>
        <Label>
          Name
          <br />
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>
        <br />
        <Label>
          Number
          <br />
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Label>
        <br />
        <AddBtn type="submit">Add contact</AddBtn>
      </Form>
    </Formik>
  );
};

export default ContactForm;
