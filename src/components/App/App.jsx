import { Section } from './App.styles';
import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from '../ContactForm/ContactForm ';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';
import { useDispatch } from 'react-redux';
import { deleteAction, filterActon } from 'redux/slice';

const LOCAL_KEY = 'Users-key';

export const App = () => {
  const dispatch = useDispatch();
  const [filter, setFilter] = useState('');

  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem(LOCAL_KEY)) ?? [];
  });

  useEffect(() => {
    localStorage.setItem(LOCAL_KEY, JSON.stringify(contacts));
  }, [contacts]);

  function formSubmitHandler(data) {
    const newUser = {
      id: nanoid(),
      ...data,
    };
    if (contacts.find(contact => contact.name === data.name)) {
      alert(`${data.name} is already in contacts!`);
      return;
    }
    setContacts(prevContacts => [newUser, ...prevContacts]);
  }

  const filterUsers = event => {
    setFilter(event.target.value);
    dispatch(filterActon(filter));
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

  const deleteUsers = userId => {
    setContacts(prevContacts =>
      prevContacts.filter(user => user.id !== userId)
    );
    dispatch(deleteAction(userId));
  };

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
