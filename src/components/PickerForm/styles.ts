import { Picker } from "@react-native-picker/picker";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
    width: 100%;
    height: 54px;
    background-color: ${({ theme }) => theme.colors.background_primary};
    border-radius: 6px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 ${RFValue(12)}px;
`

interface CategoryTextProps {
    $isSelected: boolean;
}

export const PickerCategory = styled(Picker)<CategoryTextProps>`
    width: 100%;
    font-size: 16px;
    color: ${
        props => props.$isSelected ? props.theme.colors.text_heading : props.theme.colors.text_span 
    };
`