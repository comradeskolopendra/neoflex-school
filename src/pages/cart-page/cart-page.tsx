import { FC } from "react";
import { useAppSelector } from "../../redux/hooks";

import { getStateCartItems } from "./selectors";

import styles from "./cart-page.module.css";
import CartItem from "./components/cart-item/cart-item";
import Payment from "./components/payment/payment";

const CartPage: FC = () => {
    const cartItems = useAppSelector(getStateCartItems);

    return (
        <main className={styles.main}>
            <h3 className={styles.title}>Корзина</h3>

            {cartItems.length !== 0 ?
                (
                    <div className={styles.contents}>
                        <section className={styles.cards}>
                            {cartItems.map((item) => (
                                <CartItem item={item} key={item.id} />
                            ))}
                        </section>

                        <Payment />
                    </div>
                ) :
                (<div className={styles.nullCart}>Корзина пуста</div>)
            }

        </main>
    )
};

export default CartPage;