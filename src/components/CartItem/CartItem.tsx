import React from "react";
import { useDispatch } from "react-redux";
import { CartItemProps } from "./CartItem.props";

import { AppDispatch } from "../../store/store";
import { cartActions } from "../../store/cart.slice";

import styles from "./CartItem.module.css";

const CartItem: React.FC<CartItemProps> = (props) => {
  const dispatch = useDispatch<AppDispatch>();

  const increase = () => {
    dispatch(cartActions.add(props.id));
  };

  const descrease = () => {
    dispatch(cartActions.remove(props.id));
  };

  const remove = () => {
    dispatch(cartActions.delete(props.id));
  };

  return (
    <div className={styles.item}>
      <div
        className={styles.image}
        style={{ backgroundImage: `url(${props.image})` }}></div>
      <div className={styles.description}>
        <div className={styles.name}>{props.name}</div>
        <div className={styles.price}>{props.price}&nbsp; ₽</div>
      </div>

      <div className={styles.actions}>
        <button
          className={styles["minus"]}
          onClick={descrease}
          type="button">
          <img
            src="/minus-icon.svg"
            alt="cart icon"
          />
        </button>
        <div className={styles.number}>{props.count}</div>
        <button
          className={styles["plus"]}
          onClick={increase}
          type="button">
          <img
            src="/plus-icon.svg"
            alt="cart icon"
          />
        </button>
        <button
          className={styles["remove"]}
          onClick={remove}
          type="button">
          <img
            src="/delete-icon.svg"
            alt="cart icon"
          />
        </button>
      </div>

      {/* <div className={styles.rating}>
        {props.rating}&nbsp;
        <img
          src="/star-icon.svg"
          alt="rating star"
        />
      </div> */}
    </div>
  );
};

export default CartItem;
