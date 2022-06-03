import styled from "styled-components";

export const Container = styled.div``;

export const BackgroundContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  background-color: rgba(1, 1, 1, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  opacity: 1;
  pointer-events: all;

`;

export const ChatWrapper = styled.div`
  background-color: var(--additional-color-contrast);
  width: 71%;
  position: fixed;
  bottom: 0;
  margin-left: 80px;
  box-sizing: border-box;
  @media(max-width: 1024px){
    width: 100%;
    margin-left: 0;
  }

`;

export const ChatHeader = styled.div`
  display: flex;
  box-sizing: border-box;
  background-color: var(--additional-color-contrast);
  border: 1px solid var(--scecondary-additional-color);
  border-top: 2px solid var(--scecondary-additional-color);
  padding: 16px 24px;
  justify-content: space-between;
`;

export const CommentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ViewAll = styled.button`
  display: flex;
  align-items: center;
  border: none;
  box-shadow: none;
  cursor: pointer;
  outline: none;
  background: none;
`;

interface ChevronProps {
    topdown: boolean
}

export const ChevronWrapper = styled.div<ChevronProps>`
  transform: rotate( ${({topdown}) => topdown ? 0 : 180 }deg);
  
  > svg path {
    fill: var(--primary-color);
  }
`;

export const CommentTitle = styled.span`
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
  color: var(--primary-color);
  margin-left: 16px;
`;

export const ViewTitle = styled.span`
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  color: var(--primary-color);
  margin-right: 8px;
  
`;

export const ContentWrapper = styled.div`
  padding-right: 5px;
`;

interface ContentProps {
    isOpen: boolean;
}

export const Content = styled.div<ContentProps>`
  max-height: ${({isOpen}) => isOpen ? 650 : 0  }px;
  overflow-y: scroll;

  padding: ${({isOpen}) => isOpen ? 24 : 0  }px 24px 0 24px;

  transition-duration: 0.6s;
  
  @media (max-height: 1000px){
    max-height: ${({isOpen}) => isOpen ? 700 : 0  }px;
  }
  @media (max-height: 950px){
    max-height: ${({isOpen}) => isOpen ? 650 : 0  }px;
  }
  @media (max-height: 810px){
    max-height: ${({isOpen}) => isOpen ? 500 : 0  }px;
  }
  @media (max-height: 700px){
    max-height: ${({isOpen}) => isOpen ? 350 : 0  }px;
  }
  @media (max-height: 510px){
    max-height: ${({isOpen}) => isOpen ? 300 : 0  }px;
  }

  ::-webkit-scrollbar {
    width: 6px;
  }
  ::-webkit-scrollbar-thumb {
    background: var(--primary-border-color);
    opacity: 0.5;
    border-radius: 150px;
    width: 6px;
    box-shadow: inset 1px 1px 10px #f3faf7;
  }
`;

