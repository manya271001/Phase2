import React from "react";
function Registration(){
return(
    <div>
        <h3>USER REGISTRATION</h3>
        <form>
            <label>First Name</label>
            <input type="text"></input> <br/>
             <label>Second Name</label>
            <input type="text"></input> <br/>
         
        <label>Gender:</label> 
        <input type="radio" id="female" name="gender" value="Female" />
        <label htmlFor="female">Female</label> <br />
        <input type="radio" id="male" name="gender" value="Male" />
        <label htmlFor="male">Male</label> <br />
        <input type="radio" id="other" name="gender" value="Other" />
        <label htmlFor="other">Other</label> <br />

        <label>Qualification:</label> 
        <input type="checkbox" id="B.Tech" name="qualification" value="B.Tech" />
        <label>B.Tech</label> <br />
       <input type="checkbox" id="B.Com" name="qualification" value="B.Com" />
        <label>B.Com</label> <br />
         <input type="checkbox" id="other" name="qualification" value="other" />
        <label>other</label> <br />

        <label for="city">Choose City:</label>
    <select id="city" name="city">
      <option value="Bhopal">Bhopal</option>
      <option value="Mumbai">Mumbai</option>
      <option value="Bangalore">Bangalore</option>
      <option value="Pune">Pune</option>
      <option value="Indore">Indore</option>
    </select>
    <br/><br/>

    <label>Enter Password</label>
    <input type="password"></input> <br/>


   <label htmlFor="address">Your address:</label><br />
<textarea id="address" name="address" rows="5" cols="50" placeholder="Enter your address here..."></textarea>
<br /><br />


      <label for="countries">Choose your country:</label><br />
    <select id="countries" name="countries" multiple size="2">
      <option value="india">India</option>
      <option value="usa">United States</option>
      <option value="uk">United Kingdom</option>
      <option value="canada">Canada</option>
      <option value="australia">Australia</option>
      <option value="germany">Germany</option>
      <option value="japan">Japan</option>
      <option value="france">France</option>
    </select>
    <br /><br />
    <button type="submit" onClick={()=>alert("registration completed")}>Submit</button>
        </form>
    </div>
)
}
export default Registration;