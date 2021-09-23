/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from "react";
import PropTypes from "prop-types";
import { StyledCard, Overlay, Text } from "./styles";

export default function Card({ children, title }: PropTypes) {
  return (
    <Overlay>
      <StyledCard>
        <Text>{title}</Text>

        {children}
      </StyledCard>
    </Overlay>
  );
}

type PropTypes = {
  title: string;
  children: React.ReactNode;
};
