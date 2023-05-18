import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { ReactNode } from "react";
import { DragHandleIcon } from "@chakra-ui/icons";
import UserLayout from "layouts/UserLayout";
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
import { AiOutlineLike, AiOutlineComment } from "react-icons/ai";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { TbShare3 } from "react-icons/tb";
import {
  BsFileEarmarkImage,
  BsEmojiSmileUpsideDown,
  BsCameraVideo,
} from "react-icons/bs";

export default function Home() {
  return (
    <div>
      <div className="flex justify-center">
        <Card
          className="w-full"
          marginTop={4}
          maxW="2xl"
          backgroundColor={"color.bg"}
          color={"color.text"}
          border={"1px"}
          borderColor={"color.border"}
        >
          <CardBody>
            <div className="flex gap-2 items-center">
              <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
              <Input
                placeholder="Bạn đang nghĩ gì ?"
                borderRadius={"full"}
                border={"1px"}
                borderColor={"color.border"}
              />
            </div>
            <Box
              className="my-4"
              borderBottom={"1px"}
              borderColor={"color.border"}
            ></Box>
            <div className="flex justify-around">
              <Button className="flex gap-1" colorScheme="teal" variant="ghost">
                <BsFileEarmarkImage />
                Ảnh/video
              </Button>
              <Button
                className="flex gap-1"
                disabled={true}
                colorScheme="teal"
                variant="ghost"
              >
                <BsEmojiSmileUpsideDown />
                Cảm xúc/hoạt động
              </Button>
              <Button
                className="flex gap-1"
                disabled
                colorScheme="teal"
                variant="ghost"
              >
                <BsCameraVideo />
                Trực tiếp
              </Button>
            </div>
          </CardBody>
        </Card>
      </div>
      <div className="flex justify-center">
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
                <Avatar
                  name="Segun Adebayo"
                  src="https://bit.ly/sage-adebayo"
                />
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
      </div>
    </div>
  );
}

Home.getLayout = (page: ReactNode) => <UserLayout>{page}</UserLayout>;
