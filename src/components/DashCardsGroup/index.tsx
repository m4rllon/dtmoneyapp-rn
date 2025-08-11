import { CardsContainer } from "./styled"
import { DashCard } from "../DashCard"

export function DashCardsGroup(){
    return(
        <CardsContainer>
                <DashCard
                refresh={new Date()}
                value={120.00}
                type="DEPOSIT"/>
                <DashCard
                refresh={new Date()}
                value={120.00}
                type="WITHDRAWAL"/>
                <DashCard
                initialDate={new Date()}
                endDate={new Date()}
                value={120.00}
                type="BALANCE"/>
            </CardsContainer>
    )
}