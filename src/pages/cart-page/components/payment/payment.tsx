import { FC } from "react";

import styles from "./payment.module.css";
import { useSelector } from "react-redux";
import { getStateCartItems } from "../../selectors";
import { numberFormatDeclimal } from "../../../../helpers/helpers";
import { useNavigate } from "react-router";

const Payment: FC = () => {
    const navigate = useNavigate();
    const cartItems = useSelector(getStateCartItems);

    const allPrice = cartItems.reduce((accVal, curVal) => accVal + (curVal.price * curVal.quantity), 0);

    const handleOrder = () => {
        navigate(`/pay-order`, { state: cartItems })
    };

    return (
        <div className={styles.payment}>
            <div className={styles.allPrice}>
                <p>Итого</p>
                <p>{numberFormatDeclimal(allPrice)} ₽</p>
            </div>
            <button onClick={handleOrder}>Перейти к оформлению</button>
        </div>
    )
};

export default Payment;