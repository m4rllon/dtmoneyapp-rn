import { useState } from "react";
import { 
    MainContainer,
    Header,    
    Title,
    AuxText,
    InputContainer,
    Input,
    TransactionsScroll,
} from "./styles";
import { TransactionCard } from "../TransactionCard";
import { TransactionListProps, TransactionType } from "../../Interfaces/Transaction";

const transactions:TransactionListProps[] = [
    {
        id: 1,
        type: TransactionType.WITHDRAWA,
        name: 'Hamburguer',
        value: 59.00,
        tag: 'Alimentação',
        date: new Date()
    },
    {
        id: 2,
        type: TransactionType.DEPOSIT,
        name: 'Computador',
        value: 1000,
        tag: 'Veda',
        date: new Date()
    },
    {
        id: 3,
        type: TransactionType.WITHDRAWA,
        name: 'Aluguel do apartamento',
        value: 1200,
        tag: 'Casa',
        date: new Date()
    },
    {
        id: 4,
        type: TransactionType.DEPOSIT,
        name: 'Desenvolvimento de site',
        value: 8000,
        tag: 'Venda',
        date: new Date()
    },
]

export function TransactionsList(){
    const [textInput, setTextInput] = useState('')

    return (
        <MainContainer>
            <Header>
                <Title>
                    Transações
                </Title>

                <AuxText>
                    4 itens
                </AuxText>
            </Header>
            <InputContainer>
                <Input
                onChangeText={(text) => setTextInput(text)}
                placeholder="Busque uma transação."
                defaultValue={textInput}/>
            </InputContainer>
            <TransactionsScroll
            data={transactions}
            keyExtractor={(item) => `${item.id}`}
            renderItem={({item}) => <TransactionCard data={item}/>}
            />
        </MainContainer>
    )
}