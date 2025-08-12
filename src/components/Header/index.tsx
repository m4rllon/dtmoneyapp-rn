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
 } from "./styles";

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
        </Container>
    )
}