import {
  Box,
  Button,
  TextField,
  Select,
  MenuItem,
  Rating,
} from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setBooks } from "state";
import { setApiBooks } from "state";

const RegisterBook = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const [bookTitle, setBookTitle] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [Title, setTitle] = useState("");
  const [Subtitle, setSubtitle] = useState("");
  const [Authors, setAuthors] = useState("");
  const [Description, setDescription] = useState("");
  const [Publisher, setPublisher] = useState("");
  const [PublishedDate, setPublishedDate] = useState("");
  const [Category, setCategory] = useState("");
  const [Status, setStatus] = useState("");
  const [LastPageRead, setLastPageRead] = useState("");
  const [Rating, setRating] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleFormSubmit = (values) => {
    console.log(values);
  };

  // const apiKey = process.env.GOOGLE_API_KEY
  // console.log("apiKey", apiKey)

  const fetchApiBooks = async () => {
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${Title}&filter=partial&key=AIzaSyCohZqM3mrOweOfT6PBFdCFoX9wXtFxfkg`,
      {
        method: "GET",
      }
    );
    const apiBooks = await response.json();
    dispatch(setApiBooks({ apiBooks: apiBooks }));
    console.log("apiBooks", apiBooks);
    setSuggestions(apiBooks.items.volumeInfo);
    console.log(setSuggestions);
  };

  const onSuggestHandler = (suggestion) => {
    // console.log("suggestion", suggestion)
    // setMangaId(suggestion.id);
    setTitle(suggestion.title);
    setAuthors(suggestion.author);
    setPublisher(suggestion.publisher);
    // setImgUrl(suggestion.imgUrl);
    setSuggestions([]);
  };

  const register = async () => {
    const formData = JSON.stringify({
      Title: Title,
      Subtitle: Subtitle,
      Authors: Authors,
      Description: Description,
      Publisher: Publisher,
      PublishedDate: PublishedDate,
      Category: Category,
      Status: Status,
      LastPageRead: LastPageRead,
      Rating: Rating,
    });

    const response = await fetch(`http://localhost:5001/usersBooks`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: formData,
    });
    const books = await response.json();
    dispatch(setBooks({ books }));
    navigate("/mybooks");
  };

  return (
    <Box m="20px">
      <Header
        title="REGISTER A BOOK"
        subtitle="Register a book that you have"
      />

      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={checkoutSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              {/* Title Field */}
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Title"
                onBlur={handleBlur}
                onChange={(event) => setTitle(event.target.value)}
                value={Title}
                name="title"
                error={!!touched.title && !!errors.title}
                helperText={touched.title && errors.title}
                sx={{ gridColumn: "span 4" }}
              />
              <Button
                type="submit"
                color="secondary"
                variant="contained"
                onClick={fetchApiBooks}
              >
                Search
              </Button>
              {/* Suggestions Field */}
              {suggestions &&
                suggestions.map((suggestion, i) => (
                  <div
                    key={i}
                    className="suggestion"
                    onClick={() => onSuggestHandler(suggestion)}
                  >
                    {suggestion.title}
                  </div>
                ))}
              {/* Subtitle Field */}
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Subtitle"
                onBlur={handleBlur}
                onChange={(event) => setSubtitle(event.target.value)}
                value={Subtitle}
                name="subtitle"
                error={!!touched.subtitle && !!errors.subtitle}
                helperText={touched.subtitle && errors.subtitle}
                sx={{ gridColumn: "span 4" }}
              />
              {/* Authors Field */}
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Authors"
                onBlur={handleBlur}
                onChange={(event) => setAuthors(event.target.value)}
                value={Authors}
                name="authors"
                error={!!touched.authors && !!errors.authors}
                helperText={touched.authors && errors.authors}
                sx={{ gridColumn: "span 4" }}
              />
              {/* Description Field */}
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Description"
                onBlur={handleBlur}
                onChange={(event) => setDescription(event.target.value)}
                value={Description}
                name="description"
                error={!!touched.authors && !!errors.authors}
                helperText={touched.authors && errors.authors}
                sx={{ gridColumn: "span 4" }}
              />
              {/* Publisher Field */}
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Publisher"
                onBlur={handleBlur}
                onChange={(event) => setPublisher(event.target.value)}
                value={Publisher}
                name="publisher"
                error={!!touched.publisher && !!errors.publisher}
                helperText={touched.publisher && errors.publisher}
                sx={{ gridColumn: "span 4" }}
              />
              {/* Published Date Field */}
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Published Date"
                onBlur={handleBlur}
                onChange={(event) => setPublishedDate(event.target.value)}
                value={PublishedDate}
                name="publishedDate"
                error={!!touched.publishedDate && !!errors.publishedDate}
                helperText={touched.publishedDate && errors.publishedDate}
                sx={{ gridColumn: "span 4" }}
              />
              {/* Category Field */}
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Category"
                onBlur={handleBlur}
                onChange={(event) => setCategory(event.target.value)}
                value={Category}
                name="category"
                // error={!!touched.category && !!errors.category}
                // helperText={touched.category && errors.category}
                sx={{ gridColumn: "span 4" }}
              />

              {/* Status Field */}
              <Select
                className="selectFilters"
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard reading"
                value={Status}
                onChange={(event) => setStatus(event.target.value)}
                label="Status"
              >
                <MenuItem value={"toread"}>toread</MenuItem>
                <MenuItem value={"readingnow"}>readingnow</MenuItem>
                <MenuItem value={"completed"}>completed</MenuItem>
              </Select>

              {/* Last Page Read Field */}
              <TextField
                fullWidth
                variant="filled"
                type="number"
                label="Last Page Read"
                onBlur={handleBlur}
                onChange={(event) => setLastPageRead(event.target.value)}
                value={LastPageRead}
                name="lastPageRead"
                error={!!touched.lastPageRead && !!errors.lastPageRead}
                helperText={touched.lastPageRead && errors.lastPageRead}
                sx={{ gridColumn: "span 4" }}
              />
              {/* Rating Field */}
              <TextField
                fullWidth
                variant="filled"
                type="number"
                label="Rating"
                onBlur={handleBlur}
                onChange={(event) => setRating(event.target.value)}
                value={Rating}
                name="rating"
                error={!!touched.lastPageRead && !!errors.lastPageRead}
                helperText={touched.lastPageRead && errors.lastPageRead}
                sx={{ gridColumn: "span 4" }}
              />
              {/* Register Button */}
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button
                type="submit"
                color="secondary"
                variant="contained"
                onClick={register}
              >
                Register
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

const checkoutSchema = yup.object().shape({
  bookName: yup.string().required("required"),
  author: yup.string().required("required"),
  category: yup.string().required("required"),
});
const initialValues = {
  bookName: "",
  author: "",
  category: "",
};

export default RegisterBook;
