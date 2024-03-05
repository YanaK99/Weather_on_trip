import styles from "./FormText.module.css";

type FormTextProps = {
  label: string;
  value: string;
  onChange: (event: string) => void;
  options: string[];
};

export function FormText({ label, value, onChange, options }: FormTextProps) {
  return (
    <div className={styles.formGroup}>
      <label className={styles.labelText}>
        <span className={styles.redStar}>*</span>
        {label}
      </label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required
        className={styles.selectText}
      >
        <option value="" disabled selected hidden>
          Please select a city
        </option>
        {options.map((value) => (
          <option className={styles.optionText} value={value}>
            {value}
          </option>
        ))}
      </select>
    </div>
  );
}
