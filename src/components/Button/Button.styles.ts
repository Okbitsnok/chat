import styled, {css} from 'styled-components';

const baseButtonMixin = () => css`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  line-height: 1.563rem;
  border-radius: 0.5rem;
  font-weight: 700;
  padding: 0.575rem 1rem;
  border: 0.125rem solid;
  cursor: pointer;

  > svg {
    margin-right: 0.5rem;
  }

  &:focus {
    outline: none;
    box-shadow: rgba(100, 100, 111, 0.2) 0 7px 29px 0;
  }
`;

const containedButtonMixin = (
  color: string,
  hoverColor: string,
  activeColor?: string
) => css`
  color: var(--primary-secondary-color);
  border-color: var(${color});
  background-color: var(${color});

  &:hover {
    border-color: var(${hoverColor});
    background-color: var(${hoverColor});
  }

  &:active {
    border-color: var(${activeColor});
    background-color: var(${activeColor});
  }

  > svg {
    path {
      fill: var(--primary-secondary-color);
    }
  }
`;

const outlinedButtonMixin = (
  color: string,
  hoverColor: string,
  activeColor?: string
) => css`
  color: var(${color});
  border-color: var(${color});
  background-color: var(--primary-secondary-color);

  > svg {
    path {
      fill: var(${color});
    }
  }

  &:hover {
    color: var(--primary-secondary-color);
    background-color: var(${hoverColor});
    border-color: var(${hoverColor});

    > svg {
      path {
        fill: var(--primary-secondary-color);
      }
    }
  }

  &:active {
    border-color: var(${activeColor});
    background-color: var(${activeColor});
  }
`;

type ButtonProps = {
  variant: string;
  color: string;
  contrast: boolean;
  fullWidth: boolean;
};

export const buttonMixin = (props: Partial<ButtonProps>) => css`
  ${baseButtonMixin()}

  ${props.color === 'primary' &&
  props.variant === 'contained' &&
  containedButtonMixin('--primary-color', '--primary-color-accent')}

  ${props.color === 'primary' &&
  props.variant === 'outlined' &&
  outlinedButtonMixin('--primary-color', '--primary-color-accent')}

  ${props.color === 'secondary' &&
  props.variant === 'contained' &&
  containedButtonMixin('--secondary-color', '--secondary-color-accent')}

  ${props.color === 'secondary' &&
  props.variant === 'outlined' &&
  outlinedButtonMixin('--secondary-color', '--secondary-color-accent')}

  ${props.color === 'additional' &&
  props.variant === 'contained' &&
  containedButtonMixin('--additional-color', '--additional-color-accent')}

  ${props.color === 'additional' &&
  props.variant === 'outlined' &&
  outlinedButtonMixin('--additional-color', '--additional-color-accent')}

  ${props.contrast &&
  css`
    color: var(--text-color);

    > svg {
      path {
        fill: var(--text-color);
      }
    }
  `}

  ${props.fullWidth &&
  css`
    width: 100%;
  `}
  
  &:disabled {
    cursor: not-allowed;
  }
`;

export const ButtonStyled = styled.button<Partial<ButtonProps>>`
  ${(props) => buttonMixin(props)}
`;
