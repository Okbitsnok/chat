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
    data: {
        src: string;
        userName: string;
        date: string;
        commentText: string;
}}

export default function CommentCard(props: DataProps) {
    const {data} = props
    const someDate = format(new Date(data.date), "dd.MM EEEE в hh:mm", {locale: ru})

    return (
        <CommentsCard>
            <CommentCardHeader>
                <CommentAvatarContainer>
                    <img src={data.src} alt="cat"/>
                </CommentAvatarContainer>
                <UserInfoWrapper>
                    <UserName>
                        {data.userName}
                    </UserName>
                    <CommentTime>
                        {someDate}
                    </CommentTime>
                </UserInfoWrapper>
            </CommentCardHeader>
            <CommentText>
                {data.commentText}
            </CommentText>
        </CommentsCard>
    );
};
