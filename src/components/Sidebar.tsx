import AppIcon from "../assets/app_icon.png";
import AddIcon from "../assets/add_icon.png";
import { Link, useLocation, useNavigate, useNavigation } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { userState, tokenState } from "../store/userAtoms";
import { IconType } from "react-icons";
import { RxDashboard } from "react-icons/rx";
import { GrTask } from "react-icons/gr";
import { RiTeamLine } from "react-icons/ri";
import { SlOrganization } from "react-icons/sl";
import { TbMessages } from "react-icons/tb";
import { CiSettings } from "react-icons/ci";
import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import ProjectCreateComponent from "./ProjectCreateComponent";
import { SlLogout } from "react-icons/sl";

interface SideBarProps {
  title: string;
  icon: IconType;
  isSelected?: boolean;
  screen: string;
}

const SIDEBAR_DATA: SideBarProps[] = [
  { title: "Dashboard", icon: RxDashboard, screen: "/" },
  { title: "Task", icon: GrTask, screen: "/task" },
  { title: "Team", icon: RiTeamLine, screen: "/team" },
  { title: "Projects", icon: SlOrganization, screen: "/projects" },
  { title: "Messages", icon: TbMessages, screen: "/message" },
  { title: "Settings", icon: CiSettings, screen: "/settings" },
];

function Sidebar() {
  const location = useLocation();
  const setUser = useSetRecoilState(userState);
  const setToken = useSetRecoilState(tokenState);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const navigate = useNavigate();

  const onClick = () => {
    setUser({});
    setToken("");
    localStorage.clear();
  };

  return (
    <div
      className={`flex flex-col h-full px-4 bg-black transition-all duration-300 ${
        isCollapsed ? "w-17" : "w-64"
      }`}
    >
      {/* Toggle Collapse Button */}
      <div className="flex justify-end p-2">
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="flex justify-center items-center w-8 h-8 rounded-full bg-white"
        >
          {isCollapsed ? (
            <IoIosArrowForward className="w-6 h-6" />
          ) : (
            <IoIosArrowBack className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Sidebar Header */}
      <div className="flex items-center w-full p-4">
        <img src={AppIcon} className="w-8 h-8" alt="App Icon" />
        {!isCollapsed && (
          <p className="ml-2 text-xl font-medium text-white">ProjectMinds</p>
        )}
      </div>

      {/* Create New Project Button */}
      <button
        onClick={() => {
          navigate("createproject");
        }}
        className={isCollapsed ? "w-12 h-12 mt-4":"w-full mt-6"}
      >
        <div className="flex items-center p-2 rounded-full bg-white hover:bg-gray-100">
          <img className="w-8 h-8" src={AddIcon} alt="Add Icon" />
          {!isCollapsed && <p className="text-sm ml-2">Create new Project</p>}
        </div>
      </button>

      {/* Sidebar Items */}
      <div className="flex flex-col mt-6">
        {SIDEBAR_DATA.map((item, index) => (
          <SideBarItem
            key={index}
            icon={item.icon}
            title={item.title}
            isSelected={item.screen === location.pathname}
            screen={item.screen}
            isCollapsed={isCollapsed}
          />
        ))}
      </div>

      {/* Log Out Button */}
      <div className="flex-1 flex flex-col justify-end p-4">
        <button
          onClick={onClick}
          className={
            isCollapsed
              ? "flex w-12 h-12 bg-red-500 hover:bg-red-600 text-white rounded justify-center place-items-center"
              : "w-full py-2 bg-red-500 hover:bg-red-600 text-white rounded"
          }
        >
          {isCollapsed ? <SlLogout /> : "Log out"}
        </button>
      </div>
    </div>
  );
}

function SideBarItem({
  icon: Icon,
  title,
  isSelected,
  screen,
  isCollapsed,
}: SideBarProps & { isCollapsed: boolean }) {
  return (
    <Link to={screen} className="w-full">
      <div
        className={`flex items-center p-3 mt-4 rounded-full transition-all duration-300 ${
          isSelected ? "bg-white" : "bg-transparent"
        } ${!isSelected && "hover:bg-gray-800"} ${
          isCollapsed
            ? "justify-center place-items-center p-0 w-12 h-12"
            : "pl-5"
        }`}
      >
        <Icon
          className={`w-6 h-6 ${isSelected ? "text-black" : "text-white"}`}
        />
        {!isCollapsed && (
          <p className={`ml-3 ${isSelected ? "text-black" : "text-white"}`}>
            {title}
          </p>
        )}
      </div>
    </Link>
  );
}

export default Sidebar;
