import PropTypes from "prop-types";
import styles from "./Search.module.css";
function Search({ artistValue, onSearchInputChange }) {
  return (
    <input
      type="text"
      name="artist"
      className={styles.item}
      id="artist"
      placeholder="Artist"
      onChange={onSearchInputChange}
      value={artistValue}
    />
  );
}

Search.propTypes = {
  /**
   * Value in input
   **/
  artistValue: PropTypes.string,
  onSearchInputChange: PropTypes.func,
};
export default Search;
