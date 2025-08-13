import { Button, TextButton, IconButton } from "./styles";
import { TouchableOpacityProps } from "react-native";

interface SubmitButtonProps extends TouchableOpacityProps {
    label: string;
}

export function SubmitButton({label, ...rest}:SubmitButtonProps){
    return(
        <Button {...rest}>
            <TextButton>
                {label}
            </TextButton>
            <IconButton name="arrow-right"/>
        </Button>
    )
}