import { 
    MainContainer,
    Header,
    Footer,
    NameText,
    ValueText,
    SpanText,
    TagIcon,
    DateIcon,
 } from "./styles";

import { TransactionProps, TransactionType } from "../../Interfaces/Transaction";

interface TransactionCardData{
    data:TransactionProps
}

export function TransactionCard({data}:TransactionCardData){
    const valueFormat = `${data.type === TransactionType.WITHDRAWA ? '- ' : ''}` + new Intl.NumberFormat("pt-Br", { style: "currency", currency: "BRL", minimumFractionDigits: 2 }).format(
    data.value)

    const dateFormat = new Intl.DateTimeFormat("pt-Br").format(data.date)

    return(
        <MainContainer>
            <Header>
                <NameText>
                    {data.name}
                </NameText>
                <ValueText $type={data.type}>
                    {valueFormat}
                </ValueText>
            </Header>
            <Footer>
                <Footer>
                    <TagIcon
                    name="tag"/>
                    <SpanText>
                        {data.tag}
                    </SpanText>
                </Footer>
                <Footer>
                    <DateIcon
                    name="calendar"/>
                    <SpanText>
                        {dateFormat}
                    </SpanText>
                </Footer>
            </Footer>
        </MainContainer>
    )
}