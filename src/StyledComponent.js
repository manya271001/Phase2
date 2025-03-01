import React from "react";
import styled from "styled-components";
function StyledComponent(){
    const Button=styled.button`
    background-color: #4CAF50;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: larger;
    margin: 4px 10px;
    border-radius:20px;
     &:hover {
            background-color: #45a055;
        }

    `
return(
    <div>
       <Button>I am styled component button</Button>
    </div>
)
}
export default StyledComponent;