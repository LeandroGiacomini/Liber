import styled from "styled-components";
import { Terciaria } from "../../../Style/Paleta";

export const Botao = styled.button`

        width: 100%;
        background-color: #ffffff;
        color: black;
        font-weight: 800;
        height: 100%;
        border-radius: 5px;
        font-size: 1.8rem;
        border: none;
        font-family: Century Gothic;
        transition: all .3s ease;
        outline-width: 0;

        &:hover{
            background-color: #F05365;
            color: #EFF2F5;
            cursor: pointer;
        }

`

export const BotaoD = styled.button`

        background-color: transparent;
        color: black;
        font-weight: 800;
        height: 100%;
        width: 100%;
        border-radius: 5px;
        font-size: 18px;
        border: none;
        font-family: Century Gothic;

        outline-width: 0;

        &:hover{
          
            color: #F05365;
            cursor: pointer;
        }
`

export const Rotation = styled.div`

    animation: is-rotating 1s infinite;
    border: 6px solid #e5e5e5;
    border-radius: 100%;
    border-top-color: ${Terciaria};
    height: 100%;
    width: 100%;
    max-height: 3rem;
    max-width: 3rem;
    

    @keyframes is-rotating {
    to {
        transform: rotate(1turn);
    }
    }


`