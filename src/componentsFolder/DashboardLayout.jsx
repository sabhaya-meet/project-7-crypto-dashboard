import { Box, Container, Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import SideNav from "./SideNav";
import TopNav from "./TopNav";

const DashboardLayout = ({ title, children }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      {open && (
        <Box
          position="fixed"
          top="0"
          left="0"
          w="100vw"
          h="100vh"
          bg="blackAlpha.400"
          zIndex="10"
          display={{ base: "block", lg: "none" }}
          onClick={() => setOpen(false)}
        />
      )}
      <Flex>
        <SideNav open={open} />
        <Box flexGrow={1}>
          <TopNav title={title} setOpen={setOpen} />
          <Container
            overflow="hidden"
            h="calc(100vh - 90px)"
            overflowY="auto"
            px="4"
            mt="6"
            maxW="60rem"
          >
            {children}
          </Container>
        </Box>
      </Flex>
    </>
  );
};

export default DashboardLayout;
