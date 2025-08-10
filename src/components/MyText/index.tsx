import { TextProps } from "react-native";
import { Text } from "./styles";

interface MyTextProps extends TextProps{
    children: string;
}

export function MyText({children, ...rest}:MyTextProps){
    return(
        <Text
        {...rest}>
            {children}
        </Text>
    )
}