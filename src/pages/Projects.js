import React from "react";
import "../styles/Projects.css";

const Projects = () => {
  return (
    <div className="projects-page">
      <div className="projects-container">
        {/* Header Section */}
        <div className="projects-header">
          <h1 className="projects-title">Projects & Skills</h1>
          <p className="projects-subtitle">Data Analytics & Visualization Projects</p>
        </div>

        {/* Dashboard Project Section */}
        <div className="project-section">
          <div className="project-card">
            <div className="project-header">
              <h2 className="project-title">Market à la Mode: Luxury Brands Dashboard</h2>
              <div className="project-links">
                <a href="https://github.com/callanicha/callanicha_portfolio_site" target="_blank" rel="noopener noreferrer" className="project-link">
                  <span className="link-icon">📁</span> GitHub
                </a>
                <button className="project-link" disabled>
                  <span className="link-icon">📄</span> PDF Report (Coming Soon)
                </button>
              </div>
            </div>
            
            <div className="project-content">
              <div className="project-explanation">
                <h3>Project Overview</h3>
                <p>
                  A comprehensive data analysis and visualization project focusing on the financial performance 
                  of three major luxury brands: Prada, LVMH, and Kering. This project combines historical stock 
                  data analysis with predictive forecasting to provide insights into market trends and brand performance.
                </p>
                
                <h4>Key Features:</h4>
                <ul className="feature-list">
                  <li>Historical stock price analysis (2015-2025)</li>
                  <li>Price movement intensity tracking</li>
                  <li>Relative growth comparison across brands</li>
                  <li>COVID-19 impact analysis</li>
                  <li>Predictive forecasting (2026-2030)</li>
                  <li>Interactive dashboard with multiple chart types</li>
                </ul>

                <h4>Technical Implementation:</h4>
                <p>
                  The dashboard utilizes advanced data visualization techniques including combination charts, 
                  heatmaps, and time series analysis. The project demonstrates proficiency in data cleaning, 
                  statistical analysis, and creating compelling visual narratives from complex financial datasets.
                </p>
              </div>

              <div className="project-dashboard">
                <h3>Dashboard Preview</h3>
                <div className="dashboard-images">
                  <div className="dashboard-image">
                    <img 
                      src="/images/luxury-dashboard-1.png" 
                      alt="Luxury Brands Dashboard - Price vs Movement Intensity Analysis"
                      className="dashboard-img"
                    />
                    <p className="image-caption">Price vs Price-Movement Intensity Analysis</p>
                  </div>
                  <div className="dashboard-image">
                    <img 
                      src="/images/luxury-dashboard-2.png" 
                      alt="Luxury Brands Dashboard - Market Performance Overview"
                      className="dashboard-img"
                    />
                    <p className="image-caption">Market Performance & Growth Tracking</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="skills-section">
          <h2 className="skills-title">Technical Skills</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3 className="category-title">Data Analysis</h3>
              <div className="skill-items">
                <span className="skill-item">Python (Pandas, NumPy)</span>
                <span className="skill-item">R</span>
                <span className="skill-item">SQL</span>
                <span className="skill-item">NoSQL</span>
                <span className="skill-item">Statistical Analysis</span>
              </div>
            </div>

            <div className="skill-category">
              <h3 className="category-title">Data Visualization</h3>
              <div className="skill-items">
                <span className="skill-item">Tableau</span>
                <span className="skill-item">Power BI</span>
                <span className="skill-item">Matplotlib</span>
                <span className="skill-item">Seaborn</span>
                <span className="skill-item">Plotly</span>
              </div>
            </div>

            <div className="skill-category">
              <h3 className="category-title">Web Development</h3>
              <div className="skill-items">
                <span className="skill-item">React</span>
                <span className="skill-item">JavaScript</span>
                <span className="skill-item">HTML/CSS</span>
                <span className="skill-item">Tailwind CSS</span>
                <span className="skill-item">Node.js</span>
              </div>
            </div>

            <div className="skill-category">
              <h3 className="category-title">Database & Tools</h3>
              <div className="skill-items">
                <span className="skill-item">MySQL</span>
                <span className="skill-item">MongoDB</span>
                <span className="skill-item">Git</span>
                <span className="skill-item">Jupyter Notebook</span>
                <span className="skill-item">Excel/Google Sheets</span>
              </div>
            </div>

            <div className="skill-category">
              <h3 className="category-title">Business & Domain</h3>
              <div className="skill-items">
                <span className="skill-item">Financial Analysis</span>
                <span className="skill-item">Market Research</span>
                <span className="skill-item">Fashion Industry</span>
                <span className="skill-item">Investment Analysis</span>
                <span className="skill-item">Business Intelligence</span>
              </div>
            </div>

            <div className="skill-category">
              <h3 className="category-title">Languages</h3>
              <div className="skill-items">
                <span className="skill-item">English (Fluent)</span>
                <span className="skill-item">Thai (Native)</span>
                <span className="skill-item">French (Intermediate)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
