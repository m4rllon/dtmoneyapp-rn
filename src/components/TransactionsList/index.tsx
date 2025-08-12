import { useEffect, useState } from "react";
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
import { transactions } from "@/mocks/Transactions";


export function TransactionsList(){
    const [textInput, setTextInput] = useState('')
    const [transactionsData, setTransactionsData] = useState(transactions)

    useEffect(()=>{
        if(textInput === '') setTransactionsData(transactions)
        else setTransactionsData( prev => {
            return prev.filter(item => 
                item.name.toLowerCase().includes(textInput.toLowerCase())
                || item.tag.toLowerCase().includes(textInput.toLowerCase())
            )
        })
    }, [textInput])

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
            data={transactionsData}
            keyExtractor={(item) => `${item.id}`}
            renderItem={({item}) => <TransactionCard data={item}/>}
            />
        </MainContainer>
    )
}