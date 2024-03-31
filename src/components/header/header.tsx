import { FC } from "react";
import styles from "./header.module.css";
import IconLink from "../icon-link/icon-link";

import { HeartIcon, CartIcon } from "./icons";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";
import { getStateCartItems } from "./selectors";

const Header: FC = () => {
    const cartItems = useAppSelector(getStateCartItems);

    const itemsInCartCount = cartItems.reduce((accVal, curVal) => accVal + curVal.quantity, 0);

    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <Link to={"/"} className={styles.logo}>qpick</Link>

                <div className={styles.leftside}>
                    <IconLink icon={<HeartIcon />} path={"/123"} count={0} />
                    <IconLink icon={<CartIcon />} className={styles.cartLink} path={"/cart"} count={itemsInCartCount} />
                </div>
            </nav>
        </header>
    );
};

export default Header;