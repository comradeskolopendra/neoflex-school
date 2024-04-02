import { FC, MouseEvent, ReactNode } from "react";

import { CloseIcon } from "./icons";

import styles from "./modal.module.css";

interface ModalProps {
    children: ReactNode;
}

const Modal: FC<ModalProps> = ({ children }) => {
    const onClickModal = (event: MouseEvent<HTMLDivElement>) => {
        event.stopPropagation();
    }

    return (
        <div className={styles.modal} onClick={onClickModal}>
            {children}
            <CloseIcon className={styles.close} />
        </div>
    )
};

export default Modal;