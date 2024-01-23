import React from "react";
import ProductCart from "../../../components/ProductCart/ProductCart";

import { MenuListProps } from "./MenuList.props";

import styles from "./MenuList.module.css";

const MenuList: React.FC<MenuListProps> = ({ products }) => {
  return (
    <div className={styles.wrapper}>
      {products.map((item) => (
        <ProductCart
          key={item.id}
          id={item.id}
          name={item.name}
          description={item.ingredients.join(", ")}
          rating={item.rating}
          price={item.price}
          image={item.image}
        />
      ))}
    </div>
  );
};

export default MenuList;
