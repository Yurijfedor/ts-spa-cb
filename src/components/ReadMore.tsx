import { useState } from "react";
import { Typography } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

  interface IProps {
  text: string;
}

export const ReadMore: React.FC<IProps> = ({text}) => {
  const [isReadMore, setIsReadMore] = useState(true);
    
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
    };

  return (
    <>
      <Typography sx={{fontFamily: 'Montserrat',
            fontWeight: 400,
            fontSize: "16px",
            lineHeight: 1.2,
            mb: "20px"}}>
        {isReadMore ? text.slice(0, 100) : text}
      </Typography>
      
      <Typography
        sx={{display: 'flex', alignItems: "center", gap: "6px", color: "000", fontSize: "16px", fontWeight: 600 }}
        onClick={toggleReadMore}
      >
        {isReadMore ? "...read more" : " show less"}
        <ArrowForwardIcon sx={{ color: "#363636", fontSize: "15px"}} />
      </Typography>
    </>
  );
};