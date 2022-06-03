import styled from "styled-components";

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  padding: 16px;
  background: white;
  margin-top: 100px;
  border-radius: 0 0 8px 8px;
`

export const Content = styled.div`
  margin-right: 0;
  margin-left: auto;
`

export const ValidateMessage = styled.p`
  margin-left: 24px;
  
  svg {
    width: 12px;
    height: 12px;
    margin-right: 16px;
  }
  
  span {
    font-family: 'Nunito Sans', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: #333333;
  }
`