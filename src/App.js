import React from "react";
import { useState } from "react";
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
      {/* <SignUp /> */}

      {/* <SignIn /> */}
      <ThemeProvider>
        <QuotesPage />
      </ThemeProvider>
    </>
  );
}

export default App;
