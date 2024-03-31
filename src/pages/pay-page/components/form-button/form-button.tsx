import { FC } from "react";
import styles from "./form-button.module.css";

interface FormButtonProps {
    title: string;
}

const FormButton: FC<FormButtonProps> = ({ title }) => {
    return (
        <button className={styles.button} type={"submit"}>
            {title}
        </button>
    )
};

export default FormButton;