import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useSelector } from "react-redux";
import { themeSettings } from "theme";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { useMemo } from "react";
import Layout from "pages/layout"
import UsersBooks from "pages/usersBooks"
import RegisterBook from "pages/registerBook"
import Dashboard from "pages/dashboard"
import BookCard from "components/BookCard"


function App() {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/mybooks" element={<UsersBooks />} />
              <Route path="/registerabook" element={<RegisterBook />} />
              {/* <Route path="/transactions" element={<Transactions />} /> */}
              {/* <Route path="/geography" element={<Geography />} /> */}
              {/* <Route path="/overview" element={<Overview />} /> */}
              {/* <Route path="/daily" element={<Daily />} /> */}
              {/* <Route path="/monthly" element={<Monthly />} /> */}
              {/* <Route path="/breakdown" element={<Breakdown />} />  */}
              {/* <Route path="/admin" element={<Admin />} />  */}
              {/* <Route path="/performance" element={<Performance />} />  */}
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
  </div>
  )
}

export default App;
