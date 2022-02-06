import React, { useState, useEffect } from "react";

import ContactForm from "./contact-form/ContactForm";
import Filter from "./contact-filter/Filter";
import ContactList from "./contact-list/ContactList";

function App() {
  const [state, setState] = useState({
    contacts: [],
    filter: "",
  });

  useEffect(() => {
    const contacts = localStorage.getItem("contacts");
    const parseContacts = contacts ? JSON.parse(contacts) : null;

    if (parseContacts) {
      setState((state) => ({ ...state, contacts: [...parseContacts] }));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(state.contacts));
  }, [state.contacts]);

  const filteredContacts = () => {
    return state.contacts.filter((contact) =>
      contact.name.toLowerCase().includes(state.filter.toLowerCase())
    );
  };

  const contactCreationHandler = (contact) => {
    setState((prev) => ({ ...prev, contacts: [...prev.contacts, contact] }));
  };

  const filterChangeHandler = (e) => {
    setState((prev) => ({ ...prev, filter: e.target.value }));
  };

  const deleteContactHandler = (id) => {
    const newArray = state.contacts.filter((contact) => contact.id !== id);
    setState((prev) => ({ ...prev, contacts: [...newArray] }));
  };

  return (
    <div className="App">
      <h1>Phonebook</h1>
      <ContactForm onCreateHandler={contactCreationHandler} contacts={state.contacts} />

      <h2>Contacts</h2>
      <Filter value={state.filter} onChangeHandler={filterChangeHandler} />
      <ContactList contacts={filteredContacts()} deleteHandler={deleteContactHandler} />
    </div>
  );
}

export default App;
