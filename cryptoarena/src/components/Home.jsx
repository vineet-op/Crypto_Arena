import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import { motion } from "framer-motion";

const image =
  "https://academy.education.investing.com/wp-content/uploads/2022/03/bitcoin-what-is-crypto-scaled.jpg";

const Home = () => {
  return (
    <Box bgColor={"blackAlpha.800"} w={"full"} h={"80vh"}>
      <motion.div
        style={{
          height: "80vh",
        }}
        animate={{
          translateY: "20px",
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <Image
          w={"full"}
          h={"full"}
          objectFit={"contain"}
          src={image}
          filter={"grayscale(1)"}
          mix-blendMode={"multiply"}
          // color={"blackAlpha.900"}
        />
      </motion.div>

      <Text
        fontSize={"6xl"}
        textAlign={"center"}
        fontWeight={"thin"}
        color={"whiteAlpha.700"}
        mt={"-20"}
      >
        Crypto Arena
      </Text>
    </Box>
  );
};

export default Home;
