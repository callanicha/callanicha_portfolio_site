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
                <p>My name is <strong>Natthanicha VONGJARIT</strong>,but most people call me Calla because it's easier. I'm from Thailand and currently studying in Paris, France.</p>
                <p>I focus on more in data analytic and data visualization combining wiht my passion and interest in fashion industry and business behavior.My goal is to aime for business analyst, while targeting to admit into a good business school in paris after I grduate from bachelor.</p>
                <p>I find myself not interest in web dev since beginning of my computer science journey but the more I learn about database wheter it's SQL or NoSQL, I find myself be abloe to drive into the subject excitingly. I lead myself to self taught data visualzation and data cleaning since my program doesn't have specific course for me</p>
                <p>It was confusing, tiring and fustrating I'll honest, but I trust to process and not giving up on myself and keep learning new stuff.</p>
                <p>I have my inspiration from my dad who work in investments and digital assets along with his own company which make me want to explaore more in business field not only stay in tech.</p>
                <p>Thanks for reading</p>
                <p>stay slay with matcha latte 🍵,</p>
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
