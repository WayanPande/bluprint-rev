import {
  Button,
  Container,
  Divider,
  FormControl,
  FormErrorMessage,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEmailError, setIsEmailError] = useState(false);
  const [isPasswordError, setIsPasswordError] = useState(false);
  const [show, setShow] = useState(false);

  const handleClick = () => setShow(!show);

  const handleEmailInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setIsEmailError(false);
  };

  const handlePasswordInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPassword(e.target.value);
    setIsPasswordError(false);
  };

  const formSubmitHandler = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email === "") {
      setIsEmailError(true);
      return;
    }

    if (password === "") {
      setIsPasswordError(true);
      return;
    }
  };

  return (
    <Container className="pt-20">
      <div className="flex flex-col gap-4 items-center font-inter ">
        <h1 className="font-bold text-2xl md:text-4xl text-center">
          Log in to your account
        </h1>
        <p className="md:text-xl text-center">Enter your detail below</p>
      </div>
      <form className="flex flex-col gap-4 mt-10" onSubmit={formSubmitHandler}>
        <FormControl isInvalid={isEmailError}>
          <Input
            type="email"
            placeholder="Enter your E-mail"
            value={email}
            onChange={handleEmailInputChange}
            size={"lg"}
          />
          {isEmailError ? (
            <FormErrorMessage>Email is required.</FormErrorMessage>
          ) : null}
        </FormControl>
        <FormControl isInvalid={isPasswordError}>
          <InputGroup className="flex items-center">
            <Input
              pr="4.5rem"
              type={show ? "text" : "password"}
              placeholder="Enter your password"
              size={"lg"}
              value={password}
              onChange={handlePasswordInputChange}
            />
            <InputRightElement width="4.5rem" className="h-full">
              <Button h="1.75rem" size="sm" onClick={handleClick}>
                {show ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
          {isPasswordError ? (
            <FormErrorMessage>Password is required.</FormErrorMessage>
          ) : null}
        </FormControl>
        <Button
          colorScheme={"facebook"}
          type="submit"
          size={"lg"}
          className="mt-7"
        >
          Log in
        </Button>
      </form>
      <div className="flex mt-10 gap-3 items-center">
        <Divider className="border-8" />
        <p className="font-quicksand font-bold text-slate-500">OR</p>
        <Divider className="border-8" />
      </div>
      <div className="flex flex-col mt-10">
        <Button
          leftIcon={
            <Image
              src={"/image/icons/google.png"}
              width={25}
              height={25}
              alt="Google Icon"
            />
          }
          colorScheme="gray"
          size={"lg"}
        >
          Continue with Google
        </Button>
      </div>

      <div className="flex justify-center mt-10 ">
        <Button
          href={"/account/register"}
          as={Link}
          variant="ghost"
          colorScheme={"linkedin"}
        >
          Create account
        </Button>
      </div>
    </Container>
  );
};

export default Login;
