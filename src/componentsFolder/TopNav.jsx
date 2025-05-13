import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  Icon,
  Menu,
  Portal,
} from "@chakra-ui/react";
import { FaUserTie } from "react-icons/fa";
import { FaBars } from "react-icons/fa";

const TopNav = ({ title, setOpen }) => {
  return (
    <Box px="4">
      <HStack h="16" justify="space-between" maxW="70rem" mx="auto">
        <Icon
          as={FaBars}
          onClick={() => setOpen((prev) => !prev)}
          display={{
            base: "block",
            lg: "none",
          }}
          fontSize="30px"
        />
        <Heading fontWeight="500" fontSize="28px">
          {title}
        </Heading>

        <Menu.Root>
          <Menu.Trigger asChild>
            <Button size="sm">
              <Icon as={FaUserTie} fontSize="24px" />
            </Button>
          </Menu.Trigger>
          <Portal>
            <Menu.Positioner>
              <Menu.Content>
                <Menu.Item value="new-txt">Logout</Menu.Item>
                <Menu.Item value="new-file">Support</Menu.Item>
              </Menu.Content>
            </Menu.Positioner>
          </Portal>
        </Menu.Root>
      </HStack>
    </Box>
  );
};

export default TopNav;
