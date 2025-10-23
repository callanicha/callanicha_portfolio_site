import "../styles/index.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate ();

    const handleClick = () => (
        navigate("/")
    ); 

    return (
        <div className="header-container">
            <p id="header-contact">calla2547@gmail.com</p>
            <h1 id="username-logo" onClick={handleClick}>Callanicha</h1>
            <p id="header-instagram">instagram.com/callanicha</p>
        </div>
    );
};

export default Header;