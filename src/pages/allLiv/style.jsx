import styled from "styled-components";
import { Secundario } from "../../Style/Paleta";


export const AllBook = styled.div`
    background-color: ${Secundario};
    width: 100%;
    max-width: 100%;
    height: 100%;
    min-height: 25rem;
    max-height: 25rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding-top: 2rem;

    a{
        width: 100%;
        max-width: 50%;
        height: 100%;
        background-color: whitesmoke;
        display: flex;
        text-decoration: none;

        div{
            height: 100%;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            padding-top: 5%;
            padding-bottom: 5%;
            
        }
    }


`

export const CapaB = styled.img`
    width: 100%;
    max-width: 18rem;
    height: 100%;

`