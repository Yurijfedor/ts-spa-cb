import React, { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { fetchArticles } from "../redux/operation";
import { ArticlesList } from "../components/ArticlesList";
import { Container } from "../components/Container";
import { Filter } from "../components/Filter";

const ArticlesBoard: React.FC = () => {
  const { articlesList, isLoading, error } = useAppSelector((state) => state.articles);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchArticles());
  }, []);

  return (
    <Container>
      <section>
        {isLoading && <b>Loading articles...</b>}
        {error && <b>{error}</b>}
        <Filter/>
        <ArticlesList articlesList={articlesList} />
      </section>
    </Container>
  );
};

export default ArticlesBoard;
