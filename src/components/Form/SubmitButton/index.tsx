import { Button, TextButton, IconButton } from "./styles";

interface SubmitButtonProps{
    label: string;
}

export function SubmitButton({label}:SubmitButtonProps){
    return(
        <Button>
            <TextButton>
                {label}
            </TextButton>
            <IconButton name="arrow-right"/>
        </Button>
    )
}