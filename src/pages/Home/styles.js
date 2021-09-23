import styled from "styled-components";
import { color, flexbox, layout, space, typography } from "styled-system";

export const Wrapper = styled.div`
  max-width: 600px;
  min-height: 600px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-items: center;
  justify-content: center;
  margin: auto;
  flex-direction: column;
`;

export const Text = styled.p`
  font-weight: normal;
  text-align: left;
  margin: 0;
  ${color}
  ${flexbox}
  ${layout}
  ${space}
  ${typography}
`;
