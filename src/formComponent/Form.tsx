import React from "react";
import {useForm} from "react-hook-form";
import {
    FormContainer,
    FormUse,
    Cancel,
    CreateCall,
    Buttons,
    FormInfo
} from "./Form.styles";
import {Button} from "../components/Button/Button";
import Footer from "./footer";

interface FormFields {
    field: string | boolean;
}

const Form = () => {

    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm<FormFields>({
        mode: "onBlur"
    })

    const onSubmit = (data: FormFields ) => {
        console.log(data)
        console.log(errors)
    }

    return (
        <FormContainer>
            <FormInfo>
                Общая информация
            </FormInfo>

            <FormUse onSubmit={handleSubmit(onSubmit)}>
                <input  {...register("field", {
                    required: true
                })}/>

                <Footer errorBool={!!errors.field}>
                    <Buttons>
                        <Cancel>
                            <Button title="Отменить"/>
                        </Cancel>

                        <CreateCall>
                            <Button type="submit" fullWidth={false} title="Создать звонок"/>
                        </CreateCall>
                    </Buttons>
                </Footer>
            </FormUse>
        </FormContainer>
    )
}

export default Form;