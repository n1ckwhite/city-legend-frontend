import { FC } from "react";
import { useSelector } from "react-redux";

import { sliceState } from "@/service/slices/carts/carts.slice.ts";

import s from "./Loader.module.css";

export const Loader: FC = () => {
  const { loading } = useSelector(sliceState);

  return (
    loading && (
      <div className={s.wrapp}>
        <div className={s.lds_dual_ring} />
      </div>
    )
  );
};
