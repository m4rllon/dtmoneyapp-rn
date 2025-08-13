export enum TypeInput {
    MAIL,
    PASSWORD,
    OTHER
}

export interface InputProps{
    type: TypeInput;
    label: string;
    placeholderText: string;
}