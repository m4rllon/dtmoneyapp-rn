import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Message = styled.Text`
    font-size: ${RFValue(16)}px;
    font-family: ${({theme}) => theme.fonts.regular_italic};
    color: ${({theme}) => theme.colors.accent_red};
`