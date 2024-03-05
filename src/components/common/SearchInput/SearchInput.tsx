import styles from "./SearchInput..module.css";
import searchIcon from "../../../assets/icons/search.svg";

type SearchInputProps = {
  onChange: (value: string) => void;
  value: string;
};

export function SearchInput({ value, onChange }: SearchInputProps) {
  return (
    <div className={styles.wrapper}>
      <img src={searchIcon} alt="search" />
      <input value={value} onChange={(e) => onChange(e.target.value)} />
    </div>
  );
}
