import { FC } from "react";
import { ICartItem } from "../../../../types/types";

import styles from "./cart-item.module.css";

import { MinusIcon, PlusIcon, UrnIcon } from "./icons";
import { useAppDispatch } from "../../../../redux/hooks";
import { removeCartItemOne, setCartItem, removeCartItemAll } from "../../../../redux/store/store";
import headphones1 from "../../../../assets/images/headphones-1.png";
import headphones2 from "../../../../assets/images/headphones-2.png";
import headphones3 from "../../../../assets/images/headphones-3.png";
import headphones4 from "../../../../assets/images/headphones-4.png";
import headphones5 from "../../../../assets/images/headphones-5.png";
import headphones6 from "../../../../assets/images/headphones-6.png";
import headphones7 from "../../../../assets/images/headphones-7.png";
import headphones8 from "../../../../assets/images/headphones-8.png";
import headphones9 from "../../../../assets/images/headphones-9.png";
import { numberFormatDeclimal } from "../../../../helpers/helpers";

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
]

interface CartItemProps {
    item: ICartItem;
}

const CartItem: FC<CartItemProps> = ({ item }) => {
    const dispatch = useAppDispatch();

    const handleOnPlus = () => {
        dispatch(setCartItem(item));
    };

    const handleOnMinus = () => {
        dispatch(removeCartItemOne(item.id))
    }

    const handleOnDeleteAll = () => {
        dispatch(removeCartItemAll(item.id));
    };


    return (
        <div className={styles.item}>
            <div className={styles.leftside}>
                <div className={styles.itemImageContainer}>
                    <img className={styles.itemImage} src={images[item.id - 1]} />
                    <div className={styles.controlsQuantity}>
                        <button onClick={handleOnMinus}><MinusIcon /></button>
                        <p>{item.quantity}</p>
                        <button onClick={handleOnPlus}><PlusIcon /></button>
                    </div>
                </div>

                <div className={styles.itemInfo}>
                    <p className={styles.title}>{item.title}</p>
                    <p className={styles.price}>{numberFormatDeclimal(item.price)} ₽</p>
                </div>
            </div>

            <button className={styles.deleteAll} onClick={handleOnDeleteAll}>
                <UrnIcon />
            </button>
        </div>
    )
}

export default CartItem;