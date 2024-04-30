import { FC, useState } from "react";
import { Button, Text } from "@vkontakte/vkui";

import { ICart } from "@/types/cart.interface.ts";
import { useAppDispatch } from "@/hooks/AppDispatch.ts";
import {
  changePresentsThunk,
  deleteCartThunk,
} from "@/service/slices/carts/carts.slice.ts";

import s from "./Cart.module.css";

export const Cart: FC<ICart> = (cart) => {
  const dispatch = useAppDispatch();
  const { name, presents, date, id } = cart;
  const deleteCart = () => {
    dispatch(deleteCartThunk(id));
  };
  const originalDate = new Date(date);
  const formattedDate = originalDate.toLocaleString("ru-RU");

  const [present, setPresent] = useState(presents);

  const minusPresents = () => {
    if (present > 0) {
      const newPresent = present - 1;
      setPresent(newPresent);
      dispatch(changePresentsThunk({ presents: newPresent, id }));
    }
  };

  const plusPresents = () => {
    const newPresent = present + 1;
    setPresent(newPresent);
    dispatch(changePresentsThunk({ presents: newPresent, id }));
  };

  return (
    <div className={s.box}>
      <div className={s.txt}>
        <Text>{name}</Text>
        <Text>Подарков:</Text>
        <div className={s.flex}>
          <Button onClick={minusPresents}>-</Button>
          <Text>{present}</Text>
          <Button onClick={plusPresents}>+</Button>
        </div>
        <Text>{formattedDate}</Text>
      </div>
      <div className={s.btns}>
        <Button onClick={deleteCart}>Удалить</Button>
        <Button onClick={() => "В service и slice"}>Редактировать</Button>
      </div>
    </div>
  );
};
