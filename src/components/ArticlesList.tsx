import { ArticleItem } from "./ArticleItem";
import { Article } from "../redux/articlesSlice";
import { useAppSelector } from "../redux/hooks";


interface Iprops {
  articlesList: Article[];
}

export const ArticlesList: React.FC<Iprops> = () => {
  const {value} = useAppSelector((state) => state.filter);
  const {articlesList} = useAppSelector((state) => state.articles);

  const filteredArticles = articlesList.filter((article: Article) => article.title.toLowerCase().includes(value.toLowerCase()))
  return (
    <ul>
      {filteredArticles.map((article: Article) => {
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
