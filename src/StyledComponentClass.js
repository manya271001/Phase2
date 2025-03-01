import React from "react";
import styled from "styled-components";
const LoginButton= styled.button`
 background-color: palevioletred;
    border-radius: 20px;
    box-shadow: 0px 4px 8px rgba(0,0,0,0.2);
    max-width: 100px;
    margin: 20px;
    padding: 10px 30px;
    border:none;
    outline:none;
    transition: box-shadow 0.3s ease;
    &:hover{
        box-shadow:0px 20px 50px rgba(0,0,0,0.8)
    }
`
class StyledComponentClass extends React.Component{
    render(){
        return(
            <div>
                <LoginButton>LogIn</LoginButton>
            </div>
        )
   }
}
export default StyledComponentClass;