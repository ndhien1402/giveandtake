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

const ItemCard = () => {
  return (
    <>
      <div className="max-w-[calc(320px*4+16px*3)] grid grid-cols-4 gap-4 mt-4 mx-auto">
        {Array.from(Array(5)).map((_, index) => (
          <Card
            key={index}
            backgroundColor={"#1c1f26"}
            color={"#fff"}
            border={"1px"}
            borderColor={"color.border"}
            borderRadius={"xl"}
          >
            <CardHeader>
              <Flex>
                <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                  <Avatar
                    name="Segun Adebayo"
                    src="https://bit.ly/sage-adebayo"
                    size={"sm"}
                  />
                  <Box>
                    <Heading size="sm">Segun Adebayo</Heading>
                    <Text fontSize={"14px"}>2 ngày trước</Text>
                  </Box>
                </Flex>
              </Flex>
            </CardHeader>
            <CardBody>
              <Text>With Chakra UI, Card</Text>
              <div className="relative w-full h-[200px] mt-2">
                <Image
                  className=""
                  src={
                    "https://hanoicomputercdn.com/media/news/1396_cau_hinh_pc_15_trieu_hacom.jpg"
                  }
                  fill
                  alt=""
                />
              </div>
              <div className="mt-4 text-end">
                <Button colorScheme="teal">Nhận</Button>
              </div>
            </CardBody>
          </Card>
        ))}
      </div>
    </>
  );
};

export default ItemCard;
