import React from 'react'
import './Navbar.scss'
import MailIcon from '@material-ui/icons/Mail';
import PersonIcon from '@material-ui/icons/Person';

const Navbar = ({setMenuOpen, menuOpen}) => {
    return (
        <div className={"navbar " + (menuOpen && "active")} >
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className = "logo">genius.</a>
                    <div className="itemContainer">
                        <PersonIcon className="icon"/>
                        <span>+381 346 21 89</span>
                    </div>
                    <div className="itemContainer">
                        <MailIcon className="icon"/>
                        <span>julianfbsanchez9@gmail.com</span>
                    </div>
                </div>
                <div className = "right">
                    <div className = "hamburguer" onClick = {() =>setMenuOpen(!menuOpen)}>
                        <span className = "line1"></span>
                        <span className = "line2"></span>
                        <span className = "line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
