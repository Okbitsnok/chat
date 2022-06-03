import React, {FC, MouseEventHandler, ReactElement} from 'react';
import {ButtonStyled} from './Button.styles';

export type ButtonProps = {
    title: string;
    disabled: boolean;
    className: string;
    onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
    style: React.CSSProperties;
    color: 'primary' | 'secondary' | 'additional' | 'secondary-additional';
    size: 'big' | 'medium' | 'small';
    variant: 'outlined' | 'contained';
    type: 'button' | 'submit' | 'reset';
    contrast: boolean;
    fullWidth: boolean;
    children: ReactElement
};

export const Button: FC<Partial<ButtonProps>> = (props) => {
    const {
        variant = 'contained',
        color = 'primary',
        size = 'medium',
        title = '',
        children,
        ...rest
    } = props;
    const propsWithDefaults = {...rest, color, size, variant};
    return (
        <ButtonStyled tabIndex={0} {...propsWithDefaults}>
            {title}
            {children}
        </ButtonStyled>
    );
};

Button.defaultProps = {
    type: 'button',
} as Partial<ButtonProps>;