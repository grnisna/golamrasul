import { Helmet } from "react-helmet";
import { Route, Routes } from "react-router-dom";
import MainPage from "./FixedComponent/mainPage/MainPage";

function App() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>GOLAM RASUL</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>

      <MainPage />
      <Routes>
        <Route path="/aboutMe"></Route>
      </Routes>
    </div>
  );
}

export default App;
