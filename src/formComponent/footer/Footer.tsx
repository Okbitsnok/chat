import {ErrorBlock} from "../Form.styles";
import {InCorrectMark} from "../../Icon/InCorrectMark";
import {CorrectMark} from "../../Icon/CorrectMark";
import React, {ReactElement} from "react";
import {Content, Wrapper} from "./Footer.styles";

interface Props {
    hasError?: boolean
    children: ReactElement
}

export default function FormFooter(props: Props) {

    const {
        hasError,
        children
    } = props;

    return (
        <Wrapper>
            <div>
                {props.hasError != null && hasError ?
                    <ErrorBlock>
                        <InCorrectMark/>
                        <span>Поля заполнены некорректно</span>
                    </ErrorBlock>
                    :
                    <ErrorBlock>
                        <CorrectMark/>
                        <span>Все поля заполнены корректно</span>
                    </ErrorBlock>
                }
            </div>

            <Content> {children} </Content>

        </Wrapper>
    )
}