import React from "react";
import cn from "classnames";

import { ButtonProps } from "./Button.props";

import styles from "./Button.module.css";

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  appearence = "small",
  ...props
}) => {
  return (
    <button
      className={cn(styles.button, styles.accent, className, {
        [styles["small"]]: appearence === "small",
        [styles["big"]]: appearence === "big",
      })}
      {...props}>
      {children}
    </button>
  );
};

export default Button;
