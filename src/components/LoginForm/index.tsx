import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { signIn, useSession } from "next-auth/react";
import Cookies from "js-cookie";

interface User {}

const LoginForm = () => {
  const { data: session } = useSession();
  const [data, setData] = useState<User>();

  useEffect(() => {
    console.log("session", session);
  }, []);

  const handleChange = (e: any) => {
    setData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const onsubmit = async () => {
    const res = await signIn("credentials", {
      ...data,
      redirect: false,
    });
    // console.log(res);
  };

  return (
    <Box className="h-[100vh] flex justify-center items-center">
      <form className="w-full h-fit max-w-md md:border border-[#4d5561] rounded-lg p-6">
        <div className="text-center text-2xl mb-4">Đăng nhập</div>
        <div className="text-center text-red-500 mb-4">
          Tài khoản hoặc mật khẩu không chính xác.
        </div>
        <FormControl isInvalid={false}>
          <FormLabel>Số điện thoại*</FormLabel>
          <Input type="number" name="phone" onChange={handleChange} />
          <FormHelperText>Vui lòng nhập tài khoản.</FormHelperText>
        </FormControl>
        <FormControl isInvalid={false} className="mt-4">
          <FormLabel>Mật khẩu*</FormLabel>
          <Input type="password" name="password" onChange={handleChange} />
          <FormHelperText>Vui lòng nhập mật khẩu.</FormHelperText>
        </FormControl>
        <div className="text-center mt-8">
          <Button
            isDisabled={false}
            isLoading={false}
            colorScheme="blue"
            onClick={onsubmit}
          >
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
