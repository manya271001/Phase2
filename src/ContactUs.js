import React from "react";
function ContactUs(){
return(
    <div>
        <p>Thank you for your interest in Wipro’s services. Please provide the following information about your business needs to help us serve you better. This information will enable us to route your request to the appropriate person. You should receive a response within 48 hours.
        </p>
        <h2>Contact Us</h2>
        <form>
             <input type="text" placeholder="First Name"></input>
             <input type="text" placeholder="Second Name"></input>
             <input type="text" placeholder="Email"></input>
             <input type="text" placeholder="Message"></input>
             <input type="submit" placeholder="Submit"></input>
        </form>
    </div>
)
}
export default ContactUs;