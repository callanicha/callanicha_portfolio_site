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
                <p>I focus on more in data analytic and data visualization combining with my passion and interest in fashion industry, concert & event organization, and business behavior. My goal is to aime for business analyst, while targeting to enter to a business school in paris after I graduate from bachelor.</p>
                <p>I find myself not interest in web dev since the beginning of my computer science journey but the more I learn about database wheter it's SQL or NoSQL, I find myself be able to drive into the subject excitingly. I lead myself to self taught data visualzation and data cleaning since my program doesn't have specific course for me</p>
                <p>I draw deep inspiration from my dad, someone who rebuilt himself after bankruptcy and worked hard enough to give me the chance to study abroad. I admire him for his emotional strength and strategic way of thinking. I often ask him about my projects and discuss how to analyze things from a business perspective; his insights always help me see beyond the data and think more critically. He’s the reason I believe in resilience, curiosity, and growth beyond comfort zones.</p>
                <p>It was confusing, tiring and fustrating I'll be honest, but I keep pushing myself, didn't giving up and keep learning new stuff.</p>
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
