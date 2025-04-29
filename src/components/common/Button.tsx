import styled from "styled-components";
import { ButtonScheme, ButtonSize } from "../../style/theme";

interface Props{
    children: React.ReactNode;
    size: ButtonSize;
    scheme: ButtonScheme;
    disabled?: boolean;
    isLoading?: boolean;
}

function Button({children, size, scheme, disabled, isLoading}:Props) {
    return (
        <ButtonStyle size={size} scheme={scheme} disabled={disabled} isLoading={isLoading}>
            {children}
        </ButtonStyle>
    )
}

const ButtonStyle = styled.button<Omit<Props,"children">>`
    font-size: ${({theme, size})=>theme.button[size].fontSize};
    background-color: ${({theme, scheme})=>theme.buttonScheme[scheme].color};
    color: ${({theme, scheme})=> theme.buttonScheme[scheme].color};
    border: 0;
    border-radius: ${({theme})=> theme.borderRadius.default};
    opacity: ${({ disabled })=> (disabled? 0.5: 1)};
    pointer-events: ${({disabled})=> (disabled? "none": "auto")};
    cursor: ${({ disabled })=> (disabled? 'none': 'pointer')};;
`;


export default Button;