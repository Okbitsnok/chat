import styled from "styled-components";

export const Form = styled.form``;

export const InputContainer = styled.div`
  padding: 0 24px 24px 24px;

  &:before {
    background: linear-gradient(180deg,hsla(0,0%,100%,.2),#fff);
    bottom: 70px;
    content: "";
    height: 34px;
    left: 0;
    position: absolute;
    width: 100%;
  }
`;

export const InputWrapper = styled.div`
  position: relative;
  display: flex;

  box-sizing: border-box;
  border-radius: 8px;

  width: 100%;
  align-items: center;


  > svg {
    position: absolute;
    cursor: pointer;
  }

  &:hover {
    box-shadow: 0 2px 7px rgba(9, 6, 57, 0.2);
  }
`;

export const SendButton = styled.button`
  position: absolute;
  right: 10px;
  border: none;
  box-shadow: none;
  cursor: pointer;
  outline: none;
  background: none;

  > svg path {
    fill: var(--additional-color);
  }
`;

export const MainInput = styled.input`
  display: flex;
  align-items: center;
  padding: 0 50px;
  background: var(--scecondary-additional-color);
  border-radius: 8px;
  font-style: normal;
  line-height: 22px;
  color: #333333;
  box-sizing: border-box;
  border: none;
  font-size: 16px;
  font-weight: 400;
  height: 48px;
  width: 100%;
  

  &:focus {
    outline: none;
    box-shadow: 0 2px 7px rgba(9, 6, 57, 0.2);

  }

  &:disabled {
    cursor: not-allowed;
    box-shadow: none;
  }

  &::placeholder {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;
    color: var(--secondary-text-color);
  }
`;

export const InputAvatarContainer = styled.div`
  margin-left: 16px;
  height: 18px;
  width: 18px;
  border-radius: 50%;
  overflow: hidden;
  position: absolute;

  > img {
    height: 100%;
    width: 100%;
  }
`;