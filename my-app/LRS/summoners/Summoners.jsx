import React from "react";
import styled,{createGlobalStyle,css} from "styled-components";
import Kind from '../kindred.jpg';

const GlobalStyle = createGlobalStyle`
  body {
    background: #424242;
  }
`;

const Right =styled.div`
width: 40%;
bottom: 94%;
left: 60%;
position: absolute;
display:flex;
flex-direction: row;
  text-align:right;  
`;

const Input = styled.input`
  padding: 6px;
  border-radius:4px;
  border: 1px solid #585858;
  width: 50%;
  outline: none;
  font-size: 18;
  box-sizing: border-box;
`;

const Center=styled.div`
  text-align:center;  
`;

const Kindred=styled.img`
    width: 80px;
    bottom: 80px;
`;

const 


function Main() {
    return (
        <>
            <GlobalStyle/>
            <Right>
                <Input/>
            </Right>
                <Kindred src={Kind}/>
        </>
    );
}

export default Main;