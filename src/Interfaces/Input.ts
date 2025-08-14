import { TextInputProps } from "react-native";

export enum TypeInput {
    MAIL,
    PASSWORD,
    OTHER
}

export interface InputProps extends TextInputProps{
    type: TypeInput;
    label: string;
    placeholderText: string;
}