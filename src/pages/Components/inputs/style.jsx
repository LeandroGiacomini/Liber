import styled, { css } from "styled-components"
import { Terciaria } from "../../../Style/Paleta"

export const InputDiv = styled.div`
    display: flex;
    align-items: center;
    color: gray;
    background-color: #ffffff;
    border-radius: 5px;
    padding: 0.5rem;
    width: 100%;
    max-width: 100%;
    height: 100%;


    svg{
        margin-left: 10px;
        font-size: 20px;
    }

`

export const InputDivD = styled.div`
    display: flex;
    align-items: center;
    color: gray;
    background-color: #ffffff;
    border-radius: 5px;
    padding: 0.5rem;
    width: 100%;
    max-width: 100%;
    height: 100%;
    flex-direction: column;

    svg{
        margin-left: 10px;
        font-size: 20px;
    }

`


export const InputLabel = styled.label`
    background-color: white;
    color: black;
    height: 100%;
    width: 100%;
    text-align: center;
    border-radius: 5px;
    cursor: pointer;
    transition: all .3s ease;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover{
        background-color: #F05365;
        color: #EFF2F5;

    }
    
    

`

export const TextArea = styled.textarea`
    background: transparent;
    width: 100%;
    height: 100%;
    outline-width: 0;
    color: #3a3a41de;
    border: none;
    font-size: 2rem;
    margin-left: 1rem;
    margin-right: 1rem;
    

`

    

export const Input = styled.input`
    background: transparent;
    width: 100%;
    outline-width: 0;
    color: #3a3a41de;
    border: none;
 
    margin-left: 1rem;
    margin-right: 1rem;
    

`
