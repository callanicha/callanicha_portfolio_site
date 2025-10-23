import { useNavigate } from "react-router-dom";
import "../styles/Menu.css";

const Button = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/");
    }
    return (
        <div className="button-to-home" onClick={handleClick}>
        Back to home page
        </div>
    );
};

export default Button;