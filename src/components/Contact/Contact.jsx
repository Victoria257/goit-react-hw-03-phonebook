import css from 'components/Contact/Contact.module.css';

export const Contact = ({ contacts, delContact }) => {
  return contacts.map(({ name, number, id }) => (
    <li className={css.contact} key={id}>
      {name}: {number}
      <button
        className={css.delButton}
        type="button"
        onClick={() => delContact(id)}
      >
        delete
      </button>
    </li>
  ));
};
