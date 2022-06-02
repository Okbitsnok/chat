import {SvgStyled} from './Icons.styles';

interface IconProps {
    isOpen: boolean
}

export const ChevronIcon = ({isOpen}: IconProps) => {
  return (
    <SvgStyled
        topdown={isOpen}
      width="12"
      height="7"
      viewBox="0 0 12 7"
      stroke="none"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M1 0.910156L6 5.91016L11 0.910156" />
    </SvgStyled>
  );
};
