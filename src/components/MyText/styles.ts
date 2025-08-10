import styled from "styled-components/native";

export const Text = styled.Text`
    color: ${({theme}) => theme.colors.text_heading};
    font-family: ${({theme}) => theme.fonts.regular};
    font-size: 16px;
    line-height: 24;
`