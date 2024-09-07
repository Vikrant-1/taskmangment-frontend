import AppIcon from "../assets/app_icon.png";
import DashboardOverviewIcon from "../assets/dashboard-overview.png";
import DashboardTaskIcon from "../assets/dashboard-book.png";
import DashboardTeamIcon from "../assets/dashboard-team.png";
import DashboardMessageIcon from "../assets/dashboard-message.png";
import DashboardSettingsIcon from "../assets/dashboard-settings.png";
import { Link, useLocation } from "react-router-dom";
import { useRecoilState } from "recoil";
import { userState,tokenState } from "../store/userAtoms";

interface SideBarProps {
  title: string;
  icon: string;
  isSelected?: boolean;
  screen: string;
}

const SIDEBAR_DATA: SideBarProps[] = [
  {
    title: "Overview",
    icon: DashboardOverviewIcon,
    screen: "/",
  },
  {
    title: "Task",
    icon: DashboardTaskIcon,
    screen: "/task",
  },
  {
    title: "Team",
    icon: DashboardTeamIcon,
    screen: "/team",
  },
  {
    title: "Projects",
    icon: DashboardTeamIcon,
    screen: "/projects",
  },
  {
    title: "Messages",
    icon: DashboardMessageIcon,
    screen: "/message",
  },
  {
    title: "Settings",
    icon: DashboardSettingsIcon,
    screen: "/settings",
  },
];

function Sidebar() {
  const location = useLocation();
  const [user, setUser] = useRecoilState(userState);
  const [token, setToken] = useRecoilState(tokenState);

  const onClick = () => {
    setUser({});
    setToken("");
    localStorage.removeItem("token");
  };

  return (
    <div className="flex flex-col w-1/6 h-full place-items-center">
      <div className="flex flex-col place-items-center mt-10 my-3">
        <img src={AppIcon} className="w-20 h-20" />
        <p className="ml-2 text-xl font-medium mt-4">ProjectMinds</p>
      </div>
      <div className="flex flex-col place-items-center mt-5">
        <p className="ml-2 text-xl font-medium mt-2">
          Hi, {JSON.stringify(user)}
        </p>
      </div>
      <div className="flex flex-col place-items-center mt-10">
        {SIDEBAR_DATA.map((item, index) => (
          <SideBarItem
            key={index.toString()}
            icon={item.icon}
            title={item.title}
            isSelected={item.screen === location.pathname}
            screen={item.screen}
          />
        ))}
      </div>
      <div className="fixed bottom-0 left-0 right-0 p-4">
        <button
          onClick={onClick}
          className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
        >
          Log out
        </button>
      </div>
    </div>
  );
}

function SideBarItem(props: SideBarProps) {
  return (
    <Link to={props.screen}>
      <div
        className={`flex py-2.5 px-5 mt-6 ${
          props.isSelected ? "bg-indigo-500" : "bg-transparent"
        } hover:bg-${
          props.isSelected ? "" : "indigo-100"
        } hover:cursor-pointer w-[188px] rounded-md`}
      >
        <img src={props.icon} className="w-6 h-6 mr-3" />
        <p className={`text-${props.isSelected ? "white" : "black"}`}>
          {props.title}
        </p>
      </div>
    </Link>
  );
}

export default Sidebar;
