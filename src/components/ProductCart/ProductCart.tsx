import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { ProductCartProps } from "./ProductCart.props";

import { AppDispatch } from "../../store/store";
import { cartActions } from "../../store/cart.slice";
import styles from "./ProductCart.module.css";

const ProductCart: React.FC<ProductCartProps> = (props) => {
  const dispatch = useDispatch<AppDispatch>();

  const add = (e: MouseEvent) => {
    e.preventDefault();

    dispatch(cartActions.add(props.id));
  };

  return (
    <Link
      to={`/product/${props.id}`}
      className={styles.link}>
      <div className={styles.cart}>
        <div
          className={styles.head}
          style={{ backgroundImage: `url('${props.image}')` }}>
          <div className={styles.price}>
            {props.price}&nbsp;
            <span className={styles.currency}>₽</span>
          </div>
          <button
            className={styles["add-to-cart"]}
            onClick={add}
            type="button">
            <img
              src="/cart-button-icon.svg"
              alt="cart icon"
            />
          </button>
          <div className={styles.rating}>
            {props.rating}&nbsp;
            <img
              src="/star-icon.svg"
              alt="rating star"
            />
          </div>
        </div>
        <div className={styles.footer}>
          <div className={styles.title}>{props.name}</div>
          <div className={styles.description}>{props.description}</div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCart;
