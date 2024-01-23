import React, { FormEvent } from "react";

import Headling from "../../components/Headling/Headling";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { Link, useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { register, userActions } from "../../store/user.slice";

import styles from "../Login/Login.module.css";

export type RegisterForm = {
  email: {
    value: string;
  };
  password: {
    value: string;
  };
  name: {
    value: string;
  };
};

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { jwt, registerErrorMessage } = useSelector((s: RootState) => s.user);

  React.useEffect(() => {
    if (jwt) navigate("/");
  }, [jwt, navigate]);

  // const register = async (email: string, password: string) => {
  // };

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    dispatch(userActions.clearRegisterError());
    const target = e.target as typeof e.target & RegisterForm;
    const { email, password, name } = target;

    // register(email.value, password.value);
    dispatch(
      register({
        email: email.value,
        password: password.value,
        name: name.value,
      })
    );
  };

  return (
    <div className={styles.login}>
      <Headling>Регистрация</Headling>
      {registerErrorMessage && (
        <div className={styles.error}>{registerErrorMessage}</div>
      )}
      <form
        className={styles.form}
        onSubmit={submit}>
        <div className={styles.field}>
          <label htmlFor="email">Ваш email</label>
          <Input
            id="email"
            placeholder="Email"
            name="email"
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="password">Ваш пароль</label>
          <Input
            id="password"
            type="password"
            placeholder="Пароль"
            name="password"
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="name">Ваше имя</label>
          <Input
            id="name"
            type="text"
            placeholder="Имя"
            name="name"
          />
        </div>
        <Button appearence="big">Зарегистрироваться</Button>
        <div className={styles.links}>
          <div>Есть аккаунт?</div>
          <Link to={"/auth/login"}>Вход</Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
