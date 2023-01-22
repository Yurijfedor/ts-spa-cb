import { ArticleItem } from "./ArticleItem";
import { Article } from "../redux/articlesSlice";

interface Iprops {
  articlesList: Article[];
}

export const ArticlesList: React.FC<Iprops> = ({ articlesList }) => {
  return (
    <ul>
      {articlesList.map((article) => {
        return (
          <li
            key={article.id}
          >
            <ArticleItem articleInfo={article} />
          </li>
        );
      })}
    </ul>
  );
};
