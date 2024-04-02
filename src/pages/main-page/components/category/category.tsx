import { FC } from "react";
import Card from "../card/card";
import styles from "./category.module.css";

import { IShopItem } from "../../../../types/types";


interface CategoryProps {
    items: IShopItem[];
    categoryName: string;
    images: string[];
}

const Category: FC<CategoryProps> = ({ items, categoryName, images }) => {

    return (
        <div className={styles.category}>
            <h3 className={styles.categoryTitle}>{categoryName}</h3>

            <section className={styles.categoryItems}>
                {items.length !== 0 && items.map((item) => (
                    <Card
                        key={item.id}
                        item={item}
                        images={images}
                    />
                ))}
            </section>
        </div>
    )
};

export default Category;