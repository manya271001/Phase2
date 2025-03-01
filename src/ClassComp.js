import React from "react"
class Car extends React.Component{
    constructor(){
        super()
        this.state={color:"green"}
    }
    render(){
        return(
            <h1  style={{ color: this.state.color }}>I am car class componet</h1>
        )
    }
}
export default Car