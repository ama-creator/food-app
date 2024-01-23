import React from "react";
import { HeadlingProps } from "./Headling.props";

import styles from "./Headling.module.css";
import cn from "classnames";

const Headling: React.FC<HeadlingProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <h1
      className={cn(className, styles.h1)}
      {...props}>
      {children}
    </h1>
  );
};

export default Headling;
