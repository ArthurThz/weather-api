import styled from "styled-components";

export const Container = styled.div`
    width:100%;
    height:100vh;

    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;

    background-color:#1B7FB9;

    h1{
        font-size:2.5em;
        font-weight:700;
        font-family:'Quicksand';
        margin-bottom:20px;
        color:#d2d6d8;
    }
`

export const Wrapper = styled.div`
    width:40%;
    min-width:320px;
    padding:2em 1em;
    

    border-radius:20px;

    display:flex;
    align-items:center;
    justify-content:space-between;
    flex-direction:column;

    background-color:#91D1F6;

   
`

export const Row = styled.div`
        width:100%;
        display:flex;
        align-items:center;
        justify-content:center;   

        @media (max-width:850px){
        flex-direction:column;
        gap:15px;
    }
 `
 export const InfosContainer = styled.div`
    width:100%;
    display:flex;
    align-items:center;
    justify-content:space-between;
    flex-direction:column;
    
    background-color:#91D1F6;
 `
