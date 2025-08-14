import { Control, Controller, FieldValues, Path } from "react-hook-form";
import { Container } from "./styles";
import { TInput } from "@/components/TInput";
import { TextInputProps } from "react-native";

interface InputWithControllerProps<TFieldValues extends FieldValues> extends TextInputProps {
    control: Control<TFieldValues>;
    name: Path<TFieldValues>; 
    isRequired?: boolean; 
}

export function InputWithController<TFieldValues extends FieldValues>({control, name, isRequired, ...rest}:InputWithControllerProps<TFieldValues>){

    return <Container>
        <Controller
        rules={{required: isRequired}}
        control={control}
        render={({ field: {onChange, value} }) => (
            <TInput 
            onChangeText={onChange}
            value={value}
            {...rest}/>
        )} 
        name={name}/>
    </Container>
}