import {LOGO_URL} from "../utils/Constant";

const Header = () => {
    return (
        <div className="header">
            {/* logo */}
            <div className="logo-container">
                <img className="logo" src={LOGO_URL}/>
            </div>
            {/* Nav Items  */}
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Support</li>
                    <li>Cart</li>
                </ul>
            </div>

        </div>
    );
};

export default Header;