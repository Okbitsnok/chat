import React from 'react';

import {
    Form,
    InputAvatarContainer,
    InputContainer,
    InputWrapper,
    MainInput,
    SendButton,} from "components/Input/Input.styles";
import PaperPlaneIcon from "Icon/PaperPlaneIcon";
import {useForm} from "react-hook-form";


const Input = () => {

    type FormData = {
        message: string;
    }

    const {
        register,
        handleSubmit,
        reset,
    } = useForm<FormData>()

    const onSubmit = handleSubmit(data => {
        reset();
        console.log(data)
    });

    return (
        <Form onSubmit={onSubmit}>
        <InputContainer>
            <InputWrapper>
                <InputAvatarContainer>
                    <img src="https://ferret-pet.ru/wp-content/uploads/6/b/5/6b5f022448da0963245cbf3e0878dd0d.jpeg" alt="cat"/>
                </InputAvatarContainer>
                <MainInput
                    placeholder="Ваш комментарий..."
                    {...register("message")}
                />
                <SendButton>
                    <PaperPlaneIcon/>
                </SendButton>
            </InputWrapper>
        </InputContainer>
        </Form>
    );
};

export default Input;