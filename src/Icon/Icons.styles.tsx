import styled from 'styled-components';

export type SvgProps = {
  color: 'primary' | 'secondary';
  hoverColor: 'primary' | 'secondary';
  topdown: boolean
};

export const SvgStyled = styled.svg<Partial<SvgProps>>`
  path {
    fill: #ff6600;
  } 
  transform: rotate( ${({topdown}) => topdown ? 0 : 180 }deg);

`;
