import React  from "react";
import {Link} from "react-router-dom"  //from going from one page to another page ,page will not refresh now ,it goes directly on that page without refreshing (😇)

const NavBar=()=>{
    return (
               <nav>
    <div className="nav-wrapper white">
      <Link to="/" className="brand-logo">ZAGUAR</Link>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signup">Signup</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/create">Create Post</Link></li>
      </ul>
    </div>
  </nav>

    )
}

export default NavBar;