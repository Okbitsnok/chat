import styled, {keyframes} from "styled-components";

const ShowAnimation = keyframes`
    0% {
      transform: rotateZ(0deg);
    }
  100% {
    transform: rotateZ(360deg);
  }
`;

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  background-color: rgba(1, 1, 1, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  opacity: 1;
  pointer-events: all;
  transition-duration: 0.1s;
`;


export const ChatWrapper = styled.div`
  background-color: #fff;
  width: 70%;
  position: fixed;
  bottom: 0;
  margin-left: 10%;
  box-sizing: border-box;
  

`;

export const ChatHeader = styled.div`
  display: flex;
  box-sizing: border-box;
  background-color: #fff;
  border: 1px solid #E5F1FF;
  padding: 16px 24px;
  justify-content: space-between;
`;

export const CommentWrapper = styled.div`
    display: flex;
  align-items: center;
  justify-content: center;
`;

export const ViewAll = styled.div`
  display: flex;
  align-items: center;
  &:hover {
cursor: pointer;
  }
`;

export const CommentTitle = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  color: #000000;
`;

export const CommentCount = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  color: #FF6600;
  margin-left: 16px;
`;

export const ViewTitle = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  color: #FF6600;
  margin-right: 6px;
`;


export const ContentWrapper = styled.div`
  padding-right: 5px;
`;

export const Content = styled.div`
  max-height: 650px;
  overflow-y: scroll;
  padding: 24px 24px 0 24px;
  
  ::-webkit-scrollbar {
    width: 6px;
  }
  ::-webkit-scrollbar-thumb {
    background: #E7E7E7;
    opacity: 0.5;
    border-radius: 150px;
    width: 6px;
    box-shadow: inset 1px 1px 10px #f3faf7;
  }
  
`;

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
`;

export const MainInput = styled.input`
  display: flex;
  align-items: center;
  padding: 0 50px;
  background: #E5F1FF;
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
    cursor: default;
    color: rgba(13, 13, 19, 0.6);
    box-shadow: none;
  }

  &::placeholder {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;
    color: #7d7d7d;
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

export const CommentCard = styled.div`
    margin-bottom: 32px;
  padding-right: 76px;
`;

export const CommentCardHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

export const CommentAvatarContainer = styled.div`
  position: relative;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 16px;
  
  > img {
    height: 100%;
    width: 120%;
  }
`;

export const UserInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const UserName = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: #376092;
  padding-bottom: 3px;
`;

export const CommentTime = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  color: #7D7D7D;
`;

export const CommentText = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: #333333;
`;
