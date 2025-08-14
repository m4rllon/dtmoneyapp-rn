import { Text, TouchableOpacity } from "react-native";
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
import { useState } from "react";

interface NewTransactionProps{
    onCloseModal: () => void;
}

export function NewTransaction({onCloseModal} : NewTransactionProps){
    const createTransaction = () => {
        onCloseModal()
    }

    const [onPressDepositButton, setOnPressDepositButton] = useState(false)
    const [onPressDepositWhidrawaButton, setOnPressDepositWhidrawaButton] = useState(false)

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
        <Container>
            <Header>
                <Title>
                    Nova transação
                </Title>
                <TouchableOpacity onPress={onCloseModal}>
                    <CloseIcon name="x"/>
                </TouchableOpacity>
            </Header>

            <InputsContainer>
                <TInput 
                placeholder="Descrição"/>
                <TInput 
                placeholder="Preço"/>
                <TInput 
                placeholder="Categoria"/>
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
        </Container>
    )
}