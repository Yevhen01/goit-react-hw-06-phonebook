import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "nanoid";
import { addContact } from "../../redux/contactsSlice";
import { getContacts } from "../../redux/contactsSlice";
import s from "./ContactForm.module.css";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (contacts.some((contact) => contact.name === name)) {
      alert(`${name} is already in contacts.`);
    } else {
      dispatch(addContact({ id: nanoid(), name, number }));
    }

    reset();
  };

  const reset = () => {
    setName("");
    setNumber("");
  };

  const handleChangeName = (e) => {
    if (e.target.type === "text") {
      setName(e.target.value);
    }
  };

  const handleChangeNumber = (e) => {
    if (e.target.type === "tel") {
      setNumber(e.target.value);
    }
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label className={s.label}>
        Name
        <input
          className={s.input}
          type="text"
          name="name"
          value={name}
          onChange={handleChangeName}
          placeholder="Enter name..."
        />
      </label>
      <label className={s.label}>
        Number
        <input
          className={s.input}
          type="tel"
          name="number"
          value={number}
          onChange={handleChangeNumber}
          placeholder="000-00-00"
        />
      </label>
      <button className={s.btn} type="submit" onSubmit={handleSubmit}>
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
