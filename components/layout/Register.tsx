import {
  Button,
  Container,
  FormControl,
  FormErrorMessage,
  Input,
  InputGroup,
  InputRightElement,
  useToast,
} from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../../config/firebase";

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

  const [enableButton, setEnableButton] = useState(false);

  const [showToast, setShowToast] = useState(false);

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const handleClickPassword = () => setShowPassword(!showPassword);
  const handleClickReTypePassword = () =>
    setShowReTypePassword(!showReTypePassword);

  const toast = useToast();

  const router = useRouter();

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

    createUserWithEmailAndPassword(email, password).then(() =>
      setShowToast(true)
    );
  };

  useEffect(() => {
    if (
      email !== "" &&
      name !== "" &&
      reTypePassword !== "" &&
      password !== "" &&
      password.length >= 6
    ) {
      setEnableButton(true);
    } else {
      setEnableButton(false);
    }
  }, [email, name, reTypePassword, password]);

  useEffect(() => {
    let title = "",
      desc = "",
      status: "error" | "loading" | "success" | "info" | "warning" | undefined,
      duration: number | null = null;

    if (error) {
      title = "Error.";
      desc = error.message;
      status = "error";
      duration = 5000;
    } else {
      title = "Success.";
      desc = "You're now has been registered.";
      status = "success";
      duration = 3000;
    }

    const redirect = () => {
      setShowToast(false);
      if (!error) {
        router.replace("/");
      }
    };

    if (showToast) {
      toast({
        title: title,
        description: desc,
        status: status,
        duration: duration,
        isClosable: true,
        onCloseComplete: redirect,
      });
    }
  }, [error, showToast]);

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
          isDisabled={!enableButton}
          isLoading={loading}
        >
          Sign up
        </Button>
      </form>

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
