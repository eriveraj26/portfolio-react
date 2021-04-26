import React from 'react'
import { NavLink } from 'react-router-dom'
  
function Navbar() {

    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <NavLink  class="navbar-brand" to="/">Edwin Rivera Jorge</NavLink>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse ml-auto" id="navbarNav">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                           <NavLink activeClassName = "active" exact = {true} class="nav-link" to="/">Home<span class="sr-only">(current)</span></NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink activeClassName = "active" class="nav-link" to="/education">Education</NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink activeClassName = "active" class="nav-link" to="/whereimgoing" tabindex="-1" aria-disabled="true">Where I'm Going</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar
