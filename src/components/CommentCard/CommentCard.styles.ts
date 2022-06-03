import styled from "styled-components";
export const CommentsCard = styled.article`
  margin-bottom: 32px;
  padding-right: 76px;
  @media(max-width: 1440px){
    padding-right: 30px;
  }
  @media(max-width: 768px){
    padding-right: 20px;
  }
  @media(max-width: 425px){
    padding-right: 0;
  }
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
  color: var(--additional-color);
  padding-bottom: 3px;
`;

export const CommentTime = styled.time`
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  color: var(--secondary-text-color);
`;

export const CommentText = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: #333333;
`;
