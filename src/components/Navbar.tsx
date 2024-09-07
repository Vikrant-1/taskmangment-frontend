import { useState } from "react";
import UserProfileIcon from "../assets/user_profile.png";
import NotificationIcon from "../assets/Notification.png";
import TextInput from "./TextInput";
import SearchIcon from "../assets/search-normal.png";
import CategoryIcon from "../assets/category.png";
import SortIcon from "../assets/sort.png";
function Navbar() {
  const [searchText, setSearchText] = useState("");
  return (
    <div className="bg-indigo-600 p-5">
      <div className="flex justify-between">
        <p className="font-medium text-white text-2xl">Page Title</p>
        <div className="flex">
          <div className="flex w-10 h-10 border-2 mr-5 border-[#F5F5F7] justify-center place-items-center rounded-full">
            <img src={NotificationIcon} style={{ width: 24, height: 24 }} />
          </div>
          <img src={UserProfileIcon} style={{ width: 40, height: 40 }} />
        </div>
      </div>
      <div className="flex justify-between mt-5">
        <div className="w-2/5">
          <TextInput
            rightImage={SearchIcon}
            value={searchText}
            onChangeValue={setSearchText}
            placeholder="Search ..."
          />
        </div>
        <div className="flex place-items-center">
          <button className="flex place-items-center border border-gray-500 px-5 py-2 rounded-xl bg-white">
            <img src={CategoryIcon} className="w-4 h-4 mr-2" />
            <p className="text-sm">Category</p>
          </button>
          <button className="flex place-items-center border border-gray-500 ml-2 px-5 py-2 rounded-xl bg-white">
            <img src={SortIcon} className="w-4 h-4 mr-2" />
            <p className="text-sm">Sort By</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
