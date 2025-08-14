import { TextInputProps } from 'react-native'
import {InputContainer} from './styles'

interface TInputProps extends TextInputProps{
}

export function TInput({...rest} : TInputProps){
    return(
        <InputContainer
        {...rest}/>
    )
}