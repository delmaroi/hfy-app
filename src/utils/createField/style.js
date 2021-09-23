import styled from "styled-components";
import { color, flexbox, layout, space, typography } from "styled-system";

export const Space = styled.div`
  height: 8px;
`;

export const Label = styled.p`
  color: #0f0f10;
  font-weight: bold;
  text-align: left;
  margin: 8px 0;
  display: flex;
  ${color}
  ${flexbox}
  ${layout}
  ${space}
  ${typography}
`;

export const FieldWrap = styled.div`
  display: block;
  position: relative;
  width: 100%;
`;

export const ErrorText = styled.p`
  color: red;
  margin: 4px 0;
`;
