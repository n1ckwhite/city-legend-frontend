import axios from "axios";

import { ICart } from "@/types/cart.interface.ts";
import { API } from "@/constans";

interface ICartsService {
  getCarts: () => Promise<ICart[]>;
}

export const cartsService: ICartsService = {
  async getCarts() {
    try {
      const response = await axios.get(API);

      return response.data;
    } catch (error) {
      console.error(error);
    }
  },
};
