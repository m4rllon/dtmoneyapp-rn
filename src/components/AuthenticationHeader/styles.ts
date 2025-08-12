import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
    width: '100%';
    height: ${RFValue(124)}px;

    flex-direction: row;
    justify-content: center;
    align-items: flex-end;

    padding-bottom: 16px;

    gap: ${RFValue(16)}px;
`

export const LogoIcon = styled.Image.attrs({
    source: require("@/assets/IgniteSimbolLarge.png")
})``

export const Title = styled.Text`
    font-size: ${RFValue(24)}px;
    font-family: ${({theme}) => theme.fonts.bold};
    line-height: ${RFValue(32)};
    color: ${({theme}) => theme.colors.text_heading};
`