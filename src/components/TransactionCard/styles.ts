import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { TransactionType } from '@/Interfaces/Transaction'
import { Feather } from "@expo/vector-icons";

interface StylesProps {
    $type:TransactionType
}

export const MainContainer = styled.View`
    margin-bottom: 16px;
    width: 100%;
    justify-content: start;
    align-items: start;
    gap: 12px;

    background-color: ${({theme}) => theme.colors.background_tertiary};
    padding: ${RFValue(20)}px;
    border-radius: ${RFValue(6)}px;
`

export const Header = styled.View`
    justify-content: start;
    align-items: start;
    gap: 4px;
`

export const NameText = styled.Text`
    font-size: ${RFValue(16)}px;
    font-family: ${({theme}) => theme.fonts.regular};
    color: ${({theme}) => theme.colors.text_heading};
`

export const ValueText = styled.Text<StylesProps>`
    font-size: ${RFValue(24)}px;
    font-family: ${({theme}) => theme.fonts.bold};
    color: ${
        (props) => props.$type === TransactionType.WITHDRAWA ? 
            props.theme.colors.accent_red :
            props.theme.colors.accent_brand
    };
`

export const SpanText = styled.Text`
    font-size: ${RFValue(16)}px;
    font-family: ${({theme}) => theme.fonts.regular};
    color: ${({theme}) => theme.colors.text_span};
`

export const TagIcon = styled(Feather)`
    font-size: ${RFValue(16)}px;
    color: ${({theme}) => theme.colors.text_span};
`

export const DateIcon = styled(Feather)`
    font-size: ${RFValue(16)}px;
    color: ${({theme}) => theme.colors.text_span};
`

export const Footer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 4px;
`