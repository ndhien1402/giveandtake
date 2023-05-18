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

const PostCard = () => {
  return (
    <>
      <div className="grid grid-cols-4 gap-4">
        {Array.from(Array(5)).map((_, index) => (
          <Card key={index}>
            <CardBody>
              <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
            </CardBody>
          </Card>
        ))}
      </div>
    </>
  );
};

export default PostCard;
