import { CustomCard } from "../../../chakra/CustomCard";
import { Box, Button, Flex, Grid, Icon, Stack, Text } from "@chakra-ui/react";
import { MdCurrencyRupee } from "react-icons/md";
import { FaBtc } from "react-icons/fa6";
import { Fragment } from "react";

const Transations = () => {
  const timeStamp = [
    {
      id: "1",
      icon: MdCurrencyRupee,
      text: "INR Deposit",
      amount: "+ ₹81,123.10",

      dateTime: "2022-06-09 7:06 PM",
    },
    {
      id: "2",
      icon: FaBtc,
      text: "INR Deposit",
      amount: "+ ₹81,123.10",

      dateTime: "2022-06-09 7:06 PM",
    },
    {
      id: "3",
      icon: MdCurrencyRupee,
      text: "INR Deposit",
      amount: "+ ₹81,123.10",

      dateTime: "2022-06-09 7:06 PM",
    },
  ];
  return (
    <CustomCard h="full">
      <Text mb={3} fontSize="sm" color="grey">
        Recent Transactions
      </Text>
      <Stack>
        {timeStamp.map((item, i) => (
          <Fragment key={item.id}>
            {i !== 0 && <hr />}
            <Flex gap="6px" align="center">
              <Grid
                placeItems="center"
                width="30px"
                height="30px"
                borde
                borderRadius="full"
                bg="#F3F3F7"
                left="10px"
              >
                <Icon as={item?.icon} />
              </Grid>

              <Flex justify="space-between" w="full">
                <Stack gap={0}>
                  <Text fontSize={{ base: "12px", md: "16px" }} color="#535D66">
                    {item?.text}
                  </Text>
                  <Text fontSize="10px" color="#535D66">
                    {item?.dateTime}
                  </Text>
                </Stack>
                <Text fontSize={{ base: "12px", md: "16px" }} color="#535D66">
                  {item?.amount}
                </Text>
              </Flex>
            </Flex>
          </Fragment>
        ))}
      </Stack>

      <Button w="full" mt="20px" variant="subtle">
        View All
      </Button>
    </CustomCard>
  );
};

export default Transations;
