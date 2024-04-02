import { FC, useMemo } from "react";
import Category from "./components/category/category";
import { useAppSelector } from "../../redux/hooks";
import { getStateCategories, getStateFocusedItem, getStateIsModalOpened } from "./selectors";

import styles from "./main-page.module.css"
import ModalOverlay from "../../components/modal-overlay/modal-overlay";
import Modal from "../../components/modal/modal";

import headphones1 from "../../assets/images/headphones-1.png";
import headphones2 from "../../assets/images/headphones-2.png";
import headphones3 from "../../assets/images/headphones-3.png";
import headphones4 from "../../assets/images/headphones-4.png";
import headphones5 from "../../assets/images/headphones-5.png";
import headphones6 from "../../assets/images/headphones-6.png";
import headphones7 from "../../assets/images/headphones-7.png";
import headphones8 from "../../assets/images/headphones-8.png";
import headphones9 from "../../assets/images/headphones-9.png";

const MainPage: FC = () => {
    const { wireless, wired } = useAppSelector(getStateCategories);
    const isModalOpened = useAppSelector(getStateIsModalOpened);
    const focusedItem = useAppSelector(getStateFocusedItem);

    const images = useMemo(() => [
        headphones1,
        headphones2,
        headphones3,
        headphones4,
        headphones5,
        headphones6,
        headphones7,
        headphones8,
        headphones9
    ], [])

    return (
        <main className={styles.main}>
            <Category images={images} categoryName={wireless.title} items={wireless.items} />
            <Category images={images} categoryName={wired.title} items={wired.items} />

            {isModalOpened && (
                <ModalOverlay>
                    <Modal>
                        <div className={styles.itemInfo}>
                            <p>{focusedItem.title}</p>

                            <img src={images[focusedItem.id - 1]} alt="" />
                        </div>
                    </Modal>
                </ModalOverlay>
            )}
        </main>
    )
};

export default MainPage;