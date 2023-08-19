import { Box, Stack, VStack, Text, Avatar } from "@chakra-ui/react";
import React from "react";

const avatarSrc =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqchrabv4h5dKZXVyxU81_PQHENAaW_tpdYg&usqp=CAU";

const Footer = () => {
  return (
    <Box
      bgColor={"blackAlpha.800"}
      color={"whiteAlpha.800"}
      minH={"48"}
      px={"16"}
      py={["16", "8"]}
    >
      <Stack direction={["column", "row"]} h={"full"} alignItems={"center"}>
        <VStack w={"full"} alignItems={["center", "flex-start"]}>
          <Text fontWeight={"bold"}>About Us</Text>
          <Text
            fontSize={"sm"}
            letterSpacing={"widest"}
            textAlign={["center", "left"]}
          >
            We are the best crypto trading app in India, we provide our guidance
            at a very cheap price.
          </Text>
        </VStack>

        <VStack>
          <Avatar boxSize={"28"} mt={["4", "0"]} src={avatarSrc} />
          <Text>Crafted with ❤️ by Vineet Jadhav</Text>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
