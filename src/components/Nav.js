import React from "react";
import '../styles/NavStyles.css'

function Nav() {


    return (
        <div className="Nav_Container">
            <button> Accessibility </button>
            <button> CSS </button>
            <button> JavaScript </button>
            <button> React </button>
            <button> Vue </button>
            <button> Round-Ups </button>
            <button> UX </button>
            <button> Design </button>
            <button> Web Design </button>
            <button> Figma </button>
            <button> Wallpapers </button>
            <button> Guides </button>
            <button> Business </button>
            <button> Career </button>
            <button> Privacy </button>
            <button style={{backgroundColor: "white"}}> Jump to all articles ↬</button>
        </div>
    )
}

export default Nav