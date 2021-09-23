import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  justify-content: center;
  margin: 16px;
`;

export const StyledLink = styled(Link)(
  css`
    color: #786abb;
    font-size: 16px;
    padding: 8px;
    font-weight: bold;

    &:hover {
      color: #110e22;
    }
  `
);
