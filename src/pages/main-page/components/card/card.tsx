import { FC } from "react";
import styles from "./card.module.css";

import { StarIcon } from "./icons";

import headphones1 from "../../../../assets/images/headphones-1.png";
import headphones2 from "../../../../assets/images/headphones-2.png";
import headphones3 from "../../../../assets/images/headphones-3.png";
import headphones4 from "../../../../assets/images/headphones-4.png";
import headphones5 from "../../../../assets/images/headphones-5.png";
import headphones6 from "../../../../assets/images/headphones-6.png";
import headphones7 from "../../../../assets/images/headphones-7.png";
import headphones8 from "../../../../assets/images/headphones-8.png";
import headphones9 from "../../../../assets/images/headphones-9.png";
import { useAppDispatch } from "../../../../redux/hooks";
import { setCartItem } from "../../../../redux/store/store";
import { IShopItem } from "../../../../types/types";

const images = [
    headphones1,
    headphones2,
    headphones3,
    headphones4,
    headphones5,
    headphones6,
    headphones7,
    headphones8,
    headphones9
];

interface CardProps {
    item: IShopItem;
}

const Card: FC<CardProps> = ({ item }) => {
    const dispatch = useAppDispatch();

    const handleOnClick = () => {
        dispatch(setCartItem(item));
    };

    return (
        <div className={styles.card}>
            <div className={styles.cardTop}>
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
                    <button onClick={handleOnClick} className={styles.buyButton}>Купить</button>
                </div>
            </div>
        </div>
    )
};

export default Card;