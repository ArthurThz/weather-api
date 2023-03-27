import styled from "styled-components";

export const InputContainer = styled.div`
    width:100%;
    max-width:275px;

    display:flex;
    align-items:center;
    
    margin-right:20px;
    
    @media(max-width:850px){
        margin:0;
    }

`

export const InputText = styled.input`
    width:100%;
    height:32px;
    padding:1em;

    border:1px solid gray;
    border-radius:15px;

    background-color:transparent;

    font-size:17px;
    outline:none;
  
    &::placeholder{
        font-family:'Quicksand';
        color:#000;

    }
`