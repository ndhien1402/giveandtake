import {
  Avatar,
  Box,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Heading,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useToast,
} from "@chakra-ui/react";
import Image from "next/image";
import { AiOutlineLike, AiOutlineComment } from "react-icons/ai";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { TbShare3 } from "react-icons/tb";

const PostCard = (props: any) => {
  const toast = useToast();
  const handleToast = () => {
    toast({
      position: "top",
      description: "Tính năng đang phát triển",
      status: "info",
      duration: 2000,
    });
  };
  return (
    <Card
      className="w-full"
      margin={"auto"}
      marginTop={4}
      maxW="2xl"
      backgroundColor={"color.bg"}
      color={"color.text"}
      border={"1px"}
      borderColor={"color.border"}
    >
      <CardHeader>
        <Flex>
          <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
            <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
            <Box>
              <Heading size="sm">Segun Adebayo</Heading>
              <Text>2 ngày trước</Text>
            </Box>
          </Flex>
          <Menu>
            <MenuButton>
              <BiDotsVerticalRounded />
            </MenuButton>
            <MenuList backgroundColor={"color.bg"}>
              <MenuItem backgroundColor={"color.bg"}>Chỉnh sửa</MenuItem>
              <MenuItem backgroundColor={"color.bg"}>Báo cáo</MenuItem>
              <MenuItem backgroundColor={"color.bg"}>Delete</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </CardHeader>
      <CardBody paddingTop={0} paddingBottom={2}>
        <Text>
          🌧 TUYỆT VỜI 🌧 HÀ NỘI TỪ ĐÊM NAY, NGÀY MAI SẼ CÓ MƯA TO, MÁT VÔ CÙNG TỔ
          QUỐC TA ƠI 🙏⛈
        </Text>
        <div className="relative w-full h-[350px] mt-2">
          <Image
            className=""
            src={
              "https://hanoicomputercdn.com/media/news/1396_cau_hinh_pc_15_trieu_hacom.jpg"
            }
            fill
            alt=""
          />
        </div>
        <div className="w-full flex justify-between py-5 pb-2 border-b-[1px] border-[#a8b3cf33]">
          <span className="flex items-center gap-1 cursor-pointer">
            <AiOutlineLike />
            34,8k
          </span>
          <span className="cursor-pointer">19 bình luận</span>
          <span className="cursor-pointer">68 chia sẻ</span>
        </div>
      </CardBody>
      <CardFooter paddingTop={0}>
        <div className="w-full flex justify-between">
          <span
            className="flex items-center gap-1 px-2 text-blue-400 cursor-pointer"
            onClick={() => handleToast()}
          >
            <AiOutlineLike />
            Thích
          </span>
          <span
            className="flex items-center gap-1 px-2 cursor-pointer"
            onClick={() => handleToast()}
          >
            <AiOutlineComment />
            Bình luận
          </span>
          <span
            className="flex items-center gap-1 px-2 cursor-pointer"
            onClick={() => handleToast()}
          >
            <TbShare3 />
            Chia sẻ
          </span>
        </div>
      </CardFooter>
    </Card>
  );
};

export default PostCard;
