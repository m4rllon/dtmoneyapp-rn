import { RFPercentage } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const CardsContainer = styled.ScrollView.attrs({
    horizontal: true,
    showsHorizontalScrollIndicator: false,
    contentContainerStyle: {paddingLeft: 24, paddingRight: 16}
})`
    position:absolute;
    flex-direction: row;
    margin-top: ${RFPercentage(20)}px;
`