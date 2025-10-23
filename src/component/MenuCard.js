import { useNavigate } from "react-router-dom";
import "../styles/Menu.css"

const MenuCard = ({title, description, imageUrl, navigateTo}) => {
    const navigate = useNavigate();

    return (
        <div className="menu-card">
            <img src={imageUrl} alr={title} className="card-img" />
            <h2>{title}</h2>
            <p>{description}</p>
            <div className="menu-btn" onClick={() => navigate(navigateTo)}>
                More
            </div>
        </div>
    );
};

export default MenuCard;