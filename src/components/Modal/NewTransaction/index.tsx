import { TouchableOpacity, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, ScrollView, Platform } from "react-native";
import { TInput } from "@/components/TInput";
import { 
    Container, 
    InputsContainer,
    Header,
    Title,
    CloseIcon,
    Footer,
    CategoryButtonContainer,
 } from "./styles";
import { PrimaryButton } from "@/components/PrimaryButton";
import { TypeTransactionButton } from "@/components/TypeTransactionButton";
import { TransactionType } from "@/Interfaces/Transaction";
import { useEffect, useState } from "react";
import { PickerForm } from "@/components/PickerForm";
import { tags } from "@/mocks/Tags";
import { TagProps } from "@/Interfaces/Tag";

interface NewTransactionProps{
    onCloseModal: () => void;
}

export function NewTransaction({onCloseModal} : NewTransactionProps){
    const [onPressDepositButton, setOnPressDepositButton] = useState(false)
    const [onPressDepositWhidrawaButton, setOnPressDepositWhidrawaButton] = useState(false)
    const [category, setCategory] = useState<string>('')
    
    const createTransaction = () => {
        onCloseModal()
    }

    const handleChooseTypeTransaction = (type: TransactionType) => {
        if(type === TransactionType.DEPOSIT) {
            setOnPressDepositButton(true)
            setOnPressDepositWhidrawaButton(false)
        } else {
            setOnPressDepositButton(false)
            setOnPressDepositWhidrawaButton(true)
        } 
    }

    return(
        <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <Container>
                        <Header>
                            <Title>
                                Nova transação
                            </Title>
                            <TouchableOpacity onPress={onCloseModal}>
                                <CloseIcon name="x"/>
                            </TouchableOpacity>
                        </Header>

                        <ScrollView>
                            <InputsContainer>
                                <TInput 
                                placeholder="Descrição"/>
                                <TInput 
                                placeholder="Preço"/>
                                <PickerForm
                                valuesList={tags}
                                selectedValue={category}
                                onValueChange={(value) => setCategory(value)}/>

                                <CategoryButtonContainer>
                                    <TypeTransactionButton
                                    press={onPressDepositButton}
                                    label="Entrada"
                                    type={TransactionType.DEPOSIT}
                                    onPress={() => handleChooseTypeTransaction(TransactionType.DEPOSIT)}/>
                                    <TypeTransactionButton
                                    press={onPressDepositWhidrawaButton}
                                    label="Saída"
                                    type={TransactionType.WITHDRAWA}
                                    onPress={() => handleChooseTypeTransaction(TransactionType.WITHDRAWA)}/>
                                </CategoryButtonContainer>
                            </InputsContainer>
                            <Footer>
                                <PrimaryButton 
                                label="Cadastrar"
                                onPress={createTransaction}/>
                            </Footer>
                        </ScrollView>
                    </Container>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}