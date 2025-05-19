import React from "react";
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import { FaBars } from "react-icons/fa";
import "./Header.css"; // Assuming you have a CSS file for styling

function Header() {
  return (
    <>
      <header className="header">
        <div className="header__logo">
          <a href="/">
            <img
              src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
              alt="amazon logo"
            />
          </a>
        </div>
        <div className="header__location">
          <span>Delivering to Silver Sp... 20904</span>
          <div className="header__locationUpdate">
            <SlLocationPin />
            <a href="#" className="header__updateLocation">
              Update location
            </a>
          </div>
        </div>
        <div className="header__search">
          <select className="header__searchDropdown">
            <option>All</option>
            {/* Add more categories as needed */}
          </select>
          <input type="text" placeholder="Search Amazon" />
          <button>
            <BsSearch />
          </button>
        </div>
        <div className="header__lang">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg"
            alt="EN"
            className="header__langFlag"
            width="20"
            
          />
          <span>EN</span>
        </div>
        <div className="header__nav">
          <div className="header__option">
            <span className="header__optionLineOne">Hello, sign in</span>
            <span className="header__optionLineTwo">Account & Lists</span>
          </div>
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
          <div className="header__optionCart">
            <BiCart size={34} />
            <span className="header__cartCount">0</span>
            <span className="header__cartLabel">Cart</span>
          </div>
        </div>
      </header>
      <nav className="header__navBar">
        <ul>
          <li>
            <FaBars /> All
          </li>
          <li>Medical Care</li>
          <li>Saks</li>
          <li>Best Sellers</li>
          <li>Amazon Basics</li>
          <li>New Releases</li>
          <li>Music</li>
          <li>Registry</li>
          <li>Groceries</li>
          <li>Smart Home</li>
          <li>Gift Cards</li>
          <li>Today's Deals</li>
          <li>Prime</li>
          <li>Customer Service</li>
        </ul>
      </nav>
    </>
  );
}

export default Header;
