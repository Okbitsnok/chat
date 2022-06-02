import React from "react";
import {useForm} from "react-hook-form";
import {SubmitContainer, FormContainer, FormUse, TitleForm, Cancel, CreateCall, Buttons, Message} from "./Form.styles";
import {Button} from "../components/Button/Button";
import InCorrect from "../Icon/InCorrect";
import Correct from "../Icon/Correct";

const Form = () => {


    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm({
        mode: "onBlur"
    })

    const onSubmit = (data: any) => {
        console.log(data)
    }

    return (
        <FormContainer>
            <TitleForm>
                Общая информация
            </TitleForm>

            <FormUse onSubmit={handleSubmit(onSubmit)}>
                <input  {...register("field", {
                    required: true
                })}/>

                <SubmitContainer>
                    <div>
                        {errors?.field ?
                            <Message>
                                <InCorrect/>
                                <span>Поля заполнены некорректно</span>
                            </Message>
                            :
                            <Message>
                                <Correct/>
                                <span>Все поля заполнены корректно</span>
                            </Message>
                        }
                    </div>

                    <Buttons>
                        <Cancel>
                            <Button>
                                <div>Отменить</div>
                            </Button>
                        </Cancel>

                        <CreateCall>
                            <Button type="submit" fullWidth={false}>
                                <div>Создать звонок</div>
                            </Button>
                        </CreateCall>
                    </Buttons>
                </SubmitContainer>
            </FormUse>
        </FormContainer>
    )
}

export default Form;