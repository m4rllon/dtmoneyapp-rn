import { TextProps } from "react-native";
import { Title } from "./styles";

interface MyTitleProps extends TextProps{
    children: string;
}

export function MyTitle({children, ...rest}:MyTitleProps){
    return(
        <Title
        {...rest}>
            {children}
        </Title>
    )
}