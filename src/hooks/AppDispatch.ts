import { useDispatch } from "react-redux";

import { store } from "@/service/store/store.ts";

export type TAppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<TAppDispatch>();
