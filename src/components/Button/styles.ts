import styled from "styled-components";

export const ButtonContainer = styled.button`
    width:40%;
    height:32px;
    min-width:120px;
    margin:5px 10px;
    
    position:relative;
    
    background-color: #fff;
    color:#000;
    font-family:'Quicksand';
    font-size:15px;
    font-weight:bold;

    transition: .3s ease-out;

    border-radius:20px;
    border:none;

    &:hover{
        cursor:pointer;
        background-color:#1b7fb9a6;
        color:#fff;
    }

`