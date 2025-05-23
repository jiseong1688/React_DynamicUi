import { forwardRef } from "react";
import styled from "styled-components";
import { ButtonScheme, ButtonSize } from "../../style/theme";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    children: React.ReactNode;
    size: ButtonSize;
    scheme: ButtonScheme;
    disabled?: boolean;
    isLoading?: boolean;
    onClick?: ()=> void;
}

const Button = forwardRef<HTMLButtonElement, Props>(
    ({ size, scheme, isLoading, children, disabled, onClick, type="button", ...rest }, ref) => {
    return (
        <ButtonStyle type={type} size={size} scheme={scheme} disabled={disabled} isLoading={isLoading} onClick={onClick}>
            {children}
        </ButtonStyle>
    )}
)

const ButtonStyle = styled.button<Omit<Props,"children">>`
    font-size: ${({theme, size})=>theme.button[size].fontSize};
    padding: ${({theme, size}) => theme.button[size].padding};
    background-color: ${({theme, scheme})=>theme.buttonScheme[scheme].backgroundColor};
    color: ${({theme, scheme})=> theme.buttonScheme[scheme].color};
    border: 0;
    border-radius: ${({theme})=> theme.borderRadius.default};
    opacity: ${({ disabled })=> (disabled? 0.5: 1)};
    pointer-events: ${({disabled})=> (disabled? "none": "auto")};
    cursor: ${({ disabled })=> (disabled? 'none': 'pointer')};
`;


export default Button;