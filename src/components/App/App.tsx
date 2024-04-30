import { useEffect } from "react";

import { useAppDispatch } from "@/hooks/AppDispatch.ts";
import { getCartsThunk } from "@/service/slices/carts.slice.ts";

export const App = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getCartsThunk());
  }, [dispatch]);

  return (
    <div>
      <p>123</p>
    </div>
  );
};
