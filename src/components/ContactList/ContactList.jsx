import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";

import { getContacts, deleteContact } from "../../redux/contactsSlice";
import s from "./ContactList.module.css";

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filterValue = useSelector((state) => state.filter.filter).toLowerCase();

  const onFilterChange = () => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filterValue)
    );
  };
  const onDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <ul className={s.list}>
      {onFilterChange().map(({ id, name, number }) => (
        <li className={s.item} key={id}>
          <p className={s.info}>
            <span>{name} : </span>
            {number}
          </p>
          <button
            className={s.btn}
            type="button"
            id={id}
            onClick={() => onDeleteContact(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default ContactList;
