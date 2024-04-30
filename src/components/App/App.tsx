import { FC } from "react";

import { Carts } from "@/components/Carts";
import { Loader } from "@/components/Loader/Loader.tsx";
import { ErrorText } from "@/components/ErrorText";

import { AppHeader } from "./components/AppHeader";

export const App: FC = () => (
  <>
    <AppHeader />
    <main>
      <ErrorText />
      <Carts />
    </main>
    <Loader />
  </>
);
