import { Image, View } from "react-native";
import { 
    Button, 
    Container, 
    MenuContainer, 
    TextButton, 
    Title,
    InfosContainer,
    TitleContainer,
    IconExit,
    Text,
    CardsContainer,
 } from "./styles";
import { DashCard } from "../DashCard";

export function Header(){
    return(
        <Container>
            <MenuContainer>
                <TitleContainer>
                    <InfosContainer>
                        <Image source={require('../../assets/IgniteSimbol.png')}/>
                        <View>
                            <Title>
                                DT Money
                            </Title>
                        </View>
                    </InfosContainer>
                    <InfosContainer>
                        <IconExit name='exit-outline'/>
                        <Text>
                            Sair da conta
                        </Text>
                    </InfosContainer>
                </TitleContainer>
                <Button>
                    <TextButton>
                        Nova transação
                    </TextButton>
                </Button>
            </MenuContainer>
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
        </Container>
    )
}