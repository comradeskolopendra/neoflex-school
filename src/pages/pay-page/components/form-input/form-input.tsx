import { ChangeEventHandler, FC, MouseEventHandler, ReactNode } from "react";
import styles from "./form-input.module.css";

interface FormInputProps {
    description: string;
    id: string;
    value: string;
    type: "text" | "password";
    onChange: ChangeEventHandler<HTMLInputElement>;
    icon?: ReactNode;
    setIsVisibleCVV?: MouseEventHandler<HTMLButtonElement>
}

const FormInput: FC<FormInputProps> = ({ description, onChange, id, value, type, icon, setIsVisibleCVV }) => {
    return (
        <div className={styles.item}>
            {icon && <button type="button" onClick={setIsVisibleCVV}>{icon}</button>}
            <input type={type} id={id} name={id} onChange={onChange} value={value} />
            <label htmlFor={id}>{description}</label>
        </div>
    )
};

export default FormInput;