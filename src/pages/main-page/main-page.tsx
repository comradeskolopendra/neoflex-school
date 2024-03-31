import { FC } from "react";
import Category from "./components/category/category";
import { useAppSelector } from "../../redux/hooks";
import { getStateCategories } from "./selectors";

import styles from "./main-page.module.css"

const MainPage: FC = () => {
    const { wireless, wired } = useAppSelector(getStateCategories);

    return (
        <main className={styles.main}>
            <Category categoryName={wireless.title} items={wireless.items} />
            <Category categoryName={wired.title} items={wired.items} />
        </main>
    )
};

export default MainPage;