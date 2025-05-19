import React, { useState } from "react";
import DashboardLayout from "../../componentsFolder/DashboardLayout";
import {
  Button,
  Card,
  Flex,
  HStack,
  Input,
  InputGroup,
  Tabs,
  Tag,
} from "@chakra-ui/react";
import { MdOutlineFileDownload } from "react-icons/md";
import TransationTable from "./components/TransationTable";
import { IoIosSearch } from "react-icons/io";

const TransationPage = () => {
  const tabs = [
    { name: "All", count: 345 },
    { name: "Deposit", count: 114 },
    { name: "Widthdraw", count: 55 },
    { name: "Trade", count: 50 },
  ];

  const [selectedTab, setSelectedTab] = useState("All");
  return (
    <DashboardLayout title="Transactions">
      <Flex justify="end" mb="6">
        <Button leftIcon={<MdOutlineFileDownload />}>Export CSV</Button>
      </Flex>

      <Card.Root width="100%">
        <Tabs.Root
          defaultValue="All"
          onValueChange={(val) => setSelectedTab(val)}
        >
          <Tabs.List pt="4" display="flex" justifyContent="space-between">
            <HStack>
              {tabs.map((tab) => (
                <Tabs.Trigger value={tab.name} key={tab.name}>
                  {tab.name}{" "}
                  <Tag.Root borderRadius="full">
                    <Tag.Label borderRadius="full">{tab.count}</Tag.Label>
                  </Tag.Root>
                </Tabs.Trigger>
              ))}
            </HStack>

            <InputGroup
              maxW="200px"
              startElement={<IoIosSearch />}
              gap={0}
              pb={2}
              pr={2}
            >
              <Input placeholder="search..." />
            </InputGroup>
          </Tabs.List>

          {tabs.map((tab) => (
            <Tabs.Content value={tab.name} key={tab.name}>
              <TransationTable filter={tab.name} />
            </Tabs.Content>
          ))}
        </Tabs.Root>
        <Card.Body gap="2" />
      </Card.Root>
    </DashboardLayout>
  );
};

export default TransationPage;
