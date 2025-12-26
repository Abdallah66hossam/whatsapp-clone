import { Route, Routes } from "react-router-dom";
import Auth from "./pages/auth";
import Home from "./pages/home";

const Root = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </div>
  );
};

export default Root;
