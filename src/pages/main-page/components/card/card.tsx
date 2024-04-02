import { FC } from "react";
import styles from "./card.module.css";

import { StarIcon } from "./icons";

import { useAppDispatch } from "../../../../redux/hooks";
import { setCartItem, changeModalOpened, setCurrentItem } from "../../../../redux/store/store";
import { IShopItem } from "../../../../types/types";

interface CardProps {
    item: IShopItem;
    images: string[];
}

const Card: FC<CardProps> = ({ item, images }) => {
    const dispatch = useAppDispatch();

    const handleBuyItem = () => {
        dispatch(setCartItem(item));
    };

    const handleClickMoreInfo = () => {
        dispatch(changeModalOpened(true));
        dispatch(setCurrentItem(item));
    }

    return (
        <div className={styles.card}>
            <div className={styles.cardTop}>
                <button onClick={handleClickMoreInfo} className={styles.buyButton}>Больше информации</button>
                <img src={images[item.id - 1]} className={styles[`itemImage${item.id}`]} />
            </div>

            <div className={styles.cardBottom}>
                <div>
                    <h4 className={styles.itemName}>{item.title}</h4>
                    <div className={styles.rateContainer}>
                        <StarIcon />
                        <p className={styles.rate}>{item.rate}</p>
                    </div>
                </div>

                <div className={styles.itemOrder}>
                    <div className={styles.prices}>
                        <p>
                            {item.price} ₽
                            {item.onSalePrice && <span>{item.onSalePrice} ₽</span>}
                        </p>
                    </div>
                    <button onClick={handleBuyItem} className={styles.buyButton}>Купить</button>
                </div>
            </div>
        </div>
    )
};

export default Card;