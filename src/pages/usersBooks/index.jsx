import React from "react";
import { Box, useMediaQuery } from "@mui/material";
import Header from "components/Header";
import { useGetUsersBooksQuery } from "state/api";
import BookCard from "components/BookCard";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBooks } from "state";

const UsersBooks = () => {
  const isNonMobile = useMediaQuery("(min-width: 1000px)");
  const dispatch = useDispatch();
  const data = useSelector((state) => state.global.books);
  // const {data} = useGetUsersBooksQuery()
  // console.log("dataSelector", data)

  const getBooks = async () => {
    const response = await fetch("http://localhost:5001/usersBooks", {
      method: "GET",
    });
    const books = await response.json();
    dispatch(setBooks({ books: books }));
    console.log("books", books)
  };
  

  useEffect(() => {
    getBooks()
  }, []);

 

  return (
    <Box m="1.5rem 2.5rem">
      <Header title="MY BOOKS" subtitle="See your collection of books." />
      {data ? (
        <Box
          mt="20px"
          display="grid"
          gridTemplateColumns="repeat(4, minmax(0, 1fr))"
          justifyContent="space-between"
          rowGap="20px"
          columnGap="1.33%"
          sx={{
            "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
          }}
        >
          {data.map(
            ({
              _id,
              Title,
              Subtitle,
              Authors,
              Description,
              Publisher,
              PublishedDate,
              Category,
              Status,
              LastPageRead,
              Rating,
            }) => (
              <BookCard
                key={_id}
                Title={Title}
                Subtitle={Subtitle}
                Authors={Authors}
                Description={Description}
                Publisher={Publisher}
                PublishedDate={PublishedDate}
                Category={Category}
                Status={Status}
                LastPageRead={LastPageRead}
                Rating={Rating}
              />
            )
          )}
          {console.log("books", data[0].Title)}
        </Box>
      ) : (
        <>Loading...</>
      )}
    </Box>
  );
};

export default UsersBooks;
