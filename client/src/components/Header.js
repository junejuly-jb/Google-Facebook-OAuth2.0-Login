import React, { Component } from 'react'

export default class Header extends Component{
    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a href="/" className="navbar-brand">Sample</a>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <a href="/" className="nav-link">Dashboard</a>
                        </li>
                    </ul>

                    <ul className="nav navbar-nav ml-auto">
                        <li className="nav-item">
                            <a href="/" className="nav-link">Sign up</a>
                        </li>
                         <li className="nav-item">
                            <a href="/" className="nav-link">Sign in</a>
                        </li>
                         <li className="nav-item">
                            <a href="/" className="nav-link">Sign out</a>
                        </li>
                    </ul>
                </div>    
            </nav> 
        )
    }
}