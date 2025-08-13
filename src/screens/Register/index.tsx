import { AuthenticationHeader } from "@/components/AuthenticationHeader";
import { 
    Container,
    Form,
    Footer,
} from "./styles";
import { Input } from "@/components/Form/Input";
import { TypeInput } from "@/Interfaces/Input";

export function Register(){
    return(
        <Container>
            <AuthenticationHeader/>
            <Form>
                <Input
                type={TypeInput.OTHER}
                placeholderText="Informe seu nome completo"
                label="nome"/>
                <Input
                type={TypeInput.MAIL}
                placeholderText="Digite seu e-mail"
                label="email"/>
                <Input
                type={TypeInput.PASSWORD}
                placeholderText="Insira sua senha"
                label="senha"/>
                <Input
                type={TypeInput.PASSWORD}
                placeholderText="Insira sua senha novamente"
                label="confirme sua senha"/>
                
            </Form>
            <Footer>

            </Footer>
        </Container>
    )
}