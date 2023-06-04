import { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import Link from "next/link";
import { signUp } from "lib/api/user";
interface User {}

const RegisterForm = () => {
  const [data, setData] = useState<User>();

  const onsubmit = () => {
    signUp(data).then((res) => {
      console.log(res);
    });
  };

  const handleChange = (e: any) => {
    setData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  return (
    <>
      <Box className="h-[100vh] flex justify-center items-center">
        <form className="w-full h-fit max-w-md md:border border-[#4d5561] rounded-lg p-6">
          <div className="text-center text-2xl mb-4">Đăng ký</div>
          <div className="text-center text-red-500 mb-4">
            Số điện thoại đã tồn tại.
          </div>
          <FormControl isInvalid={false}>
            <FormLabel>Số điện thoại*</FormLabel>
            <Input type="number" name="phone" onChange={handleChange} />
            <FormHelperText>Vui lòng nhập số điện thoại.</FormHelperText>
          </FormControl>
          <FormControl isInvalid={false}>
            <FormLabel>Email*</FormLabel>
            <Input type="email" name="email" onChange={handleChange} />
            <FormHelperText>Vui lòng nhập email.</FormHelperText>
          </FormControl>
          <FormControl isInvalid={false} className="mt-4">
            <FormLabel>Mật khẩu*</FormLabel>
            <Input type="password" name="password" onChange={handleChange} />
            <FormHelperText>Vui lòng nhập mật khẩu.</FormHelperText>
          </FormControl>
          <FormControl isInvalid={false} className="mt-4">
            <FormLabel>Nhập lại mật khẩu*</FormLabel>
            <Input type="password" name="rePassword" onChange={handleChange} />
            <FormHelperText>Vui lòng nhập lại mật khẩu.</FormHelperText>
          </FormControl>
          <div className="text-center mt-8">
            <Button
              isDisabled={false}
              isLoading={false}
              colorScheme="blue"
              onClick={onsubmit}
            >
              Đăng ký
            </Button>
          </div>
          <div className="flex justify-between mt-4">
            <Link className="text-sm" href={"/"}>
              Trang chủ
            </Link>
            <Link className="text-sm underline" href={"/login"}>
              Đã có tài khoản?
            </Link>
          </div>
        </form>
      </Box>
    </>
  );
};

export default RegisterForm;
