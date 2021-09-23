import React from "react";
import { Wrapper, StyledLink } from "./styles";

export const Footer = ({ text, route }: TProps) => {
  return (
    <Wrapper>
      <StyledLink to={route}>{text}</StyledLink>
    </Wrapper>
  );
};
export default Footer;

export type TProps = {
  text: string;
  route?: string;
};

Footer.defaultProps = {
  route: "sign-up",
};
