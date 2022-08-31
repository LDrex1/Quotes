import React from "react";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import ThemeProvider from "./components/ThemeProvider";
import { FormValuesContext, useFormValues } from "./components/AuthForm";
import QuotesPage from "./components/QuotesPage";

function App() {
  // console.log(useFormValues());
  return (
    <>
      <Routes>
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/" element={<SignIn />} />
        <Route
          path="/quotes"
          element={
            <>
              <ThemeProvider>
                <QuotesPage />
              </ThemeProvider>
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
