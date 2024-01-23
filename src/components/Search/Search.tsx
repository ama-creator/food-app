import { forwardRef } from "react";
import { SearchProps } from "./Search.props";

import cn from "classnames";

import styles from "./Search.module.css";

const Search = forwardRef<HTMLInputElement, SearchProps>(function Search(
  { isValid = true, className, ...props },
  ref
) {
  return (
    <label
      className={styles["input-wrapper"]}
      htmlFor="searh">
      <input
        id="search"
        ref={ref}
        className={cn(styles["input"], className, {
          [styles["invalid"]]: isValid,
        })}
        {...props}
      />
      <img
        className={styles.icon}
        src="/search-icon.svg"
        alt="search icon"
      />
    </label>
  );
});

export default Search;
