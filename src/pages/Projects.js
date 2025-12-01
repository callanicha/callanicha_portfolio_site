import React from "react";
import "../styles/Projects.css";
import BackToMenu from "../component/BackToMenu";
import lystDashboard from "../img/lyst.png";

const Projects = () => {
  return (
    <div className="projects-page">
      <div className="projects-container">
        <BackToMenu />
        {/* Header Section */}
        <div className="projects-header">
          <h1 className="projects-title">Projects & Skills</h1>
          <p className="projects-subtitle">Data Analytics & Visualization Projects</p>
        </div>

        {/* Skills Section (now at the top) */}
        <div className="skills-section">
          <h2 className="skills-title">Technical Skills</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3 className="category-title">Data Analysis</h3>
              <div className="skill-items">
                <span className="skill-item">Python (Pandas, NumPy)</span>
                <span className="skill-item">SQL</span>
                <span className="skill-item">NoSQL</span>
                <span className="skill-item">Statistical Analysis</span>
                <span className="skill-item">PostgreSQL</span>
                <span className="skill-item">MongoDB</span>
                <span className="skill-item">MySQL</span>
                <span className="skill-item">Redis</span>
                <span className="skill-item">Neo4j</span>
                <span className="skill-item">Jupyter Notebook</span>
              </div>
            </div>

            <div className="skill-category">
            <h3 className="category-title">Analytical Workflow</h3>
              <div className="skill-items">
                <span className="skill-item">Data Cleaning & Transformation</span>
                <span className="skill-item">KPI reporting and analysis</span>
                <span className="skill-item">Dashboard Design & Development</span>
                <span className="skill-item">Forecasting & Trend Modeling</span>
                <span className="skill-item">Marketing and pricing analysis</span>
              </div>
            </div>

            {/* <div className="skill-category">
              <h3 className="category-title">Database & Tools</h3>
              <div className="skill-items">
                <span className="skill-item">PostgreSQL</span>
                <span className="skill-item">MongoDB</span>
                <span className="skill-item">Git</span>
                <span className="skill-item">Jupyter Notebook</span>
                <span className="skill-item">Excel/Google Sheets</span>
              </div>
            </div> */}

            <div className="skill-category">
              <h3 className="category-title">Business & Industry Knowledge</h3>
              <div className="skill-items">    
                <span className="skill-item">Luxury & Fashion Market Analytics</span>
                <span className="skill-item">Concert & Event Operations</span>
                <span className="skill-item">Customer Behavior Analysis</span>
                <span className="skill-item">Revenue & Pricing Strategy</span>
                <span className="skill-item">Marketing Performance Analytics</span>
              </div>
            </div>

            <div className="skill-category">
              <h3 className="category-title">Data Visualization</h3>
              <div className="skill-items">
                <span className="skill-item">Tableau</span>
                <span className="skill-item">Power BI</span>
                <span className="skill-item">Excel (Pivot Tables, Charts, Dashboards) </span>
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

            <div className="skill-category">
              <h3 className="category-title">Technical Implementation</h3>
              <div className="skill-items">
                <span className="skill-item">React</span>
                <span className="skill-item">Python</span>
                <span className="skill-item">JavaScript</span>
                <span className="skill-item">HTML / CSS / Tailwind</span>
                <span className="skill-item">Node.js / Express</span>
                <span className="skill-item">API Integration</span>
                <span className="skill-item">Git / GitHub</span>
              </div>
            </div>
          </div>
        </div>

        {/* Dashboard Project Section – Market à la Mode */}
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
                  The analysis covers 2015-2025 data with forecasts extending to 2030, examining how these luxury 
                  conglomerates move in sync or diverge under different macroeconomic conditions.
                </p>
                
                <h4>Key Features:</h4>
                <ul className="feature-list">
                  <li>Historical stock price analysis (2015-2025)</li>
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

        {/* Full-Stack Project Section – IMDb Clone */}
        <div className="project-section">
          <div className="project-card">
            <div className="project-header">
              <h2 className="project-title">Final Project: IMDb Clone &amp; Data Analysis</h2>
              <div className="project-links">
                <a
                  href="https://github.com/callanicha/S4-dbproduction-final"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <span className="link-icon">📁</span> GitHub
                </a>
              </div>
            </div>

            <div className="project-content">
              <div className="project-explanation">
                <h3>Project Overview</h3>
                <p>
                  A production-grade IMDb-style movie and series browser that lets users search, filter, and
                  explore content at scale. The platform combines a Node.js/Express backend, PostgreSQL database,
                  and a vanilla JavaScript frontend served via Nginx and Docker for a fully containerized stack.
                  It is designed to handle large datasets efficiently using PostgreSQL full-text search, optimized
                  indexing, and responsive pagination, while providing a user experience similar to modern
                  streaming platforms.
                </p>

                <h4>Key Features:</h4>
                <ul className="feature-list">
                  <li>Advanced full-text search across movies, series, and people</li>
                  <li>Smart filtering by genre, year, rating, and content status</li>
                  <li>Rich movie and series detail pages with cast, crew, and ratings</li>
                  <li>Watchlist management with persistent local storage</li>
                  <li>Responsive, mobile-first UI with interactive cards and pagination</li>
                  <li>Health checks and troubleshooting endpoints for observability</li>
                </ul>

                <h4>Technical Implementation:</h4>
                <p>
                  Backend built with Node.js and Express, using PostgreSQL 15 with GIN/B-tree indexes, search
                  vectors, and optimized queries for full-text search and analytics. The database schema mirrors
                  IMDb&apos;s data model, with normalized tables for titles, ratings, people, and principals, plus
                  carefully designed indexes for performance. The frontend is written in modular vanilla JavaScript
                  (no framework) with a hash-based router, reusable UI components, and performance-focused CSS.
                  Everything runs in Docker containers (PostgreSQL, backend, frontend, reverse proxy) orchestrated
                  with Docker Compose for reproducible deployment.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Full-Stack Project Section – Confetti Talk */}
        <div className="project-section">
          <div className="project-card">
            <div className="project-header">
              <h2 className="project-title">Confetti Talk: Concert-Day Assistant</h2>
              <div className="project-links">
                <a
                  href="https://github.com/callanicha/confetti-talk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <span className="link-icon">📁</span> GitHub
                </a>
              </div>
            </div>

            <div className="project-content">
              <div className="project-explanation">
                <h3>Project Overview</h3>
                <p>
                  A simple yet thoughtful full-stack web app designed to help fans plan and navigate their concert
                  day. The backend exposes curated event data and lightweight AI-style responses, while the frontend
                  is a fast React + Vite application that focuses on clarity and usability for real-world concert
                  scenarios.
                </p>

                <h4>Key Features:</h4>
                <ul className="feature-list">
                  <li>Concert event listing with key details served from an Express backend</li>
                  <li>Chat-style endpoint for quick Q&amp;A about event logistics</li>
                  <li>Day-plan generator API for city, date, and ticket type</li>
                  <li>Clean, responsive React UI built with Vite</li>
                  <li>Clear separation between backend (`/backend`) and frontend (`/frontend`) codebases</li>
                </ul>

                <h4>Technical Implementation:</h4>
                <p>
                  Backend built with Node.js and Express, exposing REST endpoints such as <code>/api/events</code>,
                  <code>/api/chat</code>, and <code>/api/plan</code> that read from a structured <code>events.json</code> file.
                  The frontend is a React + Vite app that consumes these APIs and runs in development on the Vite
                  dev server. This project highlights pragmatic full-stack architecture and API design tailored to
                  event operations and user experience.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Analytics Project Section – Lyst Keyword Dashboard */}
        <div className="project-section">
          <div className="project-card">
            <div className="project-header">
              <h2 className="project-title">Lyst Project: Power BI Keyword Dashboard</h2>
              <div className="project-links">
                <a
                  href="https://github.com/callanicha/LystProject-SearchEngine-PowerBI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <span className="link-icon">📁</span> GitHub
                </a>
              </div>
            </div>

            <div className="project-content">
              <div className="project-explanation">
                <h3>Project Overview</h3>
                <p>
                  An interactive Power BI / Excel dashboard analyzing Google Ads search data for The Lyst, a 
                  ฿50 million home-office development project in Bangkok. The dashboard focuses on keyword-level
                  performance to surface high-cost, low-return search terms and guide smarter marketing spend
                  decisions.
                </p>

                <h4>Key Features:</h4>
                <ul className="feature-list">
                  <li>Visualization of clicks, CTR, CPC, and conversions across search keywords</li>
                  <li>Comparison of profitable vs. over-priced keywords</li>
                  <li>Interactive filters for exploring different keyword groups</li>
                  <li>Actionable recommendations for reallocating ad budget</li>
                </ul>

                <h4>Technical Implementation:</h4>
                <p>
                  Built in Power BI and Excel using exported Google Ads keyword performance data. Data is shaped and
                  cleaned for analysis, then modeled in a way that supports drill-down on keyword performance and
                  cost efficiency. The final artifact is delivered as a Power BI Desktop file (<code>TheCivilizeSearchEngine.pbix</code>)
                  that stakeholders can open, explore, and use to test different marketing scenarios.
                </p>
              </div>

              <div className="project-dashboard">
                <h3>Dashboard Preview</h3>
                <div className="dashboard-images">
                  <div className="dashboard-image">
                    <img
                      src={lystDashboard}
                      alt="Lyst Project Power BI dashboard showing keyword performance and cost per conversion"
                      className="dashboard-img"
                    />
                    <p className="image-caption">Keyword performance &amp; cost-per-conversion overview</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
