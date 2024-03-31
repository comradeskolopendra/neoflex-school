import { FC } from "react";
import styles from "./footer.module.css";

import { Link } from "react-router-dom";
import { WorldwideIcon, SocialWhatsAppIcon, SocialTelegramIcon, SocialVKIcon } from "./icons";

const Footer: FC = () => {
    return (
        <footer className={styles.footer}>
            <div>
                <p className={styles.logo}>qpick</p>
            </div>

            <section className={styles.central}>
                <div className={styles.leftsideLinks}>
                    <Link to={"/123"}>Избранное</Link>
                    <Link to={"/cart"}>Корзина</Link>
                    <Link to={"/123"}>Контакты</Link>
                </div>

                <div className={styles.rightsideLinks}>
                    <Link to={"/123"}>Условия сервиса</Link>
                    <div className={styles.langs}>
                        <WorldwideIcon />
                        <p className={styles.selected}>Рус</p>
                        <p>Eng</p>
                    </div>
                </div>
            </section>

            <div className={styles.social}>
                <Link to={"https://vk.com"} target="_blank">
                    <SocialVKIcon />
                </Link>
                <Link to={"https://web.whatsapp.com/"} target="_blank">
                    <SocialWhatsAppIcon />
                </Link>
                <Link to={"https://t.me/tokygavakodaka"} target="_blank">
                    <SocialTelegramIcon />
                </Link>
            </div>
        </footer>
    )
};

export default Footer;