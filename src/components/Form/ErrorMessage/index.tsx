import { Message } from "./styles";

interface ErrorMessageProps {
    children:string
}

export function ErrorMessage({children}:ErrorMessageProps){
    return <Message>
        {children}
    </Message>
}