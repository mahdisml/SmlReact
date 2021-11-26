import { useState } from 'react';
import styled from 'styled-components'
import {counter,increase} from './store'

const Div = styled.div`
background: ${props => props.color};
color: white;
`;


interface Prob {
  
}
export default function Child(props:Prob) {
  const [color, setColor] = useState("blue");
  const count = counter.use()
  
  return (
  
    <Div color = {color}>
    <button onClick={() => {
      setColor("red")
    }}> Change Color ! </button>
    </Div>
    
  );
}
