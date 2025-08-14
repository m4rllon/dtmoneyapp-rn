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
import { tags } from "@/mocks/Tags";

interface TransactionCardData{
    data:TransactionProps
}

export function TransactionCard({data}:TransactionCardData){
    const valueFormat = `${data.type === TransactionType.WITHDRAWA ? '- ' : ''}` + new Intl.NumberFormat("pt-Br", { style: "currency", currency: "BRL", minimumFractionDigits: 2 }).format(
    data.value)

    const dateFormat = new Intl.DateTimeFormat("pt-Br").format(data.date)

    const tag = tags.find(tag => tag.id === data.tagId)

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
                        {tag?.name}
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