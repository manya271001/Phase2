import React from "react";
import styled from "styled-components";
const StyledComponent2=()=>{
    const Div= styled.div`
     background-color: white;
    border-radius: 20px;
    box-shadow: 0px 4px 8px rgba(0,0,0,0.2);
    max-width: 300px;
    margin: 20px;
    padding: 30px;
    transition: box-shadow 0.3s ease;
    &:hover{
        box-shadow:0px 10px 20px rgba(0,0,0,0.2)
    }
    `
return(
    
        <Div><h1>I am styled component div </h1></Div>
    
)
}
export default StyledComponent2;