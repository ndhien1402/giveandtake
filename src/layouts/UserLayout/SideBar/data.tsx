import { CalendarIcon, AddIcon, AtSignIcon } from "@chakra-ui/icons";
import { GiRank3, GiReceiveMoney } from "react-icons/gi";
import { BiNews } from "react-icons/bi";

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
    label: "Xếp hạng",
    icon: <GiRank3 />,
    path: "/rank",
  },
];

export default menuItems;
