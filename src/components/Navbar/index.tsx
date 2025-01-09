import React  from "react";

import Dropdown from "../Dropdown/index.tsx";

import "../../App.css"

import "./index.css"

import { IoMdPerson } from "react-icons/io";

import { FaSearch } from "react-icons/fa";

const dropDownOptions = [
  [
    "Living",
    "TV Units",
    "box Shelves",
    "Shoe Rack",
    "Dressing Table",
    "Wardrobes",
  ],
  [
    "Storage",
    "Bookshelves",
    "Cabinets",
    "Sideboards",
    "Chest of Drawers",
    "Wardrobes",
  ],
  [
    "Dining",
    "Dining Tables",
    "Dining Chairs",
    "Bar Cabinets",
    "Dining Benches",
    "Dining Sets",
  ],
  [
    "Bedroom",
    "Beds",
    "Wardrobes",
    "Nightstands",
    "Dressers",
    "Mattresses"
  ],
  [
    "Mattress",
    "Single Mattress",
    "Double Mattress",
    "Queen Mattress",
    "King Mattress",
    "Mattress Protectors",
  ],
  [
    "Study",
    "Study Tables",
    "Study Chairs",
    "Bookshelves",
    "Table Lamps",
    "Study Sets",
  ],
  [
    "Office",
    "Office Chairs",
    "Office Tables",
    "Bookshelves",
    "File Cabinets",
    "Office Sets",
  ],
  [
    "Outdoor",
    "Outdoor Chairs",
    "Outdoor Tables",
    "Swings",
    "Hammocks",
    "Outdoor Sets",
  ]
]
const Navbar: React.FC = () => {
  return (
    <nav className="nav-header">
        <div className = "nav-content">
            <img src = "https://assets.api.uizard.io/api/cdn/stream/8b3c73a9-22e6-4f88-ba3c-b3390de93eb1.png.png"  className = "nav-logo" alt = "logo"/>
             <a href="/" className="home-tag">Home</a>
             <ul className = "nav-dropdown">
                  {dropDownOptions.map((options, index) => {
                    return (
                      <li key = {index}>
                            <Dropdown options = {options} />
                      </li>
                    )
                  })}
             </ul>

            <div className = "nav-icons">
                    <div className = "search-icon">
                <FaSearch size = {30}/>
            </div>
            <div className = "person-icon">
                <IoMdPerson  size = {30}/>
            </div>  

            </div>
        </div>
    </nav>
  );
};

export default Navbar;