import React,{useState} from "react";
import styled from "styled-components";

const Last = styled.div`
  text-align: right;
  display:flex;
  flex-direction: column;
  position: absolute;
`;

const Leng = styled.button`

 display: inline-flex;
  outline: none;
  border: none;
  border-radius: 4px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  padding-left: 1rem;
  padding-right: 1rem;

  /* 크기 */
  height: 2.25rem;
  font-size: 1rem;

  /* 색상 */
  background: #424242;
  &:hover {
    background: #424242;
  }
  &:active {
    background: #424242;
  }
`;


const Korea = styled.button`
  
 display: inline-flex;
  outline: none;
  border: none;
  border-radius: 4px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  padding-left: 1rem;
  padding-right: 1rem;

  /* 크기 */
  height: 2.25rem;
  font-size: 1rem;

  /* 색상 */
  background: #424242;
  &:hover {
    background: #424242;
  }
  &:active {
    background: #424242;
  }
`;

const English = styled.button`
  
 display: inline-flex;
  outline: none;
  border: none;
  border-radius: 4px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  padding-left: 1rem;
  padding-right: 1rem;

  /* 크기 */
  height: 2.25rem;
  font-size: 1rem;

  /* 색상 */
  background: #424242;
  &:hover {
    background: #424242;
  }
  &:active {
    background: #424242;
  }
`;

function Lanaguage() {
  const [open,setOpen] = useState(false);

  const onToggle= () => setOpen(!open);
    return(
        <Last>
        <Leng onClick={onToggle} open={open}>Langeage</Leng>
        {open && (
          <>
            <Korea>Korea</Korea>
          <English>English</English>
          </>
        )}
      </Last>
    );
}

export default Lanaguage
