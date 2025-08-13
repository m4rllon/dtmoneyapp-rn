import { RFPercentage } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
    flex: 1;
    justify-content: center;
    align-items: center;
    margin-top: ${RFPercentage(40)};
    border-radius: 20px 20px 0px 0px;

    background-color: ${({theme}) => theme.colors.background_primary};
`