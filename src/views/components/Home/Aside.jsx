import React from 'react'
import {Link} from 'react-router-dom'
function Aside({AuthToken}) {
    return (
        <div className="aside">
               <nav>
                 
        <li>Find a tutor</li>
        <li>How it works</li>
        <li>Prices</li>

        <li>For schools</li>
        <li>Become a tutor</li>
      </nav>

      <div className="auth-buttons">
        <Link to="/register">
          <button className="signin-button">Sign up</button>
        </Link>
        {(AuthToken == null || AuthToken == undefined) && (
          <Link to="/login">
            <button className="login-button">log in</button>
          </Link>
        )}
        
      </div>


        </div>
    )
}

export default Aside
