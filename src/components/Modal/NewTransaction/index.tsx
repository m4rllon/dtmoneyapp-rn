import { TouchableOpacity, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, ScrollView, Platform } from "react-native";
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
import { TransactionType, TransactionListProps } from "@/Interfaces/Transaction";
import { useState } from "react";
import { PickerForm } from "@/components/PickerForm";
import { tags } from "@/mocks/Tags";
import { InputWithController } from "@/components/Form/InputWithController";
import { useForm } from "react-hook-form";
import { getTypeTransaction } from "@/utils/getTypeTransaction";

// TEMPORÁRIO
import { transactions } from "@/mocks/Transactions";

interface NewTransactionProps{
    onCloseModal: () => void;
}

interface FormData{
    name: string;
    value: string;
}

export function NewTransaction({onCloseModal} : NewTransactionProps){
    const [onPressDepositButton, setOnPressDepositButton] = useState(false)
    const [onPressDepositWhidrawaButton, setOnPressDepositWhidrawaButton] = useState(false)
    const [category, setCategory] = useState<string>('')
    const { control, handleSubmit } = useForm<FormData>()
    
    const transactionType = getTypeTransaction(onPressDepositButton, onPressDepositWhidrawaButton)

    const createTransaction = (form:FormData) => {
        if(transactionType){
            const newTrasactionData:TransactionListProps = {
                name: form.name,
                value: Number(form.value),
                date: new Date(),
                tagId: category,
                type: transactionType,
                id: transactions.length + 1
            }
            console.log(newTrasactionData)
        }
        
        // onCloseModal()
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
                                <InputWithController
                                placeholder="Descrição"
                                name="name"
                                isRequired
                                control={control}/>
                                <InputWithController
                                placeholder="Preço"
                                name="value"
                                isRequired
                                control={control}/>
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
                                onPress={handleSubmit(createTransaction)}/>
                            </Footer>
                        </ScrollView>
                    </Container>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}