import React, { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { fetchArticles } from "../redux/operation";
import { ArticlesList } from "../components/ArticlesList";
import { Container } from "../components/Container";

const ArticlesBoard: React.FC = () => {
  const { articlesList, isLoading, error } = useAppSelector((state) => state.articles);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchArticles());
  }, []);

  return (
    <Container>
      <section>
        {isLoading && <b>Loading jobs...</b>}
        {error && <b>{error}</b>}
        <ArticlesList articlesList={articlesList} />
      </section>
    </Container>
  );
};

export default ArticlesBoard;
