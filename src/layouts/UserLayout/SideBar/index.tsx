import Link from "next/link";
import { CalendarIcon } from "@chakra-ui/icons";
import menuItems from "./data";
const SideBar = () => {
  return (
    <>
      <div className="mt-8"></div>
      <ul>
        {menuItems.map((item) => {
          return (
            <li key={item.path}>
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
