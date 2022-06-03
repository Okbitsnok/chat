import {InCorrectMark} from "../../Icon/InCorrectMark";
import {CorrectMark} from "../../Icon/CorrectMark";
import React, {ReactElement} from "react";
import {Content, ValidateMessageContainer, Wrapper} from "./Footer.styles";

interface Props {
    hasErrors?: boolean | null
    children: ReactElement
}

export default function FormFooter(props: Props) {

    const {
        hasErrors = null,
        children
    } = props;

    if (props.hasErrors != null && hasErrors) {
        return (
            <Wrapper>
                <ValidateMessageContainer>
                    <InCorrectMark/>
                    <span>Поля заполнены некорректно</span>
                </ValidateMessageContainer>

                <Content> {children} </Content>

            </Wrapper>
        )
    } else if (props.hasErrors != null && !hasErrors) {
        return (
            <Wrapper>
                <ValidateMessageContainer>
                    <CorrectMark/>
                    <span>Все поля заполнены корректно</span>
                </ValidateMessageContainer>
                <Content> {children} </Content>

            </Wrapper>
        )
    }

    return (
        <Wrapper>
            <Content> {children} </Content>
        </Wrapper>
    );
}