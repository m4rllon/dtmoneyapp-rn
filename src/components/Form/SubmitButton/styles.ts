import { Feather } from "@expo/vector-icons";
import styled from "styled-components/native";

export const Button = styled.TouchableOpacity`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 54px;
    padding: 0 20px;
    background-color: ${({theme}) => theme.colors.accent_brand_light};
    border-radius: 6px;
`

export const TextButton = styled.Text`
    font-size: 16px;
    color: ${({theme}) => theme.colors.text_heading};
`

export const IconButton = styled(Feather)`
    font-size: 24px;
    color: ${({theme}) => theme.colors.text_heading};
`