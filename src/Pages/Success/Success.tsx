import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";

import styles from "./Success.module.css";

const Success = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.success}>
      <img
        src="/pizza.png"
        alt="pizza image"
      />
      <div className={styles.text}>Ваш заказ успешно оформлен!</div>

      <Button
        appearence="big"
        onClick={() => navigate("/")}>
        Сделать новый
      </Button>
    </div>
  );
};

export default Success;
