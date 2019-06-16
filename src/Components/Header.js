import React from "react";
import { Container, Header, Left, Body, Right, Title } from "native-base";

export const HeaderTitle = props => {
  return (
    <Header>
      <Left />
      <Body>
        <Title>{props.name}</Title>
      </Body>
      <Right />
    </Header>
  );
};
