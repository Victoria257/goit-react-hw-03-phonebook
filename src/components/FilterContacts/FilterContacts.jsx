import PropTypes from 'prop-types';
import css from './FilterContacts.module.css';

const FilterContacts = ({ filter, onChange }) => {
  return (
    <div className={css.filter}>
      <h3>Find contacts by name</h3>
      <input
        className={css.filterInput}
        type="text"
        name="text"
        value={filter}
        onChange={onChange}
        title="Name may contain only letters, apostrophe, dash and spaces."
        required
      ></input>
    </div>
  );
};

export default FilterContacts;

FilterContacts.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
