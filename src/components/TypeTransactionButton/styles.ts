import { Feather } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { TransactionType } from "@/Interfaces/Transaction";

interface StylesProps{
    $type: TransactionType;
    $press: boolean;
}

export const ButtonContainer = styled(TouchableOpacity)<StylesProps>`
    flex: 1;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 24px 16px;
    gap: 8px;

    background-color: ${
        props => {
            if(props.$press){
                 return props.$type === TransactionType.DEPOSIT ? props.theme.colors.accent_brand_light : props.theme.colors.accent_red
            } else {
                return props.theme.colors.background_tertiary
            }
        }
    };
    border-radius: 6px;
`

export const ButtonIcon = styled(Feather)<StylesProps>`
    font-size: 24px;
    color: ${
        props => {
            if(props.$press){
                return props.theme.colors.text_heading
            } else {
                return props.$type === TransactionType.DEPOSIT ? props.theme.colors.accent_brand_light : props.theme.colors.accent_red
            }
        }
    };
`

export const ButtonText = styled.Text`
    font-family: ${({theme}) => theme.fonts.regular};
    color:  ${({theme}) => theme.colors.text_heading};
    font-size: 16px;
`