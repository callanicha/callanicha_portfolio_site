import React from "react";
import "../styles/Experiences.css"
import TimelineSection from "../component/TimelineSection";
import BackToMenu from "../component/BackToMenu";
import lvmh_cer from "../img/lvmh.png";

const Experiences = () => {
  const educationItems = [
    {
      title: "Chiangmai Demonstration School",
      location: "Chiangmai, Thailand",
      description: [
      "TOP 16 best middle and high school in Thailand where students have strong academic background along with extracurricular activities.", 
      "I was in sciences & mathematics specialization in high school."
      ],
      link: "https://cmud.edu.cmu.ac.th/",
    },
    {
      title: "EPITA (L’école des ingénieurs en informatique)",
      location: "Paris, France",
      description: ["International Bachelor of Computer Science with focus on software engineering and problem solving in multicultural environment.",
        "The program focus a lot on full stack development, algorithm & data structures, Mathematics, Computer Networking, database (NoSql and Sql) and other interesting courses."
      ],
      link: "https://www.epita.fr/en/bsc-computer-science-program-overview/",
    },
  ];

  const workItems = [
    {
      title: "Accueil Clientèle (Customer and Tourist Receptionist) - RATP",
      location: "Paris, France | During Olympic Game 2024",
      description: [
      "Spearheaded transportation ticket sales and delivered exceptional service to French and international clients during the Olympic 2024 in Paris, ensuring a seamless and memorable experience.", 
      "Leveraged trilingual proficiency in Thai, English, and French to navigate transportation logistics, streamlining travel for attendees through clear and effective communication."
      ],
      link: "https://www.ratp.fr/en",
    },
    {
      title: "Event Organizer and Marketing Internship - The DnD",
      location: "Bangkok, Thailand | Summer 2025",
      description: ["Coordinated end-to-end for 5+ concerts, fansign events, TV Show ‘Celeb War’, brand-ambassador campaigns, and music festivals, aligning marketing teams to deliver every project on time and within budget.",
                  "Collected, cleaned, and analyzed audience engagement data from 5,000+ attendees, translating insights into actionable recommendations that refined event marketing strategies for clients including GMM Grammy, Workpoint, and SM Entertainment.",
                  "Analyzed and presented dashboards to visualize client feedback from a government event, delivering data-driven insights that guided future programming."],
      link: "https://thednd.com/",
    }
  ];

  const certificatesItems = [
    {
      title: "6.00.1x: Introduction to Computer Science and Programming Using Python",
      location: "2022",
      description: 
      [
      "MITx, an online learning initiative of the Massachusetts Institute of Technology. (edX)"
      ],
      link: "https://courses.edx.org/certificates/e18292ba00b84b38acc8d62a1e0b93cd",
    },
    {
      title: "HKU_08x: Introduction to FinTech",
      location: "2024",
      description:
      [
        "a course of study offered by HKUx, an online learning initiative of The University of Hong Kong. (edX)"
      ],
      link: "https://courses.edx.org/certificates/48ed9dcadc24436ea8e35da548813cef",
    },
    {
      title:"Google Data Analytics Professional Certificate",
      location: "2025",
      description: 
      [
        "Developing skills in data cleaning, analysis, visualization, and tools like Spreadsheets, SQL, R, and Tableau. (Google coursera)"
      ],
      link: "https://coursera.org/share/5a45dd0cf16dab2f72d374ec02886ab5",
    },
    {
      title:"INSIDE LVMH",
      location: "2025",
      description: 
      [
        "Specializing in Creation & Branding, Operations & Supply Chain, gaining in-depth knowledge of luxury industry strategies, creativity, and supply chain management."
      ],
      link: lvmh_cer,
    }
  ]

  return (
    <div className="experiences-container">
      <BackToMenu />
      <TimelineSection topic="Education" items={educationItems} />
      <TimelineSection topic="Professional Experiences" items={workItems} />
      <TimelineSection topic="Certificates" items={certificatesItems} />
    </div>
  )
};

export default Experiences;
