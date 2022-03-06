import styled,{ createGlobalStyle } from 'styled-components';
import image from '../LRS-logo.png';
import Header from './Header';

const GlobalStyle = createGlobalStyle`
  body {
    background: #424242;
  }
`;

const Input = styled.input`
  padding: 12px;
  border-radius:4px;
  border: 1px solid #585858;
  width: 100%;
  outline: none;
  font-size: 18;
  box-sizing: border-box;
`;

const Positioner = styled.div`
width: 40%;
bottom: 60%;
left: 30%;
position: absolute;
display:flex;
flex-direction: row;
`;

const Butt = styled.button`
display: inline-flex;
outline: none;
border: none;
border-radius: 4px;
color: white;
font-weight: bold;
cursor: pointer;
padding-left: 1rem;
padding-right: 1rem;
margin-left: -90px;
margin-top: 5px;



/* 크기 */
height: 2rem; 
font-size: 1rem;

/* 색상 */
background: #6667AB;
&:hover {
  background: #6667AB;
}
&:active {
  background: #6667AB;
}
`;


const Fu =styled.div`
  text-align: center;
`;


const ImgP = styled.img`
width: 250px;
bottom: 50px;
`;



function Main() {
  return (
    <>
      <Header/>
      <GlobalStyle />
      <Fu>
          <ImgP src={image} />
        </Fu>
      <Positioner>
        <Input autoFocus placeholder='소환사 명을 입력하십시오'/>
        <Butt>Search</Butt>
      </Positioner>

    </>
  );
}
export default Main;