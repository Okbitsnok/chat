import {ErrorBlock} from "../Form.styles";
import {InCorrectMark} from "../../Icon/InCorrectMark";
import {CorrectMark} from "../../Icon/CorrectMark";
import React, {FC, ReactElement} from "react";
import {FormFooter} from "./Footer.styles";

interface FormFields {
    errorBool: boolean
    children: ReactElement
}

const Footer: FC<Partial<FormFields>> = (props) => {

    const {
        errorBool,
        children
    } = props;

    return (
        <FormFooter>
            <div>
                {errorBool ?
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
            {children}
        </FormFooter>
    )
}

export default Footer;