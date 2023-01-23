import React, {useState} from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../redux/hooks";
import { Article } from "../redux/articlesSlice";
import { Grid, Typography, Box} from "@mui/material";
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardOverflow from '@mui/joy/CardOverflow';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { ReadMore } from "./ReadMore";

interface IProps {
  articleInfo: Article;
}

export const ArticleItem: React.FC<IProps> = ({
  articleInfo: { imageUrl, title, summary, updatedAt, id },
}) => {
  const { value } = useAppSelector((state) => state.filter);
    const [isReadMore, setIsReadMore] = useState(true);

  const valueAsArray = value.toLowerCase().split(" ");
  

   const renderMarkedTitle = () => {
    const titleAsArray = title.toLowerCase().split(" ");
    return titleAsArray.map((word: string, index: number) => {
      if (valueAsArray.includes(word))
        return (
          <span key={index} style={{ backgroundColor: "yellow" }}>
            {word + " "}
          </span>
        );
      else return " " + word + " ";
    });
  };

  const renderMarkedSummary = () => {
    const summaryAsArray = summary.toLowerCase().split(" ");
    return summaryAsArray.map((word: string, index: number) => {
      if (valueAsArray.includes(word))
        return (
          <span key={index} style={{ backgroundColor: "yellow" }}>
            {word}
          </span>
        );
      else return " " + word + " ";
    });
  };

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
    };
  

  return (
    <Grid item xs={12} md={4}>
        <Card variant="outlined" sx={{ height: "530px", borderColor: "#EAEAEA", borderRadius: "5px" }}>
                <Link 
        style={{textDecoration: 'none', color: 'inherit'}}
        to={{ pathname: `/articles/${id}` }}
      >

        <CardOverflow sx={{mb: "25px"}}>
          <AspectRatio ratio="2">
            <img
              src={imageUrl}
              loading="lazy"
              alt={title}
            />
        </AspectRatio>
        </CardOverflow>
        <Box sx={{display: "flex", mb: "24px"}}>
          <CalendarTodayIcon sx={{color: "#363636"}} />
          <Typography sx={{ml: "8px", color: "#363636"}}>{new Date(updatedAt).toDateString()}</Typography>
        </Box>
          <Typography variant="h2" sx={{
            fontFamily: 'Montserrat',
            fontWeight: 400,
            fontSize: "24px",
            lineHeight: 1.2,
            mb: "20px"
          }}
          >
            {renderMarkedTitle()}
            </Typography>
        <Typography sx={{fontFamily: 'Montserrat',
            fontWeight: 400,
            fontSize: "16px",
            lineHeight: 1.2,
            mb: "20px"}}>
        {isReadMore ? summary.slice(0, 100) : renderMarkedSummary()}
      </Typography>
           </Link>

      <Typography
        sx={{display: 'flex', alignItems: "center", gap: "6px", color: "000", fontSize: "16px", fontWeight: 600, cursor: 'pointer' }}
        onClick={toggleReadMore}
      >
        {isReadMore ? "...read more" : " show less"}
        <ArrowForwardIcon sx={{ color: "#363636", fontSize: "15px"}} />
      </Typography>
        
          
      </Card>
    </Grid>
  );
};
