import "./PortfolioCard.scss";
const PortfolioCard = ({
  key,
  imgUrl,
  title,
  websiteLink,
  gitHubLink,
  description,
  category,
}) => {
  return (
    <div className="card">
      <div className="sample-image">
        <img src={imgUrl} alt={`project_ ${key}`} />
      </div>
      <div className="bottom-section">
        <div className="details">
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
        <div>
          {websiteLink && (
            <span>
              {(category === "code" || category === "design") && (
                <a target="_blank" rel="noreferrer" href={websiteLink}>
                  <button className="demo-btn">View Demo</button>
                </a>
              )}
            </span>
          )}

          {category === "code" && (
            <a target="_blank" rel="noreferrer" href={gitHubLink}>
              <button className="source-code-btn">View Source Code</button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
