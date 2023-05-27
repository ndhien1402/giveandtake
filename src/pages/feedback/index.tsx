import { Box } from "@chakra-ui/react";
import UserLayout from "layouts/UserLayout";
import { ReactNode } from "react";
import { AiOutlineMail, AiFillPhone } from "react-icons/ai";
import { SiZalo } from "react-icons/si";

const Feedback = () => {
  return (
    <Box>
      <div className="text-center text-2xl font-bold px-2">
        Mọi ý kiến đóng góp xin vui lòng liên hệ
      </div>
      <div className="flex justify-center mt-8">
        <div className="flex flex-col gap-4">
          <Box
            className="flex flex-col gap-2 items-center border rounded-md p-4"
            borderColor={"color.border"}
          >
            <SiZalo size={40} />
            <span>0333056521</span>
          </Box>
          <Box
            className="flex flex-col gap-2 items-center border rounded-md p-4"
            borderColor={"color.border"}
          >
            <AiOutlineMail size={40} />
            <span>nguyendinhhien34@gmail.com</span>
          </Box>
        </div>
      </div>
    </Box>
  );
};

export default Feedback;
Feedback.getLayout = (page: ReactNode) => <UserLayout>{page}</UserLayout>;
