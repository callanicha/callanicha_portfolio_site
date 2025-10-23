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
                <a href="https://github.com/callanicha/Market-a-la-Mode" target="_blank" rel="noopener noreferrer" className="project-link">
                  <span className="link-icon">📁</span> GitHub
                </a>
                <a href="/market-a-la-mode.pdf" target="_blank" rel="noopener noreferrer" className="project-link" download>
                  <span className="link-icon">📄</span> PDF Report
                </a>
              </div>
            </div>
            
            <div className="project-content">
              <div className="project-explanation">
                <h3>Project Overview</h3>
                <p>
                  A comprehensive data analysis and visualization project focusing on the financial performance 
                  of three major luxury brands: Prada, LVMH, and Kering. This project combines historical stock 
                  data analysis with predictive forecasting to provide insights into market trends and brand performance.
                  The analysis covers 2015-2024 data with forecasts extending to 2030, examining how these luxury 
                  conglomerates move in sync or diverge under different macroeconomic conditions.
                </p>
                
                <h4>Key Features:</h4>
                <ul className="feature-list">
                  <li>Historical stock price analysis (2015-2024)</li>
                  <li>Normalized growth indices (Base-100 index)</li>
                  <li>CAGR and volatility calculations</li>
                  <li>Year-over-year return analysis</li>
                  <li>COVID-19 impact assessment</li>
                  <li>Forecast projections (2025-2030)</li>
                  <li>Interactive Tableau dashboard</li>
                  <li>Python data pipeline with Pandas</li>
                </ul>

                <h4>Technical Implementation:</h4>
                <p>
                  Built with Python (Pandas) for data processing and Tableau for visualization. The project features 
                  a custom data pipeline that standardizes multi-source financial data, normalizes stock prices to 
                  Base-100 indices for direct comparison, and calculates key financial metrics including CAGR and 
                  volatility. The interactive Tableau dashboard showcases normalized growth curves, annual return 
                  heatmaps, and forecast bands with confidence intervals.
                </p>
              </div>

              <div className="project-dashboard">
                <h3>Dashboard Preview</h3>
                <div className="dashboard-images">
                  <div className="dashboard-image">
                    <img 
                      src="/images/market-a-la-mode1.png" 
                      alt="Market à la Mode Dashboard - Price vs Movement Intensity Analysis"
                      className="dashboard-img"
                    />
                    <p className="image-caption">Price vs Price-Movement Intensity Analysis</p>
                  </div>
                  <div className="dashboard-image">
                    <img 
                      src="/images/market-a-la-mode2.png" 
                      alt="Market à la Mode Dashboard - Market Performance Overview"
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
