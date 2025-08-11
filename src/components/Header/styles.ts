import styled from "styled-components/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { Ionicons } from '@expo/vector-icons'

export const Container = styled.View`
    width: 100%;
    height: ${RFValue(220)};

    flex-direction: column;
    justify-content: start;
    align-items: start;

    padding-top: ${RFPercentage(8)}px;

    background-color: ${({theme}) => theme.colors.background_primary};
`

export const MenuContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    
    width: 100%;
    
    padding: 0 ${RFPercentage(3)}px;
`

export const TitleContainer = styled.View`
    justify-content: center;
    align-items: start;
`

export const InfosContainer = styled.View`
    flex-direction: row;
    justify-content: start;
    align-items: center;
    gap: ${RFPercentage(1)}px;

    background-color: ${({theme}) => theme.colors.background_primary};
`

export const IconExit = styled(Ionicons)`
    font-size: ${RFPercentage(2)};
    color: ${({theme}) => theme.colors.text_span};
`

export const Text = styled.Text`
    color: ${({theme}) => theme.colors.text_span};
    font-family: ${({theme}) => theme.fonts.regular};
    font-size: ${RFPercentage(2)}px;
    line-height: 24;
`

export const Title = styled.Text`
    color: ${({theme}) => theme.colors.text_heading};
    font-family: ${({theme}) => theme.fonts.bold};
    font-size: ${RFPercentage(3)}px;
    line-height: 32;
`

export const Button = styled.TouchableOpacity`
    background-color: ${({theme}) => theme.colors.accent_brand_light};

    height: ${RFPercentage(5.8)}px;
    width: ${RFPercentage(17)}px;
    border-radius: ${RFPercentage(1)}px;

    justify-content: center;
    align-items: center;
`

export const TextButton = styled.Text`
    color: ${({theme}) => theme.colors.text_heading};
    font-family: ${({theme}) => theme.fonts.bold};
    font-size: ${RFPercentage(2)}px;
    line-height: 24;
`
