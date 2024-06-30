import css from "./SearchBox.module.css";

export default function SearchBox({ value, onType, filter }) {
  const handleChange = (event) => {
    onType(event.target.value);
  };
  return (
    <>
      <label htmlFor="" className={css.label}>
        Find contacts by name
      </label>
      <input type="text" value={value} onChange={handleChange} />
    </>
  );
}
