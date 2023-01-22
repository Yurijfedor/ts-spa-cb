import React from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../redux/hooks";
import { Article } from "../redux/articlesSlice";

interface IProps {
  articleInfo: Article;
}

export const ArticleItem: React.FC<IProps> = ({
  articleInfo: { imageUrl, title, summary, updatedAt , id },
}) => {
  const { value } = useAppSelector((state) => state.filter);
  
  const titleAsArray = title.toLowerCase().split(" ")
  const valueAsArray = value.toLowerCase().split(" ")

  // Я бы предложил такой вариант:

const renderMarkedTitle = () => 
 titleAsArray.map((word) => valueAsArray.includes(word) ? `<p><span style={{ backgroundColor: "yellow" }}> ${word}</span></p>` : null).join('');
  
  //  const markeredtitle = titleAsArray.reduce((_acc, word) => {
  //     if (valueAsArray.includes(word)) {
  //      return `<span style={{ backgroundColor: "yellow" }}>${word}</span>`
  //    }
  //   return _acc = _acc + " " + word
  //   }, "")
  // console.log(markedTitle);
  
  return (

    <div>
      <p><span style={{ backgroundColor: "yellow" }}>nasa</span> suspends efforts to fully deploy lucy solar array</p>
      <p>{renderMarkedTitle()}</p>
      <img
        src={imageUrl}
        alt={title}
          />
          <p>{ updatedAt}</p>
        
          <Link
            to={{ pathname: `/articles/${id}` }}
          >
        { renderMarkedTitle()}
          </Link>
          <p>{summary}</p>
    </div>
  );
};
