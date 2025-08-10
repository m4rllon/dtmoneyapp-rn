import styled from "styled-components/native";

export const Title = styled.Text`
    color: ${({theme}) => theme.colors.text_heading};
    font-family: ${({theme}) => theme.fonts.bold};
    font-size: 24px;
    line-height: 30;
`