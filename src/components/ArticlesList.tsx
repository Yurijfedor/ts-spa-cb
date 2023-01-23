import { ArticleItem } from "./ArticleItem";
import { Article } from "../redux/articlesSlice";
import { useAppSelector } from "../redux/hooks";
import {Grid, Typography, Divider} from "@mui/material";
import { useState } from "react";


interface Iprops {
  articlesList: Article[];
}

export const ArticlesList: React.FC<Iprops> = () => {
  const {value} = useAppSelector((state) => state.filter);
  const { articlesList } = useAppSelector((state) => state.articles);

  const filteredArticles = articlesList.filter((article: Article) => article.title.toLowerCase().includes(value.toLowerCase()) || article.summary.toLowerCase().includes(value.toLowerCase()))
const countArticles = filteredArticles.length

  return (
    <>
      <Typography>Results: {countArticles}</Typography>
      <Divider sx={{mb: "45px"}}/>
    <Grid container spacing={"45px"} sx={{listStyle: 'none'}}>
      {filteredArticles.map((article: Article) => (
        <ArticleItem key={article.id} articleInfo={article}/>
      ))}
    </Grid>
    </>
        
  );
};
