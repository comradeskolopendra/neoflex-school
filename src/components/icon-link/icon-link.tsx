import { FC, ReactNode } from "react";
import { Link } from "react-router-dom";

import styles from "./icon-link.module.css";

interface IconLinkProps {
    path: string;
    icon: ReactNode;
    count?: number;
    className?: string;
}

const IconLink: FC<IconLinkProps> = ({ path, icon, count, className }) => {

    return (
        <Link to={path} className={`${styles.link} ${className}`}>
            {icon}
            {
                typeof count === "number" &&
                count > 0 &&
                <span className={styles.quantity}>{count}</span>
            }
        </Link>
    )
};

export default IconLink;