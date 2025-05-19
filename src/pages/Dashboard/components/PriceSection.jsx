import React from "react";
import { CustomCard } from "../../../chakra/CustomCard";
import {
  Button,
  Flex,
  HStack,
  Icon,
  Image,
  Stack,
  Tabs,
  Tag,
  Text,
} from "@chakra-ui/react";
import { MdOutlineTrendingUp } from "react-icons/md";
import { FaPlusCircle } from "react-icons/fa";
import { FaSquareMinus } from "react-icons/fa6";
import graph from "../../../assets/Graph.png";
const PriceSection = () => {
  const timeStamp = ["7:15 PM", "7:18 PM", "7:21 PM", "7:23 PM", "7:25 PM"];
  return (
    <CustomCard>
      <Flex justify="space-between" align="start">
        <Stack>
          <HStack color="#535D66">
            <Text fontSize="14px">Current Price</Text>
          </HStack>
          <HStack
            gap="5"
            align={{
              base: "flex-start",
              sm: "center",
            }}
            flexDir={{
              base: "column",
              sm: "row",
            }}
          >
            <HStack>
              <Text fontSize="14px" fontWeight="bold">
                ₹ 112,312.24
              </Text>
              <HStack color="green" fontWeight="medium">
                <Icon as={MdOutlineTrendingUp} />
                <Text fontSize="10px">22%</Text>
              </HStack>
            </HStack>
          </HStack>
        </Stack>

        <HStack>
          <Button variant="subtle" colorPalette="purple" size="xs">
            <Icon as={FaPlusCircle} /> Buy
          </Button>
          <Button variant="subtle" size="xs" colorPalette="purple">
            <Icon as={FaSquareMinus} />
            Sell
          </Button>
        </HStack>
      </Flex>

      <Flex justify="end">
        <Tabs.Root variant="enclosed" size="sm" defaultValue={"tab-1"}>
          <Tabs.List p="3px">
            {["1H", "1D", "1W", "1M"].map((item) => (
              <Tabs.Trigger fontSize="sm" p="6px" value={item}>
                {item}
              </Tabs.Trigger>
            ))}

            {/* <Tabs.Trigger fontSize="sm" p="6px" value="1H">
              1D
            </Tabs.Trigger>
            <Tabs.Trigger fontSize="sm" p="6px" value="1H">
              1W
            </Tabs.Trigger>
            <Tabs.Trigger fontSize="sm" p="6px" value="1Hs">
              1M
            </Tabs.Trigger> */}
          </Tabs.List>
        </Tabs.Root>
      </Flex>
      <Image src={graph} w="full" mt="48px" />
      <HStack justify="space-between">
        {timeStamp.map((time) => (
          <Text>{time}</Text>
        ))}
      </HStack>
    </CustomCard>
  );
};

export default PriceSection;
