import { useEffect, useState } from "react";
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
import { InputWithController } from "@/components/Form/InputWithController";
import { PickerForm } from "@/components/PickerForm";

import { getTypeTransaction } from "@/utils/getTypeTransaction";
import { TransactionType, TransactionListProps } from "@/Interfaces/Transaction";
import { tags } from "@/mocks/Tags";
import { transactions } from "@/mocks/Transactions"; // TEMPORÁRIO

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { ErrorMessage } from "@/components/Form/ErrorMessage";
import { InputSelect } from "@/components/Form/InputSelect";

interface NewTransactionProps{
    onCloseModal: () => void;
}

interface FormData{
    name: string;
    value: number;
}

type TData = {
    id: string;
    name: string;
}

const schema = yup.object({
  name: yup.string()
    .required('Informe uma descrição.'),
  value: yup.number()
    .positive('O valor da trasanção deve ser positivo')
    .typeError('Informe um valor numérico')
    .required('Informe um valor.'),
})

export function NewTransaction({onCloseModal} : NewTransactionProps){
    const [onPressDepositButton, setOnPressDepositButton] = useState(false)
    const [onPressDepositWhidrawaButton, setOnPressDepositWhidrawaButton] = useState(false)
    const [category, setCategory] = useState<TData>()
    const [categoryErrorMessage, setCategoryErrorMessage] = useState<string | undefined>()
    const [typeErrorMessage, setTypeErrorMessage] = useState<string | undefined>()

    const { 
        control, 
        handleSubmit,
        formState: { errors } } = useForm<FormData>({
            resolver: yupResolver(schema),
        })
    
    const transactionType = getTypeTransaction(onPressDepositButton, onPressDepositWhidrawaButton)

    const createTransaction = (form:FormData) => {
        if(transactionType && category){
            const newTrasactionData:TransactionListProps = {
                name: form.name,
                value: Number(form.value),
                date: new Date(),
                tagId: category?.id,
                type: transactionType,
                id: transactions.length + 1 //TEMPORÁRIO
            }
            console.log(newTrasactionData)
            onCloseModal()
        }
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

    const handleChooseCategory = (data:TData) => {
        setCategory(data)
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
                                control={control}
                                autoCapitalize='sentences'
                                autoCorrect={false}
                                error={errors.name?.message}/>
                                <InputWithController
                                placeholder="Preço"
                                name="value"
                                control={control}
                                keyboardType='numeric'
                                error={errors.value?.message}/>

                                <InputSelect
                                data={tags}
                                onChooseOption={handleChooseCategory}/>

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
                                {typeErrorMessage && <ErrorMessage>{typeErrorMessage}</ErrorMessage>}

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