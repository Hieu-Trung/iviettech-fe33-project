import { Route, Routes } from "react-router-dom";

import Introduction from "./pages/Introduction";
import { ROUTES } from "./constants/routers";
import Home from "./pages/Home";
import UserLayout from "./layouts/UserLayout";

function App() {
  return (
    <Routes>
      <Route element={<UserLayout/>}>
        <Route path={ROUTES.USER.INTRODUCTION} element={<Introduction />} />
        <Route path={ROUTES.USER.HOME} element={<Home />} />
      </Route>
      <Route path="*" element={<h1>404 Not Found</h1>} />
    </Routes>
  );
}

export default App;
