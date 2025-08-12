import { DashCardsGroup } from "../../components/DashCardsGroup";
import { Header } from "../../components/Header";
import { TransactionsList } from "../../components/TransactionsList";
import { Container } from "./styles";

export function Home(){
    return(
        <Container>
            <Header/>
            <DashCardsGroup/>
            <TransactionsList/>
        </Container>
    )
}