import React from 'react';

import {
    Form,
    AvatarContainer,
    Container,
    Wrapper,
    MainInput,
    SendButton,} from "components/Input/Input.styles";
import PaperPlaneIcon from "Icon/PaperPlaneIcon";
import {useForm} from "react-hook-form";

type FormData = {
    message: string;
}

const Input = () => {

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
        <Container>
            <Wrapper>
                <AvatarContainer>
                    <img src="https://ferret-pet.ru/wp-content/uploads/6/b/5/6b5f022448da0963245cbf3e0878dd0d.jpeg" alt="cat"/>
                </AvatarContainer>
                <MainInput
                    placeholder="Ваш комментарий..."
                    {...register("message")}
                />
                <SendButton>
                    <PaperPlaneIcon/>
                </SendButton>
            </Wrapper>
        </Container>
        </Form>
    );
};

export default Input;