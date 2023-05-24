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
      <div className="max-w-[320px] sm:max-w-[calc(320px*2+16px*1)] md:max-w-[320px] lg:max-w-[calc(320px*2+16px*1)] xl:max-w-[calc(320px*3+16px*2)] min-[1700px]:max-w-[calc(320px*4+16px*3)] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 min-[1700px]:grid-cols-4 gap-4 mt-4 mx-auto">
        {Array.from(Array(5)).map((_, index) => (
          <ItemCard key={index} />
        ))}
      </div>
    </div>
  );
};
export default Rank;
Rank.getLayout = (page: ReactNode) => <UserLayout>{page}</UserLayout>;
