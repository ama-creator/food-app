import React, { ChangeEvent } from "react";
import Headling from "../../components/Headling/Headling";
import Search from "../../components/Search/Search";

import { Product } from "../../interfaces/product.interface";
import { PREFIX } from "../../helpers/API";

import styles from "./Menu.module.css";
import axios, { AxiosError } from "axios";
import MenuList from "./MenuList/MenuList";

const Menu = () => {
  const [products, setProducts] = React.useState<Product[]>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string | undefined>(false);
  const [filter, setFilter] = React.useState<string>();

  React.useEffect(() => {
    getMenu(filter);
  }, [filter]);

  const getMenu = async (name?: string) => {
    try {
      setIsLoading(true);

      const { data } = await axios.get<Product[]>(`${PREFIX}/products`, {
        params: {
          name,
        },
      });
      setProducts(data);
      setIsLoading(false);
    } catch (er) {
      console.error(er);
      if (er instanceof AxiosError) {
        setError(er.message);
      }
      setIsLoading(false);
      return;
    }
  };

  const updateFilter = (e: ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  };

  React.useEffect(() => {
    getMenu();
  }, []);

  return (
    <>
      <div className={styles.head}>
        <Headling>Меню</Headling>
        <Search
          placeholder="Введите блюдо или состав"
          onChange={updateFilter}
        />
      </div>
      <div>
        {error && <>{error}</>}
        {!isLoading && products.length > 0 && <MenuList products={products} />}
        {isLoading && <>Загружаем продукты!</>}
        {!isLoading && products.length === 0 && <>Не найдено блюдо</>}
      </div>
    </>
  );
};

export default Menu;
