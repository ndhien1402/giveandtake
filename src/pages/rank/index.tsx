import { ReactNode } from "react";
import UserLayout from "layouts/UserLayout";
import { Avatar, Box } from "@chakra-ui/react";

const Rank = () => {
  return (
    <>
      <div className="text-center text-2xl font-bold px-2">Bảng xếp hạng</div>
      <div className="w-full flex justify-center mt-8">
        <Box className="w-full" maxW="2xl">
          {Array.from(Array(10)).map((_, index) => {
            return (
              <Box
                key={index}
                borderColor={"color.border"}
                className="flex justify-between border p-2 rounded-full mb-5"
              >
                <div className="flex items-center gap-2">
                  <Avatar
                    className="ml-2"
                    name="Segun Adebayo"
                    src="https://bit.ly/sage-adebayo"
                    size={"sm"}
                  />
                  <span>Nguyen Dinh Hien</span>
                </div>
                <span className="mr-4 flex items-center">34</span>
              </Box>
            );
          })}
        </Box>
      </div>
    </>
  );
};
export default Rank;
Rank.getLayout = (page: ReactNode) => <UserLayout>{page}</UserLayout>;
