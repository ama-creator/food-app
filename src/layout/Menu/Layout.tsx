import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import cn from "classnames";

import Button from "../../components/Button/Button";

import styles from "./Layout.module.css";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { getProfile, userActions } from "../../store/user.slice";

const Layout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const profile = useSelector((s: RootState) => s.user.profile);
  const items = useSelector((s: RootState) => s.cart.items);

  React.useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]);

  const logout = () => {
    dispatch(userActions.logout());
    navigate("/auth/login");
    localStorage.removeItem("jwt");
  };
  return (
    <div className={styles.layout}>
      <div className={styles.sidebar}>
        <div className={styles.user}>
          <img
            src="/avatar.png"
            alt="avatar"
          />
          <div className={styles.name}>{profile?.name}</div>
          <div className={styles.email}>{profile?.email}</div>
        </div>
        <div className={styles.menu}></div>

        <NavLink
          to="/"
          className={({ isActive }) =>
            cn(styles.link, {
              [styles.active]: isActive,
            })
          }>
          <img
            src="/menu-icon.svg"
            alt="menu icon"
          />
          <span>MENU</span>
        </NavLink>
        <NavLink
          to="/cart"
          className={({ isActive }) =>
            cn(styles.link, {
              [styles.active]: isActive,
            })
          }>
          <img
            src="/cart-icon.svg"
            alt="cart icon"
          />
          CART
          <span className={styles["cart-count"]}>
            {items.reduce((acc, item) => (acc += item.count), 0)}
          </span>
        </NavLink>

        <Button
          className={styles.exit}
          onClick={logout}>
          <img
            src="/exit-icon.svg"
            alt="exit icon"
          />
          Выход
        </Button>
      </div>
      <div className={styles.content}>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
