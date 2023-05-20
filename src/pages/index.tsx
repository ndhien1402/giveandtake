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
import PostCard from "components/PostCard";

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
                isDisabled
                className="flex gap-1"
                disabled={true}
                colorScheme="teal"
                variant="ghost"
              >
                <BsEmojiSmileUpsideDown />
                Cảm xúc/hoạt động
              </Button>
              <Button
                isDisabled
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
        <PostCard />
      </div>
    </div>
  );
}

Home.getLayout = (page: ReactNode) => <UserLayout>{page}</UserLayout>;
