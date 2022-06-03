import styled from 'styled-components';

export type SvgProps = {
  color: 'primary' | 'secondary';
  hoverColor: 'primary' | 'secondary';
};

export const SvgStyled = styled.svg<Partial<SvgProps>>`

`;
