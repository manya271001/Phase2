
import React from "react";
import { Link, Outlet } from "react-router-dom";
function Layout(){
return(
    <div>
        <nav >
            <ul style={{listStyle:"none",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
              <Link to='/'> <img src="wipro_new_logo.svg" style={{height:"100px",width:"100px",borderRadius:"50%"}} /></Link>  
                <li><Link to='/' style={{color:"black",textDecoration:"none"}}>Home</Link></li>
                <li><Link to='/registration' style={{color:"black",textDecoration:"none"}}>Registration</Link></li>
                 <li><Link to='/products'  style={{color:"black",textDecoration:"none"}}>Products</Link></li>
                <li><Link to='/about' style={{color:"black",textDecoration:"none"}}>About</Link></li>
                   <li><Link to='/contact' style={{color:"black",textDecoration:"none"}}>Contact</Link></li>
                
            </ul>
        </nav>
        <Outlet/>
    </div>
)
}
export default Layout;
