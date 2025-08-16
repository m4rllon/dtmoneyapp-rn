import { Control, Controller, FieldValues, Path } from "react-hook-form";
import { Container } from "./styles";
import { TInput } from "@/components/TInput";
import { TextInputProps } from "react-native";
import { ErrorMessage } from "../ErrorMessage";

interface InputWithControllerProps<TFieldValues extends FieldValues> extends TextInputProps {
    control: Control<TFieldValues>;
    name: Path<TFieldValues>; 
    error?: string;
}

export function InputWithController<TFieldValues extends FieldValues>({control, name, error, ...rest}:InputWithControllerProps<TFieldValues>){

    return <Container>
        <Controller
        control={control}
        render={({ field: {onChange, value} }) => (
            <TInput 
            onChangeText={onChange}
            value={value}
            {...rest}/>
        )} 
        name={name}/>
        { error && <ErrorMessage>{error}</ErrorMessage>}
    </Container>
}