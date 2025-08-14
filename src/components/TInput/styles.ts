import { TextInput } from "react-native"
import styled from "styled-components/native"

export const InputContainer = styled(TextInput).attrs({
    placeholderTextColor: '#7C7C8A'
})`
    width: 100%;
    padding: 16px;
    background-color: ${({theme}) => theme.colors.background_primary};
    border-radius: 6px;

    font-size: 16px;
    font-family: ${({theme}) => theme.fonts.regular};
    color: ${({theme}) => theme.colors.text_heading};
`
