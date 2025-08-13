import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    justify-content: start;
    align-items: center;

    background-color: ${({theme}) => theme.colors.background_primary};
`

export const Form = styled.View`
    width: 100%;
    padding: ${RFValue(32)}px;
`

export const Footer = styled.View`
    width: 100%;
    padding: 0 32px;
    gap: 16px;
`

export const SubText = styled.Text`
    font-size: 16px;
    color: ${({theme}) => theme.colors.text_span};
` 
