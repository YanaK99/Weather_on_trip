import styles from "./SliderButton.module.css";
import addImage from "../../../../../assets/icons/add.svg";
import { useModal } from "../../../../../providers/ModalProvider";

export function SliderButton() {
  const { setIsOpen } = useModal();
  return (
    <button onClick={() => setIsOpen(true)} className={styles.button}>
      <img src={addImage} alt="add trip" />
      <div className={styles.buttonText}>Add trip</div>
    </button>
  );
}
