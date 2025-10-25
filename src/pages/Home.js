import "../styles/home.css";
import Button from "../component/ButtonMenu";

const Home = () => {
  return (
    <div className="home-page">
        <div className="home-page-body">
            <div className="welcome-title">
                <p className="title">
                    Hello there,
                    <span className="text-span"> &lt;3</span>
                    <p>Welcome to my portfolio site !!</p>
                </p>
            </div>
            <div className="welcome-note">
                <p>My name is <strong>Natthanicha VONGJARIT</strong>, but most people call me Calla because it's easier. I'm from Thailand and currently studying in Paris, France.</p>
                <p>I'm a data analyst specializing in visualization and business intelligence, with a particular focus on the fashion industry, event management, and consumer behavior. My goal is to transition into a business analyst role and eventually pursue graduate studies at a business school in Paris.</p>
                <p>My interest in data analytics grew organically during my computer science studies. While exploring databases, both SQL and NoSQL, I discovered a genuine passion for transforming raw data into actionable insights. This led me to independently develop expertise in data visualization and analytics, building projects that bridge technical skills with business strategy.</p>
                <p>I draw deep inspiration from my dad, someone who rebuilt himself after bankruptcy and worked hard enough to give me the chance to study abroad. I admire him for his emotional strength and strategic way of thinking. I often ask him about my projects and discuss how to analyze things from a business perspective; his insights always help me see beyond the data and think more critically. He’s the reason I believe in resilience, curiosity, and growth beyond comfort zones.</p>
                <p>Building this portfolio has been challenging, but every obstacle reinforced my commitment to this field. I'm excited to bring this combination of technical skills, business curiosity, and determination to a data/business analyst role.</p> 
                <p>Thanks for reading</p>
                <p>best regards,</p>
                <p>calla xoxo</p>
            </div>
            <div className="Button-to-Menu">
                <Button />
            </div>
        </div>
    </div>
  );
};

export default Home;
