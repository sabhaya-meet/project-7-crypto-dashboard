import React from "react";
import { CustomCard } from "../../../chakra/CustomCard";
import { Stack, Tag, Text } from "@chakra-ui/react";

const InfoCard = ({ imgUrl, text, tagText, inverted }) => {
  return (
    <div style={{ width: "100%" }}>
      {" "}
      <CustomCard
        bgImage={`url(${imgUrl})`}
        bgSize="cover"
        bgRepeat="no-repeat"
        bgColor={inverted ? "purple" : "white"}
      >
        <Tag.Root
          rounded="full"
          // colorPalette={inverted ? "purple" : "white"}
          color={inverted ? "purple" : "white"}
          bg={inverted ? "white" : "purple"}
        >
          <Tag.Label>{tagText}</Tag.Label>
        </Tag.Root>
        <Text
          fontSize="16px"
          color={inverted ? "white" : "purple"}
          fontWeight="medium"
          mt={2}
        >
          {text}
        </Text>
      </CustomCard>
    </div>
  );
};

export default InfoCard;
