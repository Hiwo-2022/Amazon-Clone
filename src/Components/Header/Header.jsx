import React,{useContext} from "react";
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Header.css";
import { DataContext } from "../DataProvider/DataProvider";
import {auth} from "../../Utility/firebase";

function Header() {
  const[{user, basket},dispatch]=useContext(DataContext)
  const totalItem = basket?.reduce((amount, item) => {
    return item.amount + amount;
  }, 0);
  
  return (
    <section className="fixed">
      <header className="header">
        <div className="header__logo">
          <Link to={"/"} style={{ textDecoration: "none", color: "inherit" }}>
            <img
              src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
              alt="amazon logo"
            />
          </Link>
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
          <span style={{ fontSize: "10px", marginLeft: "2px" }}>▼</span>
        </div>
        <div className="header__nav">
          <div className="header__option">
            <Link
              to={!user && "/auth"}
              style={{
                textDecoration: "none",
                color: "inherit",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div className="header__optionLineOne">
                {user ? (
                  <>
                    <p>Hello, {user?.email?.split("@")[0]}!</p>
                    <span onClick={()=>auth.signOut()}>Sign Out</span>
                  </>
                ) : (
                  <>
                    <p>Hello, Sign In</p>
                    <span className="header__optionLineTwo">
                      Account & Lists{" "}
                      <span style={{ fontSize: "10px",}}>
                        ▼
                      </span>
                    </span>
                  </>
                )}
              </div>
            </Link>
          </div>
          <div className="header__option">
            <Link
              to="/orders"
              style={{
                textDecoration: "none",
                color: "inherit",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <span className="header__optionLineOne">Returns</span>
              <span className="header__optionLineTwo">& Orders</span>
            </Link>
          </div>
          <div className="header__optionCart">
            <Link
              to="/cart"
              style={{
                textDecoration: "none",
                color: "inherit",
                display: "flex",
                alignItems: "center",
              }}
            >
              <BiCart size={34} />
              <span className="header__cartCount">{totalItem}</span>
              <span className="header__cartLabel">Cart</span>
            </Link>
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
    </section>
  );
}

export default Header;
