import { Route, Routes } from "react-router-dom";
import DashboardPage from "../pages/DashboardPage";
import TaskPage from "../pages/TaskPage";
import MessagePage from "../pages/MessagePage";
import TeamPage from "../pages/TeamPage";
import SettingsPage from "../pages/SettingsPage";
import ProjectsPage from "../pages/ProjectsPage";

function AuthenticatedRoute() {
  return (
    <Routes>
      <Route path="/" element={<DashboardPage />} />
      <Route path="/task" element={<TaskPage />} />
      <Route path="/team" element={<TeamPage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/message" element={<MessagePage />} />
      <Route path="/settings" element={<SettingsPage />} />
    </Routes>
  );
}

export default AuthenticatedRoute;
