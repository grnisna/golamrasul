import { Route, Routes } from "react-router-dom";
import MainPage from "./FixedComponent/mainPage/MainPage";

function App() {
  return (
    <div>
      <MainPage/>
      <Routes>
        <Route path="/aboutMe" ></Route>
      </Routes>
    </div>
  )
}

export default App;
