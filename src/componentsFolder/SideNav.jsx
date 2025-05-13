import { Box, Heading, HStack, Icon, Stack, Text } from "@chakra-ui/react";
import { RxDashboard } from "react-icons/rx";
import { LuArrowUpDown } from "react-icons/lu";
import { BiSupport } from "react-icons/bi";
import { FaBars, FaTimes } from "react-icons/fa";

const SideNav = ({ open }) => {
  const navLink = [
    {
      icon: RxDashboard,
      text: "Dashboard",
      link: "/",
    },
    {
      icon: LuArrowUpDown,
      text: "Transactions",
      link: "/transactions",
    },
  ];
  return (
    <Stack
      position={{ base: "fixed", lg: "static" }}
      h="100vh"
      w={{ base: "90%", lg: "12rem" }}
      bg="white"
      zIndex="20"
      boxShadow="lg"
      transform={{
        base: open ? "translateX(0)" : "translateX(-100%)",
        lg: "none",
      }}
      transition="transform 0.4s ease-in-out"
      display="flex"
    >
      <Box>
        <Heading textAlign="center" as="h1" fontSize="20px" pt="56px">
          @CRPTOGRAPH
        </Heading>
        <Box mt="6" mx="3">
          {navLink.map((nav) => (
            <HStack
              key={nav.text}
              py="3"
              px="4"
              _hover={{
                bg: "#F3F3F7",
                color: "#171717",
              }}
              color="#797E82"
              borderRadius="10px"
              cursor="pointer"
            >
              <Icon as={nav.icon} />
              <Text fontSize="14px" fontWeight="medium">
                {nav.text}
              </Text>
            </HStack>
          ))}
        </Box>
      </Box>
      <Box mt="6" mx="3" mb="6">
        <HStack
          py="3"
          px="4"
          _hover={{
            bg: "#F3F3F7",
            color: "#171717",
          }}
          color="#797E82"
          borderRadius="10px"
          cursor="pointer"
        >
          <Icon as={BiSupport} />
          <Text fontSize="14px" fontWeight="medium">
            Support
          </Text>
        </HStack>
      </Box>
    </Stack>
  );
};

export default SideNav;
