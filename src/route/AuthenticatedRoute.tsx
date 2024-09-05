import { Route, Routes } from "react-router-dom";
import DashboardPage from "../pages/DashboardPage";

function AuthenticatedRoute() {
  return (
    <Routes>
      <Route path="/" element={<DashboardPage />} />
    </Routes>
  );
}

export default AuthenticatedRoute;
