import { Button } from "@chakra-ui/react";
import React from "react";

interface IProps {
  name?: string | null;
}

const Overview: React.FC<IProps> = ({ name }) => {
  return (
    <div className="flex flex-col justify-between gap-36">
      <div className="flex flex-col gap-3 mt-10">
        <h1 className="text-xl font-bold">Hello, {name}</h1>
        <p>
          Welcome to your account! From here, you're able to see your current
          account details and see your order history.
        </p>
      </div>
      <div className="flex flex-col gap-3 w-fit">
        <h1 className="text-xl font-bold">Recent Orders</h1>
        <Button colorScheme={"facebook"}>View All Orders</Button>
      </div>
    </div>
  );
};

export default Overview;
