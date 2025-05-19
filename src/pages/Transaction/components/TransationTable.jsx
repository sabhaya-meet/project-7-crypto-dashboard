import { Stack, Table, Tag, Text } from "@chakra-ui/react";

const tableData = [
  {
    id: "HD82NA2H",
    date: "2023-06-20",
    time: "07:00 AM",
    type: {
      name: "INR Deposit",
      tag: "E-Transfer",
    },
    amount: "+₹81,123",
    status: "pending",
  },
  {
    id: "HD82NA4H",
    date: "2023-06-18",
    time: "07:00 AM",
    type: {
      name: "INR Widthdraw",
      tag: "Wire Transfer",
    },
    amount: "-₹55,123",
    status: "processing",
  },
  {
    id: "HD82NA5H",
    date: "2023-06-18",
    time: "07:00 AM",
    type: {
      name: "Buy",
      tag: "BTC",
    },
    amount: "12.0554484 BTC",
    status: "cancelled",
  },
  {
    id: "HD82NA6H",
    date: "2023-06-18",
    time: "07:00 AM",
    type: {
      name: "Sell",
      tag: "BTC",
    },
    amount: "-2.0554484 BTC",
    status: "completed",
  },
  {
    id: "HD82NA7H",
    date: "2023-06-20",
    time: "07:00 AM",
    type: {
      name: "BTC Deposit",
    },
    amount: "+15.5000000",
    status: "pending",
  },
  {
    id: "HD82NA8H",
    date: "2023-06-18",
    time: "07:00 AM",
    type: {
      name: "BTC Widthdraw",
    },
    amount: "-5.05555544",
    status: "completed",
  },
];

const statusColor = {
  pending: "#797E82",
  processing: "#F5A50B",
  completed: "#059669",
  cancelled: "#DC2626",
};

const TransationTable = ({ filter = "All" }) => {
  const filteredData =
    filter === "All"
      ? tableData
      : tableData.filter(
          (item) =>
            typeof filter === "string" &&
            item?.type?.name?.toLowerCase().includes(filter.toLowerCase())
        );
  return (
    <Table.Root size="sm" interactive colorScheme="grey">
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeader>ID</Table.ColumnHeader>
          <Table.ColumnHeader>Date & Time</Table.ColumnHeader>
          <Table.ColumnHeader>Type</Table.ColumnHeader>
          <Table.ColumnHeader>Amount</Table.ColumnHeader>
          <Table.ColumnHeader>Status</Table.ColumnHeader>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {filteredData.map((item) => (
          <Table.Row key={item.id}>
            <Table.Cell fontSize="sm" fontWeight="medium">
              {item.id}
            </Table.Cell>
            <Table.Cell>
              <Stack gap={0}>
                <Text fontSize="sm" fontWeight="medium">
                  {item.date}
                </Text>
                <Text fontSize="xs" color="blackAlpha.700">
                  {item.time}
                </Text>
              </Stack>
            </Table.Cell>
            <Table.Cell>
              <Stack gap={0}>
                <Text fontSize="sm" fontWeight="medium">
                  {item?.type?.name}
                </Text>
                <Text fontSize="xs" color="blackAlpha.700">
                  {item?.type?.tag}
                </Text>
              </Stack>
            </Table.Cell>
            <Table.Cell fontSize="sm" fontWeight="medium">
              {item.amount}
            </Table.Cell>
            <Table.Cell fontSize="sm" fontWeight="medium">
              <Tag.Root
                bg={statusColor[item.status]}
                color="white"
                borderRadius="full"
                px={2}
              >
                <Tag.Label>{item.status}</Tag.Label>
              </Tag.Root>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  );
};

export default TransationTable;
