import { AuthenticationHeader } from "@/components/AuthenticationHeader";
import { Container, Footer, Form, SubText } from "./styles";
import { Input } from "@/components/Form/Input";
import { TypeInput } from "@/Interfaces/Input";
import { SubmitButton } from "@/components/Form/SubmitButton";
import { OtherOptionButton } from "@/components/Form/OtherOptionButton";

export function Login(){
    return(
        <Container>
            <AuthenticationHeader/>
            <Form>
                <Input
                label="E-mail"
                placeholderText="Insira seu e-mail"
                type={TypeInput.MAIL}/>
                <Input
                label="Senha"
                placeholderText="Insira sua senha"
                type={TypeInput.PASSWORD}/>
                <SubmitButton
                label="Entrar"/>
            </Form>
            <Footer>
                <SubText>
                    Ainda não possui uma conta?
                </SubText>
                <OtherOptionButton 
                label="Cadastrar"/>
            </Footer>
        </Container>
    )
}