import React, {useState} from 'react';
import {
    ChatWrapper,
    ChatHeader,
    CommentWrapper,
    ViewAll,
    CommentTitle,
    CommentCount,
    ViewTitle,
    Content,
    Container,
    ContentWrapper,
    DarkContainer,} from "./Chat.styles";
import CloseArrowIcon from "Icon/CloseArrowIcon";
import OpenArrowIcon from "Icon/OpenArrowIcon";
import CommentCard from "../components/CommentCard";
import Input from "../components/Input";

const Chat = () => {

    const CommentData = [
        {
            src: " https://media1.giphy.com/media/8RxCFgu88jUbe/giphy.gif",
            userName: "Ким Викуленко",
            date: "21.04 Среда в 14:00",
            commentText: "Получасовой поход это не туризм. И уж подавно в кедах. Можно и " +
                "без дорогой мембраны. В смысле с дивана мне кажется." +
                " У меня есть мембранная одежда и обувь и представь себе гамаши на гортексе от" +
                " Блэк даймонд у меня тоже есть. И по мокрому лесу под дождем я ходил. ",
        },
        {
            src: " https://media4.giphy.com/media/xT77XWum9yH7zNkFW0/giphy-downsized-medium.gif",
            userName: "Ким Викуленко",
            date: "21.04 Среда в 14:00",
            commentText: "Получасовой поход это не туризм. И уж подавно в кедах. Можно и " +
                "без дорогой мембраны. В смысле с дивана мне кажется." +
                " У меня есть мембранная одежда и обувь и представь себе гамаши на гортексе от" +
                " Блэк даймонд у меня тоже есть. И по мокрому лесу под дождем я ходил. ",
        },
        {
            src: " https://media1.giphy.com/media/P97b37JwsJUcw/giphy.gif",
            userName: "Ким Викуленко",
            date: "21.04 Среда в 14:00",
            commentText: "Получасовой поход это не туризм. И уж подавно в кедах. Можно и " +
                "без дорогой мембраны. В смысле с дивана мне кажется." +
                " У меня есть мембранная одежда и обувь и представь себе гамаши на гортексе от" +
                " Блэк даймонд у меня тоже есть. И по мокрому лесу под дождем я ходил. ",
        },
        {
            src: " https://media0.giphy.com/media/l0O9zBvk5nZ71Molq/giphy.gif",
            userName: "Ким Викуленко",
            date: "21.04 Среда в 14:00",
            commentText: "Получасовой поход это не туризм. И уж подавно в кедах. Можно и " +
                "без дорогой мембраны. В смысле с дивана мне кажется." +
                " У меня есть мембранная одежда и обувь и представь себе гамаши на гортексе от" +
                " Блэк даймонд у меня тоже есть. И по мокрому лесу под дождем я ходил. ",
        },
        {
            src: " https://media0.giphy.com/media/3o7WIBndbUIDDGG9Qk/giphy.gif",
            userName: "Ким Викуленко",
            date: "21.04 Среда в 14:00",
            commentText: "Получасовой поход это не туризм. И уж подавно в кедах. Можно и " +
                "без дорогой мембраны. В смысле с дивана мне кажется." +
                " У меня есть мембранная одежда и обувь и представь себе гамаши на гортексе от" +
                " Блэк даймонд у меня тоже есть. И по мокрому лесу под дождем я ходил. ",
        },
        {
            src: " https://media1.giphy.com/media/VDHm2L9ZzI0p2/giphy.gif",
            userName: "Ким Викуленко",
            date: "21.04 Среда в 14:00",
            commentText: "Получасовой поход это не туризм. И уж подавно в кедах. Можно и " +
                "без дорогой мембраны. В смысле с дивана мне кажется." +
                " У меня есть мембранная одежда и обувь и представь себе гамаши на гортексе от" +
                " Блэк даймонд у меня тоже есть. И по мокрому лесу под дождем я ходил. ",
        },
        {
            src: " https://media3.giphy.com/media/3oz8xPIblfyMdZwM8w/giphy.gif",
            userName: "Ким Викуленко",
            date: "21.04 Среда в 14:00",
            commentText: "Получасовой поход это не туризм. И уж подавно в кедах. Можно и " +
                "без дорогой мембраны. В смысле с дивана мне кажется." +
                " У меня есть мембранная одежда и обувь и представь себе гамаши на гортексе от" +
                " Блэк даймонд у меня тоже есть. И по мокрому лесу под дождем я ходил. ",
        },

    ]

    const [isOpen, setIsOpen ] = useState(false)

    return (
        <Container>
            {isOpen && <DarkContainer/>}
            <ChatWrapper>
                <ChatHeader>
                    <CommentWrapper>
                        <CommentTitle>
                            Комментарии
                        </CommentTitle>
                        <CommentCount>
                            {CommentData.length}
                        </CommentCount>
                    </CommentWrapper>
                    <ViewAll onClick={() => {setIsOpen(!isOpen)}}>
                        {isOpen ?
                            <>
                                <ViewTitle>
                                    Скрыть
                                </ViewTitle>
                                <CloseArrowIcon/>
                            </> :
                            <>
                                <ViewTitle>
                                    Показать
                                </ViewTitle>
                                <OpenArrowIcon/>
                            </>
                        }
                    </ViewAll>
                </ChatHeader>
                    <ContentWrapper >
                        <Content isOpen={isOpen}>
                            {CommentData.map((item) => (
                                <CommentCard data={item}/>
                            ))}

                        </Content>
                        {isOpen ? <Input/>: null}
                    </ContentWrapper>
            </ChatWrapper>
        </Container>
    );


};

export default Chat;
