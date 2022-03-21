import React from "react";
import styled from "styled-components";

export const Container = styled.div`
width: 100%;
margin: 0 auto;
`;


export const ContainerLogin = styled.div`
width: 100%;
min-height: 100vh;
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: center;
padding: 15px;
background-color: #111;

`;

export const WrapLogin = styled.div`
width: 390px;
background-color: #333;
border-radius: 10px;
overflow: hidden;
padding: 77px 55px 33px 55px;
box-shadow: 0 5px 10px 0px rgba(0, 0, 0,.2);
`;

export const Form = styled.form`
width: 100%;
`;

export const Span = styled.span`
display: block;
font-size: 30px;
color: azure;
line-height: 1.2;
text-align: center;
`;

export const WrapInput = styled.div`
width: 100%;
position: relative;
border-bottom: 2px solid #adadad;
margin-bottom: 37px;
`;

export const Input = styled.input`
font-size: 15px;
color: #fff;
line-height: 1.2;
border: none;
display: block;
width: 100%;
height: 45px;
background-color: transparent;
padding: 0 5px;

:focus{
    outline: 0;
}

:focus + .FocusInput::after{
    top: -15px;
}
:focus + .FocusInput::before{
    width: 100%;
}


`;

export const FocusIput = styled.span`
position: absolute;
display: block;
width: 100%;
height: 100%;
top: 0;
left: 0;
pointer-events: none;
color: #adadad;

::before{
    content: "";
    display: block;
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 2px;
    -webkit-transition: all 0.4s;
    -o-transition: all 0.4s;
    -moz-transition: all 0.4s;

    background: -webkit-linear-gradient(to left, #21d4fd, #b721ff);
    background: -o-linear-gradient(to left, #21d4fd, #b721ff);
    background: -moz-linear-gradient(to left, #21d4fd, #b721ff);
    background: linear-gradient(to left, #21d4fd, #b721ff);
}

::after{
    font-size: 15px;
    color: #999999;
    line-height: 1.2;
    content: attr(data-placeholder);
    display: block;
    width: 100%;
    position: absolute;
    top: 16px;
    left: 0px;
    padding-left: 5px;
    -webkit-transition: all 0.4s;
    -o-transition: all 0.4s;
    -moz-transition: all 0.4s;
}


`;



export const ContainerLoginFormBtn = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding-bottom: 13px;
`;

export const LoginFormBtn = styled.button`
    font-size: 15px;
    border: none;
    border-radius: 10px;
    color: #fff;
    text-transform: uppercase;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 50px;

    background: -webkit-linear-gradient(to left, #21d4fd, #b721ff);
    background: -o-linear-gradient(to left, #21d4fd, #b721ff);
    background: -moz-linear-gradient(to left, #21d4fd, #b721ff);
    background: linear-gradient(to left, #21d4fd, #b721ff);
    :hover{
        cursor: pointer;
    }
`;

export const TextCenter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
`;

export const Txt1 = styled.span`
    font-size: 14px;
    color: #adadad;
    line-height: 1.5;
    padding-right: 5px;
    text-decoration: none;
`;

export const Txt2 = styled.a`
    font-size: 14px;
    color: #6a7dfe;
    line-height: 1.5;
    text-decoration: none;
`;