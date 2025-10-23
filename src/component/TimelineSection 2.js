import "../styles/Experiences.css"

const TimelineSection = ({ topic, items }) => (
    <div className="timeline-section">
        <div className="timeline-topic">
            <h2>{topic}</h2>
        </div>
        <div className="timeline-center-line">
            {items.map((item, idx) => (
                <div key={idx} className="timeline-entry">
                    <div className="timeline-dot" />
                    <div className="timeline-box" >
                        <h3>
                            {item.link ? (
                                <a href={item.link} target="_blank" rel="noopener noreferrer">
                                    {item.title}
                                </a>
                            ) : (
                                item.title
                            )}
                        </h3>
                        <p className="location">&lt;{item.location}&gt;</p>
                        {Array.isArray(item.description) ? (
                            <ul className="timeline-description-list">
                                {item.description.map((point, i) => (
                                    <li key={i}>{point}</li>
                                ))}
                            </ul>
                        ) : (
                        <p className="description">{item.description}</p>
                        )}
                    </div>
                </div>
            ))}
        </div>
    </div>
)

export default TimelineSection