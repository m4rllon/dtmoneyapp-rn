import { 
    Container,
    Title,
    DateText,
    Header,
    CardIcon,
    Footer,
    CashText,
 } from "./styles";

interface DashCardProps {
    type: 'DEPOSIT'|'WITHDRAWAL'|'BALANCE';
    value: number;
    refresh?: Date;
    initialDate?: Date;
    endDate?: Date;
}

export function DashCard({type, value, refresh, initialDate, endDate}:DashCardProps){
    const titleCard = () => {
        if(type === 'DEPOSIT') return 'Entradas';
        else if(type === 'WITHDRAWAL') return 'Saídas';
        else return 'Total';
    }

    const typeIconCard = () => {
        if(type === 'DEPOSIT') return 'arrow-up-circle';
        else if(type === 'WITHDRAWAL') return 'arrow-down-circle';
        else return 'dollar-sign';
    }

    const CashNumber = new Intl.NumberFormat("pt-Br", { style: "currency", currency: "BRL", minimumFractionDigits: 2 }).format(
    value)

    const RefreshDateFormat = () => {
        if(type === 'BALANCE'){
            return new Intl.DateTimeFormat("pt-Br").format(refresh) + ' até ' + new Intl.DateTimeFormat("pt-Br").format(refresh)
        }
        else {
            return `Última ${type === 'DEPOSIT' ? 'entrada' : 'saída'} em ` + new Intl.DateTimeFormat("pt-Br", {
                day: "numeric",
                month: "long",
            }).format(refresh)
        } 
    }

    return(
        <Container $type={type}>
            <Header>
                <Title>{titleCard()}</Title>
                <CardIcon 
                $type={type}
                name={typeIconCard()}/>
            </Header>
            <Footer>
                <CashText $type={type}>
                    {CashNumber}
                </CashText>
                <DateText $type={type}>
                    {RefreshDateFormat()}
                </DateText>
            </Footer>
        </Container>
    )
}