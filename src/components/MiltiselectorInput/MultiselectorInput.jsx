import clsx from "clsx";
import { useState } from "react";
import PropTypes from "prop-types";
import styles from "./MultiselectorInput.module.css";
function MultiselectorInput({
  options = [],
  value,
  placeholder,
  error,
  onChange,
}) {
  const [listStatus, setListStatus] = useState(false);
  const activeOptions = options.filter((option) =>
    value.includes(option.value)
  );
  function handleInputClick() {
    setListStatus((listStatus) => !listStatus);
  }
  return (
    <div
      className={clsx(
        styles.item,
        styles.active,
        {
          [styles.listActive]: listStatus,
        },
        "list-head"
      )}
      onClick={handleInputClick}
    >
      <p className={styles.errorsList}>{error ? error.message : ""}</p>
      <div className={styles.text}>
        {value == ""
          ? placeholder
          : activeOptions.map((value) => value.label).join(", ")}
      </div>
      <div className={styles.arrow}>
        <img src="images/arrow.svg" alt="" className={styles.svg} />
      </div>
      <div className={styles.options}>
        {options.map((option) => (
          <button
            key={option.value}
            className={styles.option}
            onClick={(event) => {
              event.preventDefault();
              if (option.value == "") {
                onChange([""]);
              } else if (value == "") {
                onChange([option.value]);
              } else if (value.includes(option.value)) {
                onChange(value.filter((item) => item == option.value));
              } else {
                onChange([...value, option.value]);
              }
            }}
          >
            {option.label}
            <input
              type="checkbox"
              checked={value.includes(option.value)}
              name="item"
              value={option.value}
              onChange={(event) => {
                event.preventDefault();
                if (option.value == "") {
                  onChange([""]);
                } else if (value == "") {
                  onChange([option.value]);
                } else if (value.includes(option.value)) {
                  onChange(value.filter((item) => item == option.value));
                } else {
                  onChange([...value, option.value]);
                }
              }}
            />
          </button>
        ))}
      </div>
    </div>
  );
}

MultiselectorInput.propTypes = {
  options: PropTypes.any,
  value: PropTypes.any,
  placeholder: PropTypes.any,
  error: PropTypes.any,
  onChange: PropTypes.any,
};
export default MultiselectorInput;
