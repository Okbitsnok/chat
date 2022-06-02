import React from 'react';
import {
    CommentAvatarContainer,
    CommentCardHeader, CommentText,
    CommentTime,
    UserInfoWrapper,
    UserName,
    CommentsCard,
} from "chat-component/Chat.styles";

interface DataProps {
        src: string;
        userName: string;
        date: string;
        commentText: string;
}

const CommentCard = ({src, commentText, date, userName  }: DataProps) => {
    return (
        <CommentsCard>
            <CommentCardHeader>
                <CommentAvatarContainer>
                    <img src={src} alt="cat"/>
                </CommentAvatarContainer>
                <UserInfoWrapper>
                    <UserName>
                        {userName}
                    </UserName>
                    <CommentTime>
                        {date}
                    </CommentTime>
                </UserInfoWrapper>
            </CommentCardHeader>
            <CommentText>
                {commentText}
            </CommentText>
        </CommentsCard>
    );
};

export default CommentCard;