import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
    width: 100%;
    justify-content: start;
    align-items: start;

`

export const Label = styled.Text`
    color: ${({theme}) => theme.colors.text_span};
    font-size: ${RFValue(12)}px;
`

export const InputContainer = styled.View`
    margin-bottom: 20px;

    width: 100%;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    gap: 8px;
    padding: 14px 16px;

    border-bottom-width: 1px;
    border-color: ${({theme}) => theme.colors.border_primary};
    /* background-color: aliceblue; */
`

export const InputIcon = styled(Feather)`
    font-size: 24px;
    color: ${({theme}) => theme.colors.text_span};
`

export const MyInput = styled.TextInput.attrs({
    placeholderTextColor: '#7C7C8A',
})`
    flex:1;
    font-size: 18px;
    color: ${({theme}) => theme.colors.text_heading};
`
