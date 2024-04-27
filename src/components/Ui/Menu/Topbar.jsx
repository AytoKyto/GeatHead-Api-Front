import { Bars3Icon, BellIcon } from "@heroicons/react/24/outline";
import SearchBar from "../Menu/Sidebar";
import NotificationButton from "../Button/NotificationButton";
import ProfileMenu from "./ProfileMenu";

const Topbar = ({ setSidebarOpen }) => (
  <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
    <button
      type="button"
      className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
      onClick={() => setSidebarOpen(true)}
    >
      <Bars3Icon className="h-6 w-6" aria-hidden="true" />
    </button>

    <SearchBar />
    <NotificationButton />
    <ProfileMenu />
  </div>
);

export default Topbar;
