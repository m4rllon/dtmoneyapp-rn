import styled from "styled-components/native";

interface StyleProps{
    $statusModal: boolean;
}

export const Container = styled.View<StyleProps>`
    flex: 1;;
    align-items: center;

    width: 100%;

    background-color: ${({theme}) => theme.colors.background_secondary};
    ${props => props.$statusModal ? 'filter: brightness(50%);': ''}
`;