import { FC, MouseEvent, ReactNode, useEffect } from "react";
import { createPortal } from "react-dom";

import styles from "./modal-overlay.module.css";
import { useAppDispatch } from "../../redux/hooks";
import { changeModalOpened } from "../../redux/store/store";

interface ModalOveralyProps {
    children: ReactNode
}

const ModalOverlay: FC<ModalOveralyProps> = ({ children }) => {
    const dispatch = useAppDispatch();

    const handleClickOutside = () => {
        dispatch(changeModalOpened(false));
    };

    useEffect(() => {
        document.body.setAttribute("style", "overflow: hidden");

        return () => {
            document.body.removeAttribute("style")
        }
    }, [])

    return createPortal((
        <div className={styles.overlay} onClick={handleClickOutside}>
            {children}
        </div>
    ), document.getElementById("modal")!)
}

export default ModalOverlay;