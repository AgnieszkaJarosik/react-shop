import React from "react";

import styles from "./Filters.module.css";

const Filters = ({
  manufacturers,
  values: { text, manufacture },
  onChange
}) => {
  const handleChange = data => {
    onChange({
      text: data.text || text,
      manufacture: data.manufacture || manufacture
    });
  };

  const onClear = () => {
    onChange({
      text: "",
      manufacture: "All"
    });
  };

  return (
    <div className={styles.Filter}>
      <div className={styles.Header}>
        <h4>Search</h4>
        <span className={styles.Clear} onClick={onClear}>
          Clear
        </span>
      </div>
      <div>
        <input
          type="text"
          placeholder="search..."
          value={text}
          onChange={e => handleChange({ text: e.target.value })}
        />
      </div>

      <h4>Manufacturer</h4>
      <div>
        {manufacturers.map(item => (
          <div key={item}>
            <input
              type="radio"
              name="manufacturere"
              id={item}
              value={item}
              checked={item === manufacture}
              onChange={e => handleChange({ manufacture: e.target.value })}
            />
            <label htmlFor={item}>{item}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filters;
