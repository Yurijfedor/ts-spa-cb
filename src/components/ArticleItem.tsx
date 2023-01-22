import React from "react";
import { Link } from "react-router-dom";
import { Article } from "../redux/articlesSlice";
interface IProps {
  articleInfo: Article;
}

export const ArticleItem: React.FC<IProps> = ({
  articleInfo: { imageUrl, title, summary, updatedAt , id },
}) => {
  return (
    <div>
      <img
        src={imageUrl}
        alt={title}
          />
          <p>{ updatedAt}</p>
        
          <Link
            to={{ pathname: `/articles/${id}` }}
          >
            {title}
          </Link>
          <p>{summary}</p>
    </div>
  );
};
