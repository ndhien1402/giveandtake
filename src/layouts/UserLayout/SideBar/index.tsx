import Link from "next/link";
import { CalendarIcon } from "@chakra-ui/icons";
import menuItems from "./data";
import store from "lib/zustand";
const SideBar = () => {
  const { setOpenDrawer } = store.drawer();

  return (
    <>
      <div className="mt-8"></div>
      <ul onClick={() => setOpenDrawer(false)}>
        {menuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link
                href={item.path}
                className="flex items-center hover:bg-gray-800 px-4 py-1"
              >
                <span className="mr-2 inline-flex items-center">
                  {item.icon}
                </span>
                <span>{item.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default SideBar;
