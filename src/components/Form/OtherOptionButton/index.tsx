import { TouchableOpacityProps } from "react-native";
import { 
    Container,
    ButtonLabel,
    ButtonIcon,
 } from "./styles";

interface OtherOptionButtonProps extends TouchableOpacityProps {
    label: string;
}

export function OtherOptionButton({label, ...rest}:OtherOptionButtonProps){
    return(
        <Container {...rest}>
            <ButtonLabel>
                Acessar
            </ButtonLabel>
            <ButtonIcon name="arrow-right"/>
        </Container>
    )
}