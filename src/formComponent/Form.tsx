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
import FormFooter from "./footer/Footer";

interface FormFields {
    field: string | null;
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

                <FormFooter hasErrors={errors.field != null}>
                    <Buttons>
                        <Cancel>
                            <Button title="Отменить"/>
                        </Cancel>

                        <CreateCall>
                            <Button type="submit" fullWidth={false} title="Создать звонок"/>
                        </CreateCall>
                    </Buttons>
                </FormFooter>
            </FormUse>
        </FormContainer>
    )
}

export default Form;