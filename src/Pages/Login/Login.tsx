import React, { FormEvent } from "react";

import Headling from "../../components/Headling/Headling";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { Link, useNavigate } from "react-router-dom";

import styles from "./Login.module.css";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { login, userActions } from "../../store/user.slice";

export type LoginForm = {
  email: {
    value: string;
  };
  password: {
    value: string;
  };
};

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { jwt, loginErrorMessage } = useSelector((s: RootState) => s.user);

  React.useEffect(() => {
    if (jwt) navigate("/");
  }, [jwt, navigate]);

  const sendLogin = async (email: string, password: string) => {
    dispatch(login({ email, password }));
  };

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    dispatch(userActions.clearLoginError());
    const target = e.target as typeof e.target & LoginForm;
    const { email, password } = target;

    sendLogin(email.value, password.value);
  };

  return (
    <div className={styles.login}>
      <Headling>Вход</Headling>
      {loginErrorMessage && (
        <div className={styles.error}>{loginErrorMessage}</div>
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
        <Button appearence="big">Вход</Button>
        <div className={styles.links}>
          <div>Нет аккаунта?</div>
          <Link to={"/auth/register"}>Зарегистрироваться</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
