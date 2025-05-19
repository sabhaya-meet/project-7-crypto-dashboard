import {
  Box,
  Flex,
  HStack,
  Icon,
  Input,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { MdMail } from "react-icons/md";
import ContactCard from "./ContactCard";

const SupportCard = ({ leftComponent, icon, title, text }) => {
  return (
    <Flex
      gap={6}
      flexDir={{
        base: "column",
        lg: "row",
      }}
    >
      <Stack maxW="388px">
        <Icon as={icon} boxSize={6} color="purple" />
        <Text as="h1" fontWeight="medium" fontSize="30px" textStyle="h2">
          {title}
        </Text>
        <Text fontSize="sm" color="blackAlpha.800">
          {text}
        </Text>
      </Stack>
      <Box maxW="525px" w="full">
        {leftComponent}
      </Box>
    </Flex>
  );
};

export default SupportCard;
