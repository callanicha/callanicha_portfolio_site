import { useNavigate } from "react-router-dom";
import "../styles/index.css";

const Button = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/Menu");
    }
    return (
        <div className="button-to-menu" onClick={handleClick}>
            Click to continue
        </div>
    );
};

export default Button;