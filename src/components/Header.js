import React from "react";
import '../styles/HeaderStyles.css'


function Header() {

    return (
        <div className="Header_Container">
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&family=Varela+Round&display=swap');
            </style>
            <img className="site_logo" src="https://www.smashingmagazine.com/images/logo--full.svg" alt="site_logo" />

            <div className="header_buttons">
                <button> Articles </button>
            </div>

        </div>
    )
}


export default Header

