import { 
    Container,
    ButtonLabel,
    ButtonIcon,
 } from "./styles";

export function OtherOptionButton(){
    return(
        <Container>
            <ButtonLabel>
                Acessar
            </ButtonLabel>
            <ButtonIcon name="arrow-right"/>
        </Container>
    )
}