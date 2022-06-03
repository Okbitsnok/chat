import React from 'react';
import {
    CommentAvatarContainer,
    CommentCardHeader, CommentText,
    CommentTime,
    UserInfoWrapper,
    UserName,
    CommentsCard,
} from "components/CommentCard/CommentCard.styles";

import {format} from "date-fns"
import ru from "date-fns/locale/ru"

interface DataProps {
    src: string;
    userName: string;
    date: string;
    commentText: string;
}

export default function CommentCard(props: DataProps) {
    const {src, commentText, date, userName} = props
    const someDate = format(new Date(date), "dd.MM EEEE в hh:mm", {locale: ru})

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
                        {someDate}
                    </CommentTime>
                </UserInfoWrapper>
            </CommentCardHeader>
            <CommentText>
                {commentText}
            </CommentText>
        </CommentsCard>
    );
};
