import { Feather } from "@expo/vector-icons";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
    flex: 1;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin-top: ${RFPercentage(40)};
    border-radius: 20px 20px 0px 0px;
    gap: 24px;

    padding: 32px;

    background-color: ${({theme}) => theme.colors.background_secondary};
`

export const Header = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const Title = styled.Text`
    font-size: 20px;
    font-family: ${({theme}) => theme.fonts.bold};
    color: ${({theme}) => theme.colors.text_heading};
`

export const CloseIcon = styled(Feather)`
    font-size: 24px;
    color: ${({theme}) => theme.colors.text_heading};
`

export const InputsContainer = styled.View`
    width: 100%;
    justify-content: center;
    align-items: center;
    gap: 12px;
`

export const CategoryButtonContainer = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
`

export const Footer = styled.View`
    margin-top: ${RFValue(24)}px;
    width: 100%;
    justify-content: center;
    align-items: center;
    gap: 12px;
`