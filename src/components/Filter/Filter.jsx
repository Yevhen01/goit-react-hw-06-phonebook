import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { setFilter } from "../../redux/filterSlice";
import s from "./Filter.module.css";

const Filter = () => {
  const dispatch = useDispatch();

  const onChange = (e) => {
    const value = e.target.value.toLowerCase();
    dispatch(setFilter(value));
  };

  return (
    <input
      className={s.input}
      type="text"
      name="filter"
      onChange={onChange}
      placeholder="Search for a contact"
    />
  );
};

Filter.propTypes = {
  value: PropTypes.string,
};

export default Filter;
