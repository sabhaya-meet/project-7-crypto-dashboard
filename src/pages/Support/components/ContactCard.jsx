import {
  Button,
  Card,
  Checkbox,
  Field,
  Flex,
  HStack,
  Input,
  Stack,
  Textarea,
} from "@chakra-ui/react";
import React from "react";

const ContactCard = () => {
  return (
    <Card.Root maxW="lg" size="sm" flexGrow={1}>
      <Card.Header>
        <Card.Description>
          You will receive response within 24 hours of time of submit.
        </Card.Description>
      </Card.Header>
      <Card.Body>
        <Flex>
          <HStack
            gap="4"
            w="full"
            flexDir={{
              base: "column",
              md: "row",
            }}
          >
            <Field.Root>
              <Field.Label> Name</Field.Label>
              <Input />
            </Field.Root>
            <Field.Root>
              <Field.Label>Surname</Field.Label>
              <Input />
            </Field.Root>
          </HStack>
        </Flex>
        <Stack gap="4" w="full">
          <Field.Root>
            <Field.Label>Email</Field.Label>
            <Input />
          </Field.Root>
          <Field.Root>
            <Field.Label>Message</Field.Label>
            <Textarea placeholder="message..." />
          </Field.Root>
        </Stack>
        <Stack mt="10px">
          <Checkbox.Root>
            <Checkbox.HiddenInput />
            <Checkbox.Control />
            <Checkbox.Label>I agree with Terms & Conditions.</Checkbox.Label>
          </Checkbox.Root>
        </Stack>
      </Card.Body>
      <Card.Footer width="full">
        <Stack width="full">
          <Button bg="purple">Send a Message</Button>
          <Button bg="#a6a6a8">Book a Meeting</Button>
        </Stack>
      </Card.Footer>
    </Card.Root>
  );
};

export default ContactCard;
