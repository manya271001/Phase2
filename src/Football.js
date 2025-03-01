function Football(){
    function goal(g){
        alert(g);
    }
    return(
       <button onClick={goal("goal!!!!")}>SHOOT</button>
    )
}
export default Football;