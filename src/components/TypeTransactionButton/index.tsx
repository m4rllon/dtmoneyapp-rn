import { TouchableOpacityProps } from "react-native";
import { 
    ButtonContainer,
    ButtonIcon,
    ButtonText,
 } from "./styles";
import { TransactionType } from "@/Interfaces/Transaction";

interface TypeTransactionButtonProps extends TouchableOpacityProps{
    label: string;
    type: TransactionType;
    press: boolean;
}

export function TypeTransactionButton({label, type, press, ...rest} : TypeTransactionButtonProps){
    const nameIcon = (type === TransactionType.DEPOSIT) ? 'arrow-up-circle' : 'arrow-down-circle'
    
    return(
        <ButtonContainer 
        {...rest}
        $type={type}
        $press={press}>
            <ButtonIcon 
            name={nameIcon}
            $type={type}
            $press={press}/>
            <ButtonText>
                {label}
            </ButtonText>
        </ButtonContainer>
    )
}