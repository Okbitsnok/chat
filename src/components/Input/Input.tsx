import React from 'react';
import {InputAvatarContainer, InputContainer, InputWrapper, MainInput, SendButton} from "chat-component/Chat.styles";
import PaperPlaneIcon from "Icon/PaperPlaneIcon";



const Input = () => {
    return (
        <InputContainer>
            <InputWrapper>
                <InputAvatarContainer>
                    <img src="https://ferret-pet.ru/wp-content/uploads/6/b/5/6b5f022448da0963245cbf3e0878dd0d.jpeg" alt="cat"/>
                </InputAvatarContainer>
                <MainInput placeholder="Ваш комментарий..."/>
                <SendButton>
                    <PaperPlaneIcon/>
                </SendButton>
            </InputWrapper>
        </InputContainer>
    );
};

export default Input;