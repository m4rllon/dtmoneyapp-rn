import { Image, TouchableOpacity, View } from "react-native";
import { 
    NewTransactionButton, 
    Container, 
    MenuContainer, 
    TextButton, 
    Title,
    InfosContainer,
    TitleContainer,
    ExitButton,
    IconExit,
    Text,
 } from "./styles";

interface HeaderProps{
    openModal: () => void;
}

export function Header({openModal} : HeaderProps){
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
                        <ExitButton>
                            <IconExit name='exit-outline'/>
                            <Text>
                                Sair da conta
                            </Text>
                        </ExitButton>
                    </InfosContainer>
                </TitleContainer>
                <NewTransactionButton
                onPress={openModal}>
                    <TextButton>
                        Nova transação
                    </TextButton>
                </NewTransactionButton>
            </MenuContainer>
        </Container>
    )
}