import { Button, Container, useDisclosure } from "@chakra-ui/react";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../config/firebase";
import { ProfileType } from "../../pages/account/[slug]";
import ProfileMenu from "../ui/ProfileMenu";
import Details from "./profile/Details";
import Order from "./profile/Order";
import Overview from "./profile/Overview";
import Shop from "./profile/Shop";

interface IProps {
  type: string;
}

const Profile: React.FC<IProps> = ({ type }) => {
  const { isOpen, onToggle } = useDisclosure();
  const [user, loading, error] = useAuthState(auth);

  return (
    <Container
      maxW={"container.xl"}
      className="flex flex-col mb-56 lg:flex-row lg:gap-16 xl:gap-20"
    >
      <ProfileMenu isOpen={isOpen} onToggle={onToggle} type={type} />
      {type === ProfileType.OVERVIEW && <Overview name={user?.displayName} />}
      {type === ProfileType.PRODUCTS && <Shop />}
      {type === ProfileType.ORDERS && <Order />}
      {type === ProfileType.DETAILS && <Details />}
    </Container>
  );
};

export default Profile;
