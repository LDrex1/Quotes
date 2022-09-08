import React from "react";
import { Routes, Route } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import "./App.css";
import { auth } from "./firebase-config";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import ThemeProvider from "./components/ThemeProvider";
import QuotesPage from "./components/QuotesPage";

function App() {
  const [user] = useAuthState(auth);
  return (
    <>
      <Routes>
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/" element={<SignIn />} />
        <Route
          path="/quotes"
          element={
            user && (
              <>
                <ThemeProvider>
                  <QuotesPage />
                </ThemeProvider>
              </>
            )
          }
        />
      </Routes>
    </>
  );
}

export default App;
