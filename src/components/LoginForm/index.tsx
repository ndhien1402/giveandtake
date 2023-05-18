import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import Link from "next/link";

const LoginForm = () => {
  return (
    <Box className="h-[100vh] flex justify-center items-center">
      <form className="w-full h-fit max-w-md md:border border-[#4d5561] rounded-lg p-6">
        <div className="text-center text-2xl mb-4">Đăng nhập</div>
        <div className="text-center text-red-500 mb-4">
          Tài khoản hoặc mật khẩu không chính xác.
        </div>
        <FormControl isInvalid={false}>
          <FormLabel>Tài khoản*</FormLabel>
          <Input />
          <FormHelperText>Vui lòng nhập tài khoản.</FormHelperText>
        </FormControl>
        <FormControl isInvalid={false} className="mt-4">
          <FormLabel>Mật khẩu*</FormLabel>
          <Input />
          <FormHelperText>Vui lòng nhập mật khẩu.</FormHelperText>
        </FormControl>
        <div className="text-center mt-8">
          <Button isDisabled={false} isLoading={false} colorScheme="blue">
            Đăng nhập
          </Button>
        </div>
        <div className="flex justify-between mt-4">
          <Link className="text-sm" href={"/"}>
            Trang chủ
          </Link>
          <Link className="text-sm underline" href={"/register"}>
            Chưa có tài khoản?
          </Link>
        </div>
      </form>
    </Box>
  );
};

export default LoginForm;
