import React from "react";
import { Button, HStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <HStack
      p={"2"}
      shadow={"base"}
      bgColor={"blackAlpha.800"}
      justifyContent={"flex-start"}
    >
      <Button variant={"unstyled"} color={"white"} margin={"5"}>
        <Link to="/">Home</Link>
      </Button>

      <Button variant={"unstyled"} color={"white"} margin={"5"}>
        <Link to="/exchanges">Exchanges</Link>
      </Button>

      <Button variant={"unstyled"} color={"white"} margin={"5"}>
        <Link to="/coins">Coins</Link>
      </Button>
    </HStack>
  );
};

export default Header;
