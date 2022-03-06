import React from "react";
import styled,{createGlobalStyle} from "styled-components";
import Kind from '../kindred.jpg';
import chall from '../22che.png';


const GlobalStyle = createGlobalStyle`
  body {
    background: #848484;
  }
`;

const IRight =styled.div`
width: 400px;
bottom: 680px;;
left: 900px;
position: absolute;
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


const Imgpo=styled.img`
    width: 120px;
    bottom: 120px; 
`;

const Idbox = styled.div`
overflow:hidden;
width:1536px;
  height:90px;
  background-color:#424242;
`;

const Name=styled.div` 
  color: white;
  position: relative;
  margin-top: -150px;
  margin-left: 130px;
  font-size: 1.5rem;
  overflow:hiddlen; white-space:nowrap;
`;

const Level=styled.div`
  color: white;
  font-size:1.25rem;
  overflow:hiddlen; white-space:nowrap;
`;

const Rader = styled.div`
  color: white;
  font-size: 0.7rem;
  margin-left:130px;
  margin-top:10px;
`;

const RankPo=styled.ul`
float:left;
  color: ${props => props.color ? props.color : 'white'};
`;

const Boxul =styled.div`
  display: flex;
  flex-direction: row;

  width: 350px;
  height: 200px;
  border: 2px solid white;
  margin-left: 400px;
  margin-top: 100px;
`;

const Profile=styled.div`
  margin-top: 100px;
  margin-left: 650px;
  width: 250px;
  height: 120px;
`;


const Rankco=styled.ul` 
  float: left;
  color: ${props => props.color ? props.color : 'white'};
`;

const Boxcoul=styled.div`
  display: flex;
  flex-direction: row;
  
  width: 350px;
  height:200px;
  border: 2px solid white;
  margin-left:800px;
  margin-top:-204px;
`;


function Main() {
    return (
        <>
            <GlobalStyle/>
            <IRight>
                <Input/>
            </IRight>
            <Idbox/>
            <Profile>
                <Imgpo src={Kind}/>
                <Level>Lv 123</Level>
                  <Name >텍프네간</Name>
                  <Rader>래더 랭킹1444444위</Rader>
            </Profile>
            <Boxul>
            <div>
                <Imgpo src={chall}/>
                </div>
                  <div>
                    <RankPo color={"skyblue"}>Challenger</RankPo>
                    <RankPo>10LP / 25승 21패</RankPo>
                    <RankPo>승률 60%</RankPo>
                    <RankPo>미스포츈의 정신 지배자들</RankPo>
                  </div>
            </Boxul>
            <Boxcoul>
                <div>
                  <Imgpo src={chall}/>
                </div>
                <div>
                  <Rankco color={"skyblue"}>Challenger</Rankco>
                  <Rankco >90LP / 5승 6패</Rankco>
                  <Rankco >승률 50%</Rankco>
                </div>
            </Boxcoul>
        </>
    );
}

export default Main;