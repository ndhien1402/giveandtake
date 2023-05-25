import { GiRank3, GiReceiveMoney } from "react-icons/gi";
import { BiNews } from "react-icons/bi";
import { FaHandHoldingHeart } from "react-icons/fa";
import { FcFeedback } from "react-icons/fc";
import { CgProfile } from "react-icons/cg";

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
    path: "/giveItem",
  },
  {
    label: "Xếp hạng",
    icon: <GiRank3 />,
    path: "/rank",
  },
  {
    label: "Hồ sơ",
    icon: <CgProfile />,
    path: "/profile",
  },
  {
    label: "Góp ý",
    icon: <FcFeedback />,
    path: "/feedback",
  },
];

export default menuItems;
