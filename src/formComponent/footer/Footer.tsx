import {InCorrectMark} from "../../Icon/InCorrectMark";
import {CorrectMark} from "../../Icon/CorrectMark";
import React, {ReactElement} from "react";
import {Content, ValidateMessage, Wrapper} from "./Footer.styles";

interface Props {
    hasErrors?: boolean
    children: ReactElement
}

export default function FormFooter(props: Props) {

    const {
        hasErrors,
        children
    } = props;

    return (
        <Wrapper>
            {hasErrors != null && (
                <ValidateMessage>
                    {hasErrors ?
                        <>
                            <InCorrectMark/>
                            <span>Поля заполнены некорректно</span>
                        </>
                        :
                        <>
                            <CorrectMark/>
                            <span>Все поля заполнены корректно</span>
                        </>
                    }
                </ValidateMessage>
            )}

            <Content>{children}</Content>
        </Wrapper>
    )
}