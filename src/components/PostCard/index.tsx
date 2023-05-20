import {
  Avatar,
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Heading,
  IconButton,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Input,
} from "@chakra-ui/react";
import Image from "next/image";
import { AiOutlineLike, AiOutlineComment } from "react-icons/ai";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { TbShare3 } from "react-icons/tb";

const PostCard = () => {
  return (
    <Card
      className="w-full"
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
        <Text>With Chakra UI, I w</Text>
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
          <span className="flex items-center gap-1">
            <AiOutlineLike />
            34,8k
          </span>
          <span>19 bình luận</span>
          <span>68 chia sẻ</span>
        </div>
      </CardBody>
      <CardFooter paddingTop={0}>
        <div className="w-full flex justify-between">
          <span className="flex items-center gap-1 px-2 text-blue-400">
            <AiOutlineLike />
            Thích
          </span>
          <span className="flex items-center gap-1 px-2">
            <AiOutlineComment />
            Bình luận
          </span>
          <span className="flex items-center gap-1 px-2">
            <TbShare3 />
            Chia sẻ
          </span>
        </div>
      </CardFooter>
    </Card>
  );
};

export default PostCard;
