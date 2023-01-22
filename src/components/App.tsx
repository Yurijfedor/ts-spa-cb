import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { SharedLayout } from "./SharedLayout";

const ArticlesBoard = lazy(() => import("../pages/ArticlesBoard"));
const ArticleDetail = lazy(() => import("../pages/ArticleDetail"));
const NotFound = lazy(() => import("../pages/NotFound"));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<ArticlesBoard />} />
        <Route path="/articles/:articleId" element={<ArticleDetail />}></Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
