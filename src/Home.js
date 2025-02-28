import React, { useState } from "react";
import Registration from "./Registration";
function Home(){
    let [regis,showRegis]= useState(false)
    function reg(){
        showRegis(true);
    }
    if(regis){
        return <Registration/>
    }
return(
    <div>
        <h1>Welcome To Wipro Home Page</h1>
        <button onClick={reg}>Registration</button>
    </div>
)
}
export default Home;