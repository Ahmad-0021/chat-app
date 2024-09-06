import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Chats from "../pages/Chats";
import "./app.css";
const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/chats" Component={Chats} />
      </Routes>
    </div>
  );
};

export default App;
