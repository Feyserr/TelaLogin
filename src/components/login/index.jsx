import React from "react";
import { Container, ContainerLogin, WrapLogin, Form, Span, WrapInput, FocusIput, ContainerLoginFormBtn, LoginFormBtn, TextCenter, Txt1, Txt2, Input } from './style';
import { useState } from "react";

export function Login (){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")


    return (
   <div>
      <Container>
            <ContainerLogin>
                <WrapLogin>
                    <Form>
                        <Span>
                            Bem Vindo!
                        </Span>

                        <WrapInput>
                            <Input  type="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            />
                            <FocusIput data-placeholder="Email"></FocusIput>
                        </WrapInput>
                        <WrapInput>
                            <Input type="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            />
                            <FocusIput data-placeholder="Password"></FocusIput>
                        </WrapInput>

                        <ContainerLoginFormBtn>
                            <LoginFormBtn>Login</LoginFormBtn>
                        </ContainerLoginFormBtn>

                        <TextCenter>
                            <Txt1>Não possui conta ?</Txt1>
                            <Txt2 href="#">Criar conta</Txt2>
                        </TextCenter>
                    </Form>
                </WrapLogin>
            </ContainerLogin> 
      </Container>

     

      
   </div> 
    

    
    );
}