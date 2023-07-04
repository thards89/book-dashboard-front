import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Button,
  Typography, Rating
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import bookCover from 'assets/harry-potter-cover.png';


const BookCard = ({
  Title,
  Subtitle,
  Authors,
  Description,
  Publisher,
  PublishedDate,
  Category,
  Status,
  LastPageRead,
  Rating
}) => {
  const theme = useTheme();
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card
      sx={{
        backgroundImage: "none",
        backgroundColor: theme.palette.background.alt,
        borderRadius: "0.55rem",
      }}
    >
      <CardContent>
      <CardMedia
                  sx={{ height: 250, width: "100%", margin: "auto" }}
                  component="img"
                  image={bookCover}
                  alt="img"
                />
      <Typography variant="h5" component="div">
          Title: {Title}
        </Typography>
        <Typography variant="h5" component="div">
          Subtitle: {Subtitle}
        </Typography>
        <Typography
          sx={{ fontSize: 14 }}
          color={theme.palette.secondary[700]}
          gutterBottom
        >
         Authors: {Authors}  
        </Typography>
        <Typography color={theme.palette.secondary[400]}>
          Description: {Description}
        </Typography>
        <Typography color={theme.palette.secondary[400]}>
          Publisher: {Publisher}
        </Typography>
        <Typography color={theme.palette.secondary[400]}>
          Published Date: {PublishedDate}
        </Typography>
        <Typography color={theme.palette.secondary[400]}>
          Category: {Category}
        </Typography>
        <Typography color={theme.palette.secondary[400]}>
        Status: {Status}
        </Typography>
        <Typography sx={{ mb: "1.5rem" }} color={theme.palette.secondary[400]}>
        Last Page Read: {LastPageRead}
        </Typography> 
        <Typography sx={{ mb: "1.5rem" }} color={theme.palette.secondary[400]}>
       Rating: {Rating}
        </Typography> 
        
        {/* <Rating value={Rating} readOnly /> */}
          
      </CardContent>

        <Button
          variant="primary"
          size="small"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          Edit
        </Button>
        <Button
          variant="primary"
          size="small"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          Delete
        </Button>
    </Card>

  );
};

export default BookCard;