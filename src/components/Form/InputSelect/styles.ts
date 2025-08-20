import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import React from 'react';
import { ScrollView, View, ViewProps } from 'react-native';
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

type TPosition = {
    x: number;
    y: number;
}

interface StyleProps{
    $isActive?: boolean;
    $modalPosition?: TPosition;
}

export const Container = styled.View`
    width: 100%;
`

export const InputContianer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    padding: ${RFValue(16)}px ${RFValue(14)}px;

    background-color: ${({theme}) => theme.colors.background_primary};
    border-radius: ${RFValue(6)}px;
`

export const TextInput = styled.Text<StyleProps>`
    font-family: ${({theme}) => theme.fonts.regular};
    color: ${
        props => props.$isActive ? props.theme.colors.text_heading : props.theme.colors.text_span
    };
    font-size: ${RFValue(14)}px;
`

export const IconInput = styled(MaterialIcons)`
   color: ${
        ({theme}) => theme.colors.text_span
    };
    font-size: ${RFValue(18)}px; 
`

export const ModalItensContainer = styled.View<StyleProps>`
    width: 100%;
    height: 200px;

    padding: 0 ${RFValue(28)}px; 
    
    top:${
        props => props.$modalPosition ? RFValue(props.$modalPosition?.y-24) : 0
    };

`

export const ItensScroll = styled(ScrollView)`
border-radius: 0 0 ${RFValue(6)}px ${RFValue(6)}px;
    flex: 1;    
    background-color: ${({theme}) => theme.colors.background_primary};
`

export const ItenText = styled.Text<StyleProps>`
    font-family: ${({theme}) => theme.fonts.regular};
    color: ${
        ({theme}) => theme.colors.text_heading
    };
    font-size: ${RFValue(14)}px;

    padding: ${RFValue(16)}px ${RFValue(14)}px;
    
`
