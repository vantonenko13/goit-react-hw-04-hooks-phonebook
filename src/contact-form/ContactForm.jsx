import React, { useState } from "react";

import { nanoid } from "nanoid";

import PropTypes from "prop-types";

const ContactForm = ({ onCreateHandler, contacts }) => {
  const [state, setState] = useState({
    name: "",
    number: "",
  });

  const submitHandler = () => {
    const contact = { ...state };
    contact.id = nanoid();

    const found = contacts.find((item) => item.name.toLowerCase() === contact.name.toLowerCase());
    if (found) {
      return alert(`${found.name} is already in contacts.`);
    }
    if (state.name && state.number) {
      setState({ name: "", number: "" });
      onCreateHandler(contact);
    } else {
      return alert("Enter name and number!");
    }
  };

  return (
    <form id="contact-creation-form" onSubmit={(e) => e.preventDefault()}>
      <label>
        Name
        <input
          value={state.name}
          onChange={(e) => setState((prev) => ({ ...prev, name: e.target.value }))}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label>
        Number
        <input
          value={state.number}
          onChange={(e) => setState((prev) => ({ ...prev, number: e.target.value }))}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>

      <button onClick={submitHandler}>Add contact</button>
    </form>
  );
};

ContactForm.propTypes = {
  onCreateHandler: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(PropTypes.object),
};

export default ContactForm;
