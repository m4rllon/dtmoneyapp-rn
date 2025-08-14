import { TouchableOpacityProps } from "react-native";
import { Button, TextButton } from "./styles";

interface PrimaryButton extends TouchableOpacityProps{
    label: string;
}

export function PrimaryButton({label, ...rest} : PrimaryButton){
    return <Button {...rest}>
        <TextButton>
            {label}
        </TextButton>
    </Button>
}