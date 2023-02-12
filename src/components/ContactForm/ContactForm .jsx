import PropTypes from 'prop-types';
import { useState } from 'react';
import { FormStyled } from './ContactForm.styles';
import { useDispatch, useSelector } from 'react-redux';
import { addAction } from 'redux/slice';
import { getContacts } from 'redux/selector';

export const ContactForm = ({ onContactSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const allState = { name, number };
  const dispatch = useDispatch();
  const state = useSelector(getContacts);

  console.log(state);

  const handleChange = event => {
    const { value, name } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    onContactSubmit(allState);
    dispatch(addAction(allState));
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <FormStyled onSubmit={handleSubmit}>
      <label htmlFor="Name">Name</label>
      <input
        type="text"
        name="name"
        value={name}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={handleChange}
      />
      <label htmlFor="number">Number</label>
      <input
        type="tel"
        name="number"
        value={number}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        onChange={handleChange}
      />
      <button type="submit"> Add contact</button>
    </FormStyled>
  );
};

ContactForm.propTypes = {
  onContactSubmit: PropTypes.func.isRequired,
};
