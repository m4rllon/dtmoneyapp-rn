import { DashCardsGroup } from "../../components/DashCardsGroup";
import { Header } from "../../components/Header";
import { Container } from "./styles";

export function Home(){
    return(
        <Container>
            <Header/>
            <DashCardsGroup/>
        </Container>
    )
}