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
import React, { useEffect, useState } from "react";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [reTypePassword, setReTypePassword] = useState("");
  const [name, setName] = useState("");

  const [isEmailError, setIsEmailError] = useState(false);
  const [isPasswordError, setIsPasswordError] = useState(false);
  const [isReTypePasswordError, setIsReTypePasswordError] = useState(false);
  const [isNameError, setIsNameError] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const [showReTypePassword, setShowReTypePassword] = useState(false);

  const handleClickPassword = () => setShowPassword(!showPassword);
  const handleClickReTypePassword = () =>
    setShowReTypePassword(!showReTypePassword);

  const handleEmailInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setIsEmailError(false);
  };

  const handleNameInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    setIsNameError(false);
  };

  const handlePasswordInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPassword(e.target.value);
    setIsPasswordError(false);
  };

  const handleReTypePasswordInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setReTypePassword(e.target.value);
    setIsReTypePasswordError(false);
  };

  const formSubmitHandler = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      email === "" ||
      name === "" ||
      reTypePassword === "" ||
      password === ""
    ) {
      if (email === "") {
        setIsEmailError(true);
      }

      if (name === "") {
        setIsNameError(true);
      }

      if (reTypePassword === "") {
        setIsReTypePasswordError(true);
      }

      if (password === "") {
        setIsPasswordError(true);
      }
      return;
    }

    if (password.localeCompare(reTypePassword) !== 0) {
      setIsReTypePasswordError(true);
      return;
    }
  };

  return (
    <Container className="pt-20 mb-10">
      <div className="flex flex-col gap-4 items-center font-inter ">
        <h1 className="font-bold text-2xl md:text-4xl text-center">
          Register an Account
        </h1>
        <p className="md:text-xl text-center">
          Create an account to order. You can also get a reminder about a
          discount!
        </p>
      </div>
      <form className="flex flex-col gap-4 mt-10" onSubmit={formSubmitHandler}>
        <FormControl isInvalid={isNameError}>
          <Input
            type="text"
            placeholder="Name"
            value={name}
            onChange={handleNameInputChange}
            size={"lg"}
          />
          {isNameError ? (
            <FormErrorMessage>Name is required.</FormErrorMessage>
          ) : null}
        </FormControl>
        <FormControl isInvalid={isEmailError}>
          <Input
            type="email"
            placeholder="E-mail"
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
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              size={"lg"}
              value={password}
              onChange={handlePasswordInputChange}
            />
            <InputRightElement width="4.5rem" className="h-full">
              <Button h="1.75rem" size="sm" onClick={handleClickPassword}>
                {showPassword ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
          {isPasswordError ? (
            <FormErrorMessage>Password is required.</FormErrorMessage>
          ) : null}
        </FormControl>
        <FormControl isInvalid={isReTypePasswordError}>
          <InputGroup className="flex items-center">
            <Input
              pr="4.5rem"
              type={showReTypePassword ? "text" : "password"}
              placeholder="Re-type Password"
              size={"lg"}
              value={reTypePassword}
              onChange={handleReTypePasswordInputChange}
            />
            <InputRightElement width="4.5rem" className="h-full">
              <Button h="1.75rem" size="sm" onClick={handleClickReTypePassword}>
                {showReTypePassword ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
          {isReTypePasswordError && (
            <FormErrorMessage>Your password didn't match.</FormErrorMessage>
          )}
        </FormControl>
        <Button
          colorScheme={"facebook"}
          type="submit"
          size={"lg"}
          className="mt-7"
        >
          Sign up
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
          href={"/account/login"}
          as={Link}
          variant="ghost"
          colorScheme={"linkedin"}
        >
          Already have an account?
        </Button>
      </div>
    </Container>
  );
};

export default Register;
