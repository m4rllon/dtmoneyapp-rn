import { MyText } from "../../components/MyText";
import { MyTitle } from "../../components/MyTitle";
import { Container } from "./styles";

export function Home(){
    return(
        <Container>
            <MyTitle>
                Home
            </MyTitle>

            <MyText>
                ola
            </MyText>
        </Container>
    )
}