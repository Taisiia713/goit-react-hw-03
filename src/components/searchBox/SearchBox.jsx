import css from "./SearchBox.module.css";

export default function SearchBox({ filter, onFilterChange }) {
  return (
    <>
      <label htmlFor="" className={css.label}>
        Find contacts by name
      </label>
      <input
        type="text"
        value={filter}
        onChange={(e) => onFilterChange(e.target.value)}
      />
    </>
  );
}
