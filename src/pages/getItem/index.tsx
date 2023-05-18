import { ReactNode } from "react";
import UserLayout from "layouts/UserLayout";
import ItemCard from "components/ItemCard";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

const Rank = () => {
  return (
    <div className="mt-16">
      <div className="mb-14">
        <InputGroup size={"lg"} maxWidth={"500px"} className="mx-auto">
          <InputRightElement pointerEvents="none">
            <SearchIcon />
          </InputRightElement>
          <Input
            placeholder="Tìm kiếm"
            borderRadius={"xl"}
            border={"1px"}
            borderColor={"#ce3df3"}
          />
        </InputGroup>
      </div>
      <ItemCard />
    </div>
  );
};
export default Rank;
Rank.getLayout = (page: ReactNode) => <UserLayout>{page}</UserLayout>;
