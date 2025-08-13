import { Modal, ModalProps, Text, TouchableOpacity } from "react-native";
import { Container } from "./styles";

interface NewTransactionProps{
    onCloseModal: () => void;
}

export function NewTransaction({onCloseModal} : NewTransactionProps){
    return(
        <Container>
            <Text>Nova transação</Text>
            <TouchableOpacity onPress={onCloseModal}>
                <Text>Fechar</Text>
            </TouchableOpacity>
        </Container>
    )
}