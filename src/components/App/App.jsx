import { useDispatch, useSelector } from 'react-redux';
import { addContacts, deleteContacts, filterContacts } from 'redux/slice';
import { selectContacts, selectFilter } from 'redux/selector';
import { nanoid } from 'nanoid';

import { ContactForm } from '../ContactForm/ContactForm ';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';

import { Section } from './App.styles';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const filterUsers = event => {
    dispatch(filterContacts(event.target.value));
  };

  const deleteUsers = userId => {
    dispatch(deleteContacts(userId));
  };

  const verification = () => {
    if (!filter) {
      return contacts;
    } else {
      return contacts.filter(
        user =>
          user.name.toLowerCase().includes(filter.toLowerCase()) ??
          user.number.includes(filter)
      );
    }
  };

  function formSubmitHandler(data) {
    if (contacts.find(contact => contact.name === data.name)) {
      alert(`${data.name} is already in contacts!`);
      return;
    }
    const newUser = {
      id: nanoid(),
      ...data,
    };
    dispatch(addContacts(newUser));
  }

  return (
    <>
      <Section>
        <h1>Phonebook</h1>
        <ContactForm onContactSubmit={formSubmitHandler} />
        <h2>Contacts</h2>
        <Filter filter={filter} click={filterUsers} />
        <ContactList contacts={verification()} deleteUsers={deleteUsers} />
      </Section>
    </>
  );
};
