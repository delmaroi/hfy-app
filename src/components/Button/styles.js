import styled, { css } from "styled-components";
import { flexbox, layout, space } from "styled-system";
import { Button } from "antd";

export const AlignedContentWrapper = styled.div`
  display: flex;
  align-items: center;
  color: white;
`;

export const StyledButton = styled(Button)`
  text-shadow: none;
  ${({ type }) => formatButton(type)}
  height: 32px;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0.04em;
  font-weight: 600;
  border: 1px solid #ccc;
  margin-top: 8px;
  padding-left: 8px;
  border-radius: 4px;
  align-items: center;
  color: white;
  ${flexbox}
  ${layout}
  ${space}

  i, svg {
    vertical-align: text-bottom;
    padding-right: 4px;
  }
`;

// eslint-disable-next-line consistent-return
const formatButton = (type) => {
  if (type === "primary") {
    return css`
      background-color: #453788;
      border-color: #5645aa;
      box-shadow: none;

      &:hover {
        background-color: #9a8fcc;
        box-shadow: 0px 2px 4px rgba(15, 15, 16, 0.2);
      }

      &:active {
        background-color: #342966;
        box-shadow: 0px 2px 4px rgba(15, 15, 16, 0.2);
      }

      &:focus {
        background-color: #342966;
        box-shadow: 0px 2px 4px rgba(15, 15, 16, 0.2);
      }

      &:disabled,
      &:disabled:hover {
        background-color: #bbb5dd;
        color: #fff;
      }
    `;
  }
};
