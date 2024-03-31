import { FC, useState, ChangeEvent, FormEvent } from "react";

import FormButton from "../form-button/form-button";
import FormInput from "../form-input/form-input";
import { EyeIcon } from "../../icons";

import styles from "./form.module.css";

interface IFormData {
    mm: string;
    yy: string;
    cardNumber: string;
    cvv: string;
}

const Form: FC = () => {
    const [formData, setFormData] = useState<IFormData>({
        mm: "",
        yy: "",
        cardNumber: "",
        cvv: ""
    });
    const [isVisibleCVV, setIsVisibleCVV] = useState<boolean>(false);

    const handleChangeFormData = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData((prevState) => ({ ...prevState, [name]: value }));
    }

    const handleOnSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(`Data:`, formData)
    };

    const handleClickCVV = () => {
        setIsVisibleCVV((prevState) => !prevState);
    };

    return (
        <form className={styles.form} onSubmit={handleOnSubmit}>
            <FormInput
                type="text"
                description={"Номер карты"}
                id={"cardNumber"}
                onChange={handleChangeFormData}
                value={formData.cardNumber}
            />
            <div className={styles.rowInputs}>
                <FormInput
                    type="text"
                    description={"До какого месяца"}
                    id={"mm"}
                    onChange={handleChangeFormData}
                    value={formData.mm} />
                <span />
                <FormInput
                    type="text"
                    description=
                    {"До какого года"}
                    id={"yy"}
                    onChange={handleChangeFormData}
                    value={formData.yy}
                />
            </div>
            <FormInput
                icon={<EyeIcon />}
                setIsVisibleCVV={handleClickCVV}
                type={isVisibleCVV ? "text" : "password"}
                description={"CVV карты"}
                id={"cvv"}
                onChange={handleChangeFormData}
                value={formData.cvv}
            />

            <FormButton title={"Подтвердить"} />
        </form>
    )
}

export default Form;