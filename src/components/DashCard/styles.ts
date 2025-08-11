import { RFPercentage } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import Feather from '@expo/vector-icons/Feather';

interface StyleProps{
    $type?: 'DEPOSIT'|'WITHDRAWAL'|'BALANCE';
}

export const Container = styled.View<StyleProps>`
    justify-content: start;
    align-items: start;

    margin-right: 16px;

    width: 280px;
    border-radius: 6px;
    padding: 24px;
    gap: 12px;

    background-color: ${
        (props) => {
            if(props.$type === 'BALANCE') return props.theme.colors.accent_brand_dark;
            else return props.theme.colors.background_tertiary;
        }
    };
`

export const Title = styled.Text`
    color: ${({theme}) => theme.colors.text_heading};
    font-size: ${RFPercentage(2)}px;
    line-height: 24;
`

export const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;
`

export const CardIcon = styled(Feather)<StyleProps>`
    font-size: 24px;
    color: ${
        (props) => {
            if(props.$type === 'BALANCE') return props.theme.colors.text_heading;
            else if(props.$type === 'WITHDRAWAL') return props.theme.colors.accent_red_dark;
            else return props.theme.colors.accent_brand;
        }
    };
`

export const Footer = styled.View`
    justify-content: start;
    align-items: start;
    gap: 2px;
`

export const CashText = styled.Text<StyleProps>`
    font-family: ${
        (props) => {
            if(props.$type === 'BALANCE') return props.theme.fonts.regular;
            else return props.theme.fonts.bold;
        }
    };
    font-size: 24px;
    line-height: 32;
    color: ${({theme}) => theme.colors.text_heading};
`

export const DateText = styled.Text<StyleProps>`
    color: ${
        props => {
            return props.$type === 'BALANCE' ? props.theme.colors.text_heading : props.theme.colors.text_span
        }
    };
    font-size: ${RFPercentage(1.8)}px;
    line-height: 24;
`