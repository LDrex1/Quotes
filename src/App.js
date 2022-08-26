import "./App.css";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import ThemeProvider from "./components/ThemeProvider";
import QuotesPage from "./components/QuotesPage";

function App() {
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
