import React from "react";
import styled from "styled-components";
const RedBtn= styled.button`
background-color:red;
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
const GreenBtn= styled.button`
background-color:green;
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
const BlueBtn= styled.button`
background-color:blue;
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
const OrangeBtn= styled.button`
background-color:orange;
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
const VioletBtn= styled.button`
background-color:violet;
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
const YellowBtn= styled.button`
background-color:yellow;
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
const AquaBtn= styled.button`
background-color:aqua;
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
const GreyBtn= styled.button`
background-color:grey;
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


function StyledComponent4(){
    return(
        <div>
            <div id="top" style={{display:"flex" , justifyContent:"center" ,alignItems:"center"}}>
            <RedBtn>Button 1</RedBtn>
            <GreenBtn>Button 2 </GreenBtn>
            <BlueBtn>Button 3</BlueBtn>
            <OrangeBtn>Button 4</OrangeBtn>
            <VioletBtn>Button 5</VioletBtn>
               
            </div>
            <div id="buttom"style={{display:"flex" , justifyContent:"center" ,alignItems:"center"}}>
             <YellowBtn>Button 6</YellowBtn>
                <AquaBtn>Button 7</AquaBtn>
                <GreyBtn>Button 8</GreyBtn>
            </div>
        </div>
    )

}
export default StyledComponent4;