import { Header } from "../Header/Header";
import { Form } from "./Form/Form";
import styles from "./Modal.module.css";

type ModalProps = {
  close: () => void;
};

export function Modal({ close }: ModalProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.modalBlock}>
        <div className={styles.headerBlock}>
          <Header header="Create trip" />
          <button onClick={close} className={styles.buttonCLose}>
            &times;
          </button>
        </div>
        <Form close={close} />
      </div>
    </div>
  );
}
