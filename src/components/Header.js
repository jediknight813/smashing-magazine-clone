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
                <button> Guides </button>
                <button> Book </button>
                <button> Workshops </button>
                <button> Membership </button>
                <button> Job Board </button>
                <button style={{backgroundColor: "hsl(5, 70%, 40%)", height: "200%", borderRadius: "15px", marginTop: "-12px"}} className="more_button"> More <img alt="more_button_image" style={{width: "25%"}} src="https://kfig21.github.io/design_teardown/assets/moreIcon.svg" /> </button>
            
            </div>

            <div style={{display: "flex", height: "50%", marginRight: "4%", width: "25%"}}> 
                <img className="header_search_image" alt="mag_for_search" src="https://kfig21.github.io/design_teardown/assets/magnifyingGlass.svg"/>
                <input className="Header_Search" type={"text"} placeholder="Search articles..."/>
            </div>

        </div>
    )
}


export default Header

