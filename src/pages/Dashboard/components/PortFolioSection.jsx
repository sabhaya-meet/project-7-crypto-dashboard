import { Button, HStack, Icon, Stack, Tag, Text } from "@chakra-ui/react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { MdDownload } from "react-icons/md";
import { LuArrowDownUp } from "react-icons/lu";
const PortFolioSection = () => {
  return (
    <HStack
      justify="space-between"
      bg="white"
      borderRadius="xl"
      p="6"
      align={{
        base: "flex-start",
        xl: "center",
      }}
      flexDir={{
        base: "column",
        md: "row",
      }}
      gap={{
        base: "10px",
        md: "0",
      }}
    >
      <HStack
        gap={{ base: "0", md: "30px" }}
        align={{
          base: "flex-start",
          xl: "center",
        }}
        flexDir={{
          base: "column",
          md: "row",
        }}
      >
        <Stack>
          <HStack color="#535D66">
            <Text fontSize="14px">Total Portfolio Value</Text>
            <Icon as={AiOutlineInfoCircle} />
          </HStack>
          <Text fontSize="12px" fontWeight="bold">
            ₹ 112,312.24
          </Text>
        </Stack>

        <Stack>
          <HStack color="#535D66">
            <Text fontSize="14px">Wallet Balances</Text>
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
              <Text fontSize="12px" fontWeight="bold">
                112,312.24
              </Text>
              <Tag.Root>
                <Tag.Label fontSize="12px">BTC</Tag.Label>
              </Tag.Root>
            </HStack>
            <HStack>
              <Text fontSize="12px" fontWeight="bold">
                112,312.24
              </Text>
              <Tag.Root>
                <Tag.Label fontSize="12px">INR</Tag.Label>
              </Tag.Root>
            </HStack>
          </HStack>
        </Stack>
      </HStack>

      <HStack>
        <Button variant="subtle" colorPalette="purple" size="xs">
          <Icon as={MdDownload} /> Deposit
        </Button>
        <Button variant="subtle" size="xs" colorPalette="purple">
          <Icon as={LuArrowDownUp} />
          Withdraw
        </Button>
      </HStack>
    </HStack>
  );
};

export default PortFolioSection;
