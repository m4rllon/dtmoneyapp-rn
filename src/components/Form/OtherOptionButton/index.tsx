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
                {label}
            </ButtonLabel>
            <ButtonIcon name="arrow-right"/>
        </Container>
    )
}