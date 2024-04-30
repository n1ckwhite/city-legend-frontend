import { FC } from "react";
import { useSelector } from "react-redux";
import { Text } from "@vkontakte/vkui";

import { sliceState } from "@/service/slices/carts/carts.slice.ts";

export const ErrorText: FC = () => {
  const { error } = useSelector(sliceState);

  return (
    error && (
      <Text style={{ color: "red", textAlign: "center" }}>{error.message}</Text>
    )
  );
};
