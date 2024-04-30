import { FC, useEffect } from "react";
import { useSelector } from "react-redux";
import { Button } from "@vkontakte/vkui";

import { useAppDispatch } from "@/hooks/AppDispatch.ts";
import {
  addCartThunk,
  getCartsThunk,
  sliceState,
} from "@/service/slices/carts/carts.slice.ts";
import { Cart } from "@/components/Carts/components/Cart";

import s from "./Carts.module.css";

export const Carts: FC = () => {
  const { carts } = useSelector(sliceState);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getCartsThunk());
  }, [dispatch]);
  const addCart = () => {
    dispatch(addCartThunk());
  };

  return (
    <>
      <ul className={s.flex}>
        {carts.map((cart) => (
          <li key={cart.id}>
            <Cart
              date={cart.date}
              id={cart.id}
              name={cart.name}
              presents={cart.presents}
            />
          </li>
        ))}
      </ul>
      <Button size="l" stretched onClick={addCart}>
        Добавить карту
      </Button>
    </>
  );
};
