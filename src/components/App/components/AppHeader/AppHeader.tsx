import { FC } from "react";
import { Header, PanelHeader, Text } from "@vkontakte/vkui";

export const AppHeader: FC = () => (
  <header>
    <PanelHeader>
      <Header mode="secondary">
        <Text>City Legend</Text>
      </Header>
    </PanelHeader>
  </header>
);
