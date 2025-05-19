import { Box, Heading, HStack, Icon, Stack, Text } from "@chakra-ui/react";
import { RxDashboard } from "react-icons/rx";
import { LuArrowUpDown } from "react-icons/lu";
import { BiSupport } from "react-icons/bi";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const SideNav = ({ open }) => {
  const location = useLocation();

  const isActiveLink = (link) => {
    return location.pathname === link;
  };
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
      justify="space-between"
    >
      <Box>
        <Heading textAlign="center" as="h1" fontSize="20px" pt="56px">
          @CRPTOGRAPH
        </Heading>
        <Box mt="6" mx="3">
          {navLink.map((nav) => (
            <Link to={nav.link} key={nav.text}>
              <HStack
                py="3"
                px="4"
                bg={isActiveLink(nav.link) ? "#F3F3F7" : "transparent"}
                color={isActiveLink(nav.link) ? "#171717" : "#797E82"}
                _hover={{
                  bg: "#F3F3F7",
                  color: "#171717",
                }}
                // color="#797E82"
                borderRadius="10px"
                cursor="pointer"
              >
                <Icon as={nav.icon} />
                <Text fontSize="14px" fontWeight="medium">
                  {nav.text}
                </Text>
              </HStack>
            </Link>
          ))}
        </Box>
      </Box>
      <Box mt="6" mx="3" mb="6">
        <Link to="/support">
          <HStack
            py="3"
            px="4"
            _hover={{
              bg: "#F3F3F7",
              color: "#171717",
            }}
            // color="#797E82"
            bg={isActiveLink("/support") ? "#F3F3F7" : "transparent"}
            color={isActiveLink("/support") ? "#171717" : "#797E82"}
            borderRadius="10px"
            cursor="pointer"
          >
            <Icon as={BiSupport} />
            <Text fontSize="14px" fontWeight="medium">
              Support
            </Text>
          </HStack>
        </Link>
      </Box>
    </Stack>
  );
};

export default SideNav;
