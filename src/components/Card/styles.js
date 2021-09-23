import styled from "styled-components";
import Card from "antd/lib/card";

export const Overlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  padding-top: 100px;
  background: #e0dfe3;
`;

export const StyledCard = styled(Card)`
  width: 440px;
  padding: 40px;
  border-radius: 8px;
  background: #fff;
`;

export const Text = styled.h1`
  text-align: center;
  font-size: 18px;
`;
