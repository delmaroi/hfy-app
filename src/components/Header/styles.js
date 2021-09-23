import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.header`
  align-items: center;
  border-bottom: 1px solid #efeef0;
  display: flex;
  height: 32px;
  justify-content: space-between;
  padding: 16px;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

export const StyledLink = styled(Link)(
  css`
    color: #786abb;
    font-size: 16px;
    padding: 8px;

    &:hover {
      color: #110e22;
    }
  `
);
