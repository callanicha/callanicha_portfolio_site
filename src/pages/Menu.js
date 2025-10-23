import "../styles/Menu.css";
import MenuCard from "../component/MenuCard";
import lily7 from "../img/lily7.jpeg";
import lily10 from "../img/lily10.jpeg";
import lily12 from "../img/lily12.jpeg";
import Button from "../component/ButtonHome";

const Menu = () => {
  return (
    <div className="menu-container">
      <div className="card-wrapper">
        <MenuCard
          title="Projects & Skills"
          description="Explore more about my personal/academic projects, and my technical skills !"
          imageUrl={lily7}
          navigateTo="/projects"
        />
        <MenuCard
          title="Experiencs & Education"
          description="Find out more my professional experiences and look through educations !"
          imageUrl={lily10}
          navigateTo="/experiences"
        />
        <MenuCard
          title="Personal work & Interest"
          description="Get to know me more through my personal interest and work I do during my free time !"
          imageUrl={lily12}
          navigateTo="/interests"
        />
      </div>
      <Button />
    </div>
  );
};

export default Menu;