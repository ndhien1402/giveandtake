import {
  Avatar,
  Box,
  Button,
  Card,
  CardBody,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react";
import {
  BsFileEarmarkImage,
  BsEmojiSmileUpsideDown,
  BsCameraVideo,
} from "react-icons/bs";
import { IoPersonAdd, IoEarth } from "react-icons/io5";
import { AiOutlineSmile } from "react-icons/ai";
import Image from "next/image";

const CreatePost = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Card
        className="w-full"
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
              className="cursor-pointer"
              placeholder="Bạn đang nghĩ gì ?"
              borderRadius={"full"}
              border={"1px"}
              borderColor={"color.border"}
              onClick={onOpen}
            />
          </div>
          <Box
            className="my-4"
            borderBottom={"1px"}
            borderColor={"color.border"}
          ></Box>
          <div className="flex justify-around">
            <Button
              className="flex gap-1"
              colorScheme="teal"
              variant="ghost"
              onClick={onOpen}
            >
              <BsFileEarmarkImage />
              <span className="hidden sm:inline">Ảnh/video</span>
            </Button>
            <Button
              // isDisabled
              className="flex gap-1"
              colorScheme="teal"
              variant="ghost"
              onClick={onOpen}
            >
              <BsEmojiSmileUpsideDown />
              <span className="hidden sm:inline">Cảm xúc/hoạt động</span>
            </Button>
            <Button
              // isDisabled
              className="flex gap-1"
              colorScheme="teal"
              variant="ghost"
              onClick={onOpen}
            >
              <BsCameraVideo />
              <span className="hidden sm:inline">Trực tiếp</span>
            </Button>
          </div>
        </CardBody>
      </Card>
      <Modal isOpen={isOpen} onClose={onClose} size={"xl"}>
        <ModalOverlay />
        <ModalContent
          backgroundColor={"#0e1116"}
          border={"1px"}
          borderColor={"color.border"}
        >
          <ModalHeader
            textAlign={"center"}
            borderBottom={"1px"}
            borderColor={"color.border"}
          >
            Tạo bài viết
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex gap="4" alignItems="center" flexWrap="wrap" marginBottom={3}>
              <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
              <Box>
                <Heading size="sm">Segun Adebayo</Heading>
                <Text className="flex items-center gap-1 text-sm">
                  <IoEarth /> Công khai
                </Text>
              </Box>
            </Flex>
            🌧 TUYỆT VỜI 🌧 HÀ NỘI TỪ ĐÊM NAY, NGÀY MAI SẼ CÓ MƯA TO, MÁT VÔ CÙNG
            TỔ QUỐC TA ƠI 🙏⛈
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
            <Box
              className="rounded flex justify-around items-center"
              marginTop={5}
              padding={3}
              border={"1px"}
              borderColor={"color.border"}
            >
              <span>Thêm vào bài viết của bạn</span>
              <BsFileEarmarkImage
                cursor={"pointer"}
                title="Ảnh/video"
                size={20}
                color="green"
              />
              <IoPersonAdd
                cursor={"pointer"}
                title="Gắn thẻ"
                size={20}
                color="#1877f2"
              />
              <AiOutlineSmile
                cursor={"pointer"}
                title="Hoạt động"
                size={20}
                color="#f7b928"
              />
            </Box>
          </ModalBody>
          <ModalFooter>
            <Button
              className="w-full"
              colorScheme="blue"
              size={"md"}
              onClick={onClose}
            >
              Đăng
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CreatePost;
