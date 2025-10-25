import React from "react";
import "../styles/Interests.css";
import BackToMenu from "../component/BackToMenu";

const Interest = () => {
  return (
    <div className="interests-page">
      <BackToMenu />
      <div className="interests-container">
        
        {/* Header Section */}
        <div className="interests-header">
          <h1 className="interests-title">Interests & Inspiration</h1>
          <p className="interests-subtitle">What drives me beyond the data</p>
        </div>

        {/* FAQ Section */}
        <div className="faq-section">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="faq-container">
            <div className="faq-item">
              <h3 className="faq-question">What's one thing you make it the whole personality?</h3>
              <p className="faq-answer">My nickname, Calla, I've been obsessed over flowers especially lily and calla lily</p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">What's your favorite show from fashion week SS26?</h3>
              <p className="faq-answer">Aleen Sabbagh, Prada, KIMHEKIM, Dior, Chanel</p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">What color palette defines you?</h3>
              <p className="faq-answer">Muted pinks, matcha greens, and pearly whites : a palette of Pink Lily</p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">What goes fashion society and concert gives you?</h3>
              <p className="faq-answer">They create the coolest group of people I've ever hangout with</p>
            </div>
          </div>
        </div>

        {/* OOTD Section */}
        <div className="ootd-section">
          <h2 className="section-title">What motivates me to school everyday ?</h2>
          <p className="section-subtitle">Outfit of the Day Gallery</p>
          <div className="gallery-container">
            <div className="gallery-grid">
              {/* OOTD Images - Add your own images */}
              <div className="gallery-item">
                <img src="/images/ootd12.jpg" alt="OOTD 12" className="gallery-img" />
              </div>
              <div className="gallery-item">
                <img src="/images/ootd7.jpg" alt="OOTD 7" className="gallery-img" />
              </div>
              <div className="gallery-item">
                <img src="/images/ootd2.jpg" alt="OOTD 2" className="gallery-img" />
              </div>
              <div className="gallery-item">
                <img src="/images/ootd9.jpg" alt="OOTD 9" className="gallery-img" />
              </div>
              <div className="gallery-item">
                <img src="/images/ootd3.jpg" alt="OOTD 3" className="gallery-img" />
              </div>
              <div className="gallery-item">
                <img src="/images/ootd4.jpg" alt="OOTD 4" className="gallery-img" />
              </div>
              <div className="gallery-item">
                <img src="/images/ootd1.jpg" alt="OOTD 1" className="gallery-img" />
              </div>
              <div className="gallery-item">
                <img src="/images/ootd5.jpg" alt="OOTD 5" className="gallery-img" />
              </div>
              <div className="gallery-item">
                <img src="/images/ootd6.jpg" alt="OOTD 6" className="gallery-img" />
              </div>
              <div className="gallery-item">
                <img src="/images/ootd8.jpg" alt="OOTD 8" className="gallery-img" />
              </div>
              <div className="gallery-item">
                <img src="/images/ootd10.jpg" alt="OOTD 10" className="gallery-img" />
              </div>
              <div className="gallery-item">
                <img src="/images/ootd11.jpg" alt="OOTD 11" className="gallery-img" />
              </div>
              <div className="gallery-item">
                <img src="/images/ootd13.jpg" alt="OOTD 13" className="gallery-img" />
              </div>
              <div className="gallery-item">
                <img src="/images/ootd14.jpg" alt="OOTD 14" className="gallery-img" />
              </div>
            </div>
          </div>
        </div>

        {/* Fashion Week & Concert Section */}
        <div className="events-section">
          <h2 className="section-title">What keeps pushing me this far ?</h2>
          <p className="section-subtitle">I’m inspired by the moments that remind me why I keep going: watching my favorite artists perform, feeling the creative energy of Paris Fashion Week, and being surrounded by people who dare to dream. Most of all, my parents and best friends have always stood by me, giving me the strength to push myself this far. Everything I do is a way of making them proud.</p>
          <div className="gallery-container">
            <div className="gallery-grid">
              {/* Event Images - Add your own images */}
              <div className="gallery-item">
                <img src="/images/i2.jpg" alt="wtl paris" className="gallery-img" />
              </div>
              <div className="gallery-item">
                <img src="/images/i3.png" alt="manifesto bkk" className="gallery-img" />
              </div>
              <div className="gallery-item">
                <img src="/images/i5.png" alt="pfw25" className="gallery-img" />
              </div>
              <div className="gallery-item">
                <img src="/images/i6.jpg" alt="wtl bkk" className="gallery-img" />
              </div>
              <div className="gallery-item">
                <img src="/images/i4.jpg" alt="vs" className="gallery-img" />
              </div>
              <div className="gallery-item">
                <img src="/images/i8.jpg" alt="Mom" className="gallery-img" />
              </div>
              <div className="gallery-item">
                <img src="/images/i7.jpg" alt="Dad" className="gallery-img" />
              </div>
              <div className="gallery-item">
                <img src="/images/i1.png" alt="Friends" className="gallery-img" />
              </div>
            </div>
          </div>
        </div>

        {/* Quote Section */}
        <div className="quote-section">
          <blockquote className="inspiration-quote">
            "Every data tells a story — and every outfit does too."
          </blockquote>
        </div>

      </div>
    </div>
  );
};

export default Interest;
