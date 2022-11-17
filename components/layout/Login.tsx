import {
  Button,
  Container,
  Divider,
  FormControl,
  FormErrorMessage,
  Input,
  InputGroup,
  InputRightElement,
  useToast,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import {
  useAuthState,
  useSignInWithEmailAndPassword,
  useSignInWithFacebook,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { auth } from "../../config/firebase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEmailError, setIsEmailError] = useState(false);
  const [isPasswordError, setIsPasswordError] = useState(false);
  const [show, setShow] = useState(false);

  const [signInWithEmailAndPassword, , loading] =
    useSignInWithEmailAndPassword(auth);

  const [signInWithGoogle, , googleLoading] = useSignInWithGoogle(auth);
  const [signInWithFacebook, , facebookLoading] = useSignInWithFacebook(auth);
  const [, , error] = useAuthState(auth);

  const [showToast, setShowToast] = useState(false);
  const toast = useToast();
  const router = useRouter();

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

    signInWithEmailAndPassword(email, password).then(() => setShowToast(true));
  };

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
      desc = "You're now logged in.";
      status = "success";
      duration = 3000;
    }

    const redirect = () => {
      setShowToast(false);
      if (!error) {
        router.push("/");
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
    <Container className="pt-20 pb-10">
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
          isLoading={loading || googleLoading}
        >
          Log in
        </Button>
      </form>
      <div className="flex mt-10 gap-3 items-center">
        <Divider className="border-8" />
        <p className="font-quicksand font-bold text-slate-500">OR</p>
        <Divider className="border-8" />
      </div>
      <div className="flex flex-col gap-3 mt-10">
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
          onClick={() => signInWithGoogle().then(() => setShowToast(true))}
        >
          Continue with Google
        </Button>
        <Button
          leftIcon={
            <Image
              src={"/image/icons/facebook.png"}
              width={25}
              height={25}
              alt="Google Icon"
            />
          }
          colorScheme="gray"
          size={"lg"}
          onClick={() => signInWithFacebook().then(() => setShowToast(true))}
        >
          Continue with Facebook
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
