import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const Button = styled(TouchableOpacity)`
    width: 100%;
    padding: 20px 12px;
    background-color: ${({theme}) => theme.colors.accent_brand_light};
    border-radius: 6px;
    align-items: center;
`

export const TextButton = styled.Text`
    font-size: 16px;
    font-family: ${({theme}) => theme.fonts.bold};
    color: ${({theme}) => theme.colors.text_heading};
`