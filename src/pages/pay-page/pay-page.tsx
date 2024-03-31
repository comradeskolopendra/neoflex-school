import { FC } from "react";
import { Navigate, useLocation } from "react-router";

import Form from "./components/form/form";

import styles from "./pay-page.module.css";

const PayPage: FC = () => {
    const location = useLocation();

    if (!location.state) {
        return <Navigate to={"/"} />
    }

    return (
        <main className={styles.main}>
            <Form />
        </main>
    )
};

export default PayPage;