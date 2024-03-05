import styles from "./FormDate.module.css";

type FormDateProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
};

export function FormDate({ label, value, onChange }: FormDateProps) {
  return (
    <div className={styles.formGroup}>
      <label className={styles.labelText}>
        <span className={styles.redStar}>*</span>
        {label}
      </label>
      <div className={styles.inputWrapper}>
        <input
          className={styles.inputDate}
          type="date"
          required
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
    </div>
  );
}
