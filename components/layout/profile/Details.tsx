import {
  Button,
  Input,
  useControllableState,
  useToast,
} from "@chakra-ui/react";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { useAuthState, useUpdateProfile } from "react-firebase-hooks/auth";
import { auth } from "../../../config/firebase";

const Details = () => {
  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useControllableState({
    defaultValue: user?.displayName,
  });
  const [img, setImg] = useState(user?.photoURL);
  const [updateProfile, updating, errorUpdating] = useUpdateProfile(auth);
  const toast = useToast();
  const inputFile = useRef<null | HTMLInputElement>(null);
  const [isClicked, setIsClicked] = useControllableState({
    defaultValue: false,
  });

  const updateProfileHandler = async () => {
    await updateProfile({ displayName: name });
    setIsClicked(!isClicked);
  };

  const handleUploadImg = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files !== null) {
      setImg(URL.createObjectURL(e.target.files[0]));
    }
  };

  useEffect(() => {
    if (updating) {
      toast({
        title: "Account updated.",
        description: "We've successfuly update your account for you.",
        status: "success",
        duration: 6000,
        isClosable: true,
      });
    }

    if (errorUpdating) {
      toast({
        title: "An Error has occurred.",
        description: errorUpdating.message,
        status: "error",
        duration: 6000,
        isClosable: true,
      });
    }
  }, [updating, errorUpdating]);

  return (
    <div className="flex flex-col justify-between gap-20 lg:w-3/5">
      <div className="flex flex-col gap-3 mt-10">
        <h1 className="text-xl font-bold">Account Details</h1>
        <p>You can update your account details here accordingly</p>
      </div>
      <div className="flex flex-col lg:flex-row gap-16 justify-between w-full">
        <div className="flex flex-col items-center gap-3 lg:gap-10">
          <Image
            src={img ?? ""}
            alt="profile image"
            width={300}
            height={300}
            className="rounded-full w-28 h-28 lg:w-36 lg:h-36 object-cover"
          />
          <Button
            variant={"ghost"}
            colorScheme="facebook"
            onClick={() => inputFile.current?.click()}
          >
            Change Profile Picture
          </Button>
        </div>
        <div className="w-full flex flex-col justify-between gap-10 lg:gap-0 lg:pr-36">
          <div className="flex flex-col gap-5">
            <h1 className="font-bold">Name</h1>
            <Input
              value={name ?? ""}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <input
            type="file"
            accept=".png, .jpg, .jpeg"
            id="photo"
            className="hidden"
            onChange={handleUploadImg}
            ref={inputFile}
          />
          <Button
            colorScheme={"facebook"}
            className="w-fit self-end"
            onClick={updateProfileHandler}
            isLoading={updating}
            loadingText="Updating Profile"
            id={isClicked ? "save_btn" : undefined}
          >
            Save
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Details;
