import { CalendarIcon, AddIcon, AtSignIcon } from "@chakra-ui/icons";
import { GiRank3, GiReceiveMoney } from "react-icons/gi";
import { BiNews } from "react-icons/bi";
import { MdConnectWithoutContact } from "react-icons/md";
import { FaHandHoldingHeart } from "react-icons/fa";

const menuItems: any[] = [
  {
    label: "Bảng tin",
    icon: <BiNews />,
    path: "/",
  },
  {
    label: "Nhận đồ",
    icon: <GiReceiveMoney />,
    path: "/getItem",
  },
  {
    label: "Cho đồ",
    icon: <FaHandHoldingHeart />,
    path: "/",
  },
  {
    label: "Xếp hạng",
    icon: <GiRank3 />,
    path: "/rank",
  },
  {
    label: "Liên hệ",
    icon: <MdConnectWithoutContact />,
    path: "/",
  },
];

export default menuItems;
