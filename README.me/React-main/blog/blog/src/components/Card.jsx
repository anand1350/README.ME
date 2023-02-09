import { Link } from "react-router-dom";

export default function Card({ image, title, index, articleId, text }) {
  return (
    <>
      <Link to={"/articles/" + articleId}>
        <div id={articleId} className="card">
          <div className="card-img">
            <img src={image} alt={title} />
          </div>
          <div className="card-body">{text}</div>
        </div>
      </Link>
    </>
  );
}
