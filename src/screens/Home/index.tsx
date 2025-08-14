import { useEffect, useState } from "react";
import { DashCardsGroup } from "../../components/DashCardsGroup";
import { Header } from "../../components/Header";
import { TransactionsList } from "../../components/TransactionsList";
import { Container } from "./styles";
import { Modal } from "react-native";
import { NewTransaction } from "@/components/Modal/NewTransaction";

export function Home(){
    const [openNewTransactionModal, setOpenNewTransactionModal] = useState(false)

    const handleOpenNewTransactionModal = () => {
        setOpenNewTransactionModal(true)
    }

    const handleCloseNewTransactionModal = () => {
        setOpenNewTransactionModal(false)
    }

    useEffect(()=>{
        console.log(openNewTransactionModal)
    },[openNewTransactionModal])

    return(
        <Container $statusModal={openNewTransactionModal}>
            <Header
            openModal={handleOpenNewTransactionModal}/>

            <DashCardsGroup/>
            
            <TransactionsList/>
            
            <Modal 
            transparent
            visible={openNewTransactionModal}
            animationType="slide"
            onRequestClose={handleCloseNewTransactionModal}>
                <NewTransaction
                onCloseModal={handleCloseNewTransactionModal}/>
            </Modal>
        </Container>
    )
}