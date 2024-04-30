import axios from "axios";

import { ICart } from "@/types/cart.interface.ts";
import { API } from "@/constans";

interface IPresent {
  presents: number;
  id: string;
}

interface ICartsService {
  getCarts: () => Promise<ICart[]>;
  deleteCart: (id: string) => Promise<ICart>;
  addCart: () => Promise<ICart>;
  changePresents: ({ presents, id }: IPresent) => Promise<ICart>;
  changeCart: (cart: ICart) => Promise<ICart>;
}

export const cartsService: ICartsService = {
  async getCarts() {
    try {
      const response = await axios.get(API);

      return response.data;
    } catch {
      throw new Error("Ошибка получения карт");
    }
  },
  async deleteCart(id) {
    try {
      const response = await axios.delete(API, { data: { id } });

      return response.data;
    } catch {
      throw new Error("Ошибка при удалении карты");
    }
  },
  async addCart() {
    try {
      const response = await axios.post(API, { name: "test" });

      return response.data;
    } catch {
      throw new Error("Ошибка при создании карты");
    }
  },
  async changePresents({ presents, id }) {
    try {
      const response = await axios.patch(API, { id, presents });

      return response.data;
    } catch {
      throw new Error("Ошибка при изменении подарков");
    }
  },
  async changeCart(cart: ICart) {
    try {
      const response = await axios.patch(API, { cart });

      return response.data;
    } catch {
      throw new Error("Ошибка при изменении картыs");
    }
  },
};
