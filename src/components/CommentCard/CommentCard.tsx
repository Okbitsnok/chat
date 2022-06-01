import React from 'react';
import {
    CommentAvatarContainer,
    CommentCardHeader, CommentText,
    CommentTime,
    UserInfoWrapper,
    UserName,
    CommentCard,
} from "chat-component/Chat.styles";

interface DataProps {
    data: {
        src: string;
        userName: string;
        date: string;
        commentText: string;
    }
}

const CommentCards = ({ data }: DataProps) => {
    return (
        <CommentCard>
            <CommentCardHeader>
                <CommentAvatarContainer>
                    <img src={data.src} alt="cat"/>
                </CommentAvatarContainer>
                <UserInfoWrapper>
                    <UserName>
                        {data.userName}
                    </UserName>
                    <CommentTime>
                        {data.date}
                    </CommentTime>
                </UserInfoWrapper>
            </CommentCardHeader>
            <CommentText>
                {data.commentText}
            </CommentText>
        </CommentCard>
    );
};

export default CommentCards;