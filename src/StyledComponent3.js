import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
   const Heading1 = styled.h1`
        color: palevioletred;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-style: oblique;
        font-weight: 900;
    `;

    const Heading2 = styled.h2`
        color: rgb(67, 9, 28);
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-style: oblique;
        font-weight: 600;
    `;

    const Header = styled.header`
        display: flex;
        justify-content: space-between;
        align-items: center;
    `;

    const Footer = styled.footer`
        text-align: center;
        background-color: gainsboro;
        padding: 10px 50px;
        color: burlywood;
    `;
    const Nav=styled.ul`
    display:flex;
    list-style:none
    `

const StyledComponent3 = () => {
 

    return (
        <div>
            <Header>
                <ul>
                    <li>Home</li>

                </ul>
            </Header>
            <Heading1>
                I am an H1 styled tag
            </Heading1>
            <Heading2>
                I am an H2 styled component
            </Heading2>
            <Footer>
                All rights reserved
            </Footer>
        </div>
    );
}

export default StyledComponent3;
