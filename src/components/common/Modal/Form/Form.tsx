import { useState } from "react";
import { useAddTrips } from "../../../../api/hooks/useAddTrips";
import { Button } from "../../Button/Button";
import styles from "./Form.module.css";
import { FormDate } from "./FormDate/FormDate";
import { FormText } from "./FormText/FormText";
import cities from "../../../../assets/json/city.json";
import { useStorage } from "../../../../providers/StorageProvider";

type FormProps = {
  close: () => void;
};

export function Form({ close }: FormProps) {
  const CITIES = cities;

  const [form, setForm] = useState<{
    name: string;
    startDate: string;
    endDate: string;
  }>({ endDate: "", name: "", startDate: "" });

  const [error, setError] = useState(false);

  const { addTrip } = useAddTrips();

  const { getTrips } = useStorage();

  const handleSave = () => {
    close();
    if (!form.name || !form.endDate || !form.startDate) {
      setError(true);
      return;
    }

    const image = CITIES.find(({ name }) => name === form.name)?.image ?? "";

    addTrip({
      endDate: form.endDate,
      name: form.name,
      startDate: form.startDate,
      image,
    });
    getTrips();
  };
  return (
    <div className={styles.wrapper}>
      <form className={styles.form}>
        <FormText
          options={CITIES.map(({ name }) => name)}
          onChange={(value: string) =>
            setForm((prev) => ({ ...prev, name: value }))
          }
          value={form.name}
          label="City"
        />
        <FormDate
          label="Start date"
          value={form.startDate}
          onChange={(value: string) =>
            setForm((prev) => ({ ...prev, startDate: value }))
          }
        />
        <FormDate
          label="End date"
          value={form.endDate}
          onChange={(value: string) =>
            setForm((prev) => ({ ...prev, endDate: value }))
          }
        />
        {error && <div className={styles.error}> Fill all form </div>}
        <div className={styles.buttonGroup}>
          <Button color="white" content="Cancel" onClick={close} />
          <Button color="blue" content="Save" onClick={handleSave} />
        </div>
      </form>
    </div>
  );
}
