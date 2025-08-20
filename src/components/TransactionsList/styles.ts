import { TransactionListProps } from "@/Interfaces/Transaction";
import { FlatList, FlatListProps } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const MainContainer = styled.View`
    width: 100%;
    flex: 1;
    justify-content: center;
    align-items: center;
    gap: ${RFValue(8)}px;
    margin-top: ${RFPercentage(8)};
    margin-bottom: ${RFPercentage(9)};
    padding: 0 24px;
`

export const Header = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const Title = styled.Text`
    color: ${({theme}) => theme.colors.text_heading};
    font-family: ${({theme}) => theme.fonts.bold};
    font-size: ${RFValue(18)}px;
`

export const AuxText = styled.Text`
    color: ${({theme}) => theme.colors.text_span};
    font-family: ${({theme}) => theme.fonts.regular};
    font-size: ${RFValue(16)}px;
`

export const InputContainer = styled.View`
    width: 100%;
    background-color: ${({theme}) => theme.colors.background_primary};
    border-bottom-width: 1px;
    border-color: ${({theme}) => theme.colors.border_primary};
`

export const Input = styled.TextInput.attrs({
    placeholderTextColor: '#7C7C8A',
})`
    padding: ${RFValue(11)}px ${RFValue(16)}px;
    color: ${({theme}) => theme.colors.text_span};
    font-size: ${RFValue(16)}px;
`

export const TransactionsScroll = styled(
    FlatList as new (props: FlatListProps<TransactionListProps>) => FlatList<TransactionListProps>
).attrs({
    showsVerticalScrollIndicator: false
})`
    width: 100%;
    height: ${RFPercentage(45)};
`