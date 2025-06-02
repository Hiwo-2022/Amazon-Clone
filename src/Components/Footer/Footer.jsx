import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-backtotop">Back to top</div>
      <div className="footer-main">
        <div className="footer-col">
          <h3>Get to Know Us</h3>
          <ul>
            <li>Careers</li>
            <li>Amazon Newsletter</li>
            <li>About Amazon</li>
            <li>Accessibility</li>
            <li>Sustainability</li>
            <li>Press Center</li>
            <li>Investor Relations</li>
            <li>Amazon Devices</li>
            <li>Amazon Science</li>
          </ul>
        </div>
        <div className="footer-col">
          <h3>Make Money with Us</h3>
          <ul>
            <li>Sell on Amazon</li>
            <li>Sell apps on Amazon</li>
            <li>Supply to Amazon</li>
            <li>Protect &amp; Build Your Brand</li>
            <li>Become an Affiliate</li>
            <li>Become a Delivery Driver</li>
            <li>Start a Package Delivery Business</li>
            <li>Advertise Your Products</li>
            <li>Self-Publish with Us</li>
            <li>Become an Amazon Hub Partner</li>
            <li className="footer-link">› See More Ways to Make Money</li>
          </ul>
        </div>
        <div className="footer-col">
          <h3>Amazon Payment Products</h3>
          <ul>
            <li>Amazon Visa</li>
            <li>Amazon Store Card</li>
            <li>Amazon Secured Card</li>
            <li>Amazon Business Card</li>
            <li>Shop with Points</li>
            <li>Credit Card Marketplace</li>
            <li>Reload Your Balance</li>
            <li>Gift Cards</li>
            <li>Amazon Currency Converter</li>
          </ul>
        </div>
        <div className="footer-col">
          <h3>Let Us Help You</h3>
          <ul>
            <li>Your Account</li>
            <li>Your Orders</li>
            <li>Shipping Rates &amp; Policies</li>
            <li>Amazon Prime</li>
            <li>Returns &amp; Replacements</li>
            <li>Manage Your Content and Devices</li>
            <li>Recalls and Product Safety Alerts</li>
            <li>Registry &amp; Gift List</li>
            <li>Help</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <img
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="Amazon logo"
          className="footer-logo"
        />
        <div className="footer-langs">
          <button className="footer-lang-btn">
            <span role="img" aria-label="globe">
              🌐
            </span>{" "}
            English
          </button>
          <button className="footer-lang-btn">
            <span role="img" aria-label="us-flag">
              🇺🇸
            </span>{" "}
            United States
          </button>
        </div>
      </div>
    </footer>
  );
}
