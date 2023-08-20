import React, { useState, useEffect } from "react";
import { server } from "../main";
import axios from "axios";
import {
  Container,
  HStack,
  Button,
  RadioGroup,
  Radio,
  Input,
  Flex,
} from "@chakra-ui/react";
import Loader from "./Loader";
import ErrorComponent from "./ErrorComponent";
import CoinCard from "./CoinCard";

const Coins = () => {
  const [coins, setCoins] = useState([]);
  const [loader, setLoader] = useState(true);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [currency, setCurrency] = useState("inr");
  const [searchQuery, setSearchQuery] = useState("");

  const currencySymbol =
    currency === "inr" ? "₹" : currency === "eur" ? "€" : "$";

  const changePage = (page) => {
    setPage(page);
    setLoader(true);
  };

  const btns = new Array(132).fill(1);

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const { data } = await axios.get(
          `${server}/coins/markets?vs_currency=${currency}&page=${page}`
        );

        // Filter coins based on search query
        const filteredCoins = data.filter((coin) =>
          coin.name.toLowerCase().includes(searchQuery.toLowerCase())
        );

        setCoins(filteredCoins);
        setLoader(false);
      } catch (error) {
        setError(true);
        setLoader(false);
      }
    };
    fetchCoins();
  }, [currency, page, searchQuery]);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  if (error) return <ErrorComponent message={"error while fetching Coins"} />;

  return (
    <Container maxW={"container.xl"}>
      {loader ? (
        <Loader />
      ) : (
        <>
          <RadioGroup value={currency} onChange={setCurrency} padding={"4"}>
            <HStack spacing={"4"}>
              <Radio value={"inr"}>₹</Radio>
              <Radio value={"usd"}>$</Radio>
              <Radio value={"eur"}>€</Radio>
            </HStack>
          </RadioGroup>

          <Flex justify="center" mb="4">
            <Input
              type="text"
              placeholder="Search for coins"
              value={searchQuery}
              onChange={handleSearch}
              size="md"
              maxWidth="300px"
              marginBottom="4"
              bgColor={"blackAlpha.200"}
            />
          </Flex>

          <HStack wrap={"wrap"} justifyContent={"space-evenly"}>
            {coins.map((i) => (
              <CoinCard
                id={i.id}
                key={i.id}
                name={i.name}
                price={i.current_price.toLocaleString()}
                img={i.image}
                symbol={i.symbol}
                currencySymbol={currencySymbol}
              />
            ))}
          </HStack>

          <HStack width={"full"} overflowX={"auto"} p={"8"}>
            {btns.map((item, index) => (
              <Button
                key={index}
                bgColor={"blackAlpha.900"}
                color={"white"}
                onClick={() => changePage(index + 1)}
              >
                {index + 1}
              </Button>
            ))}
          </HStack>
        </>
      )}
    </Container>
  );
};

export default Coins;
