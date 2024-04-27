import { BellIcon } from "@heroicons/react/24/outline";

const NotificationButton = () => (
  <button type="button" className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500">
    <BellIcon className="h-6 w-6" aria-hidden="true" />
  </button>
);

export default NotificationButton;
