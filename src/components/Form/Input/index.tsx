import { InputProps, TypeInput } from "@/Interfaces/Input";
import { 
    Container,
    Label,
    InputContainer,
    InputIcon,
    MyInput,
} from "./styles";
import { TouchableWithoutFeedback } from "react-native";
import { useState } from "react";


export function Input({type, label, placeholderText}:InputProps){
    const [secureTextEntryState, setSecureTextEntryState] = useState(
        type === TypeInput.PASSWORD
    )

    return(
        <Container>
            <Label>
                {label.toUpperCase()}
            </Label>
            <InputContainer>
                {type === TypeInput.MAIL ? <InputIcon name="mail"/>:<></>}
                {type === TypeInput.PASSWORD ? <InputIcon name="lock"/>:<></>}
                
                <MyInput 
                placeholder={placeholderText}
                secureTextEntry={secureTextEntryState}
                keyboardType={type === TypeInput.MAIL ? 'email-address' : 'default'}/>
                
                {type === TypeInput.PASSWORD ? 
                <TouchableWithoutFeedback onPress={() => setSecureTextEntryState(prev => !prev)}>
                    <InputIcon name={secureTextEntryState ? "eye" : "eye-off"}/>
                </TouchableWithoutFeedback> : 
                <></>}
            </InputContainer>
        </Container>
    )
}