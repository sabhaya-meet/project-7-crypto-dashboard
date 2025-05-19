import React from "react";
import DashboardLayout from "../../componentsFolder/DashboardLayout";
import { Card, Stack } from "@chakra-ui/react";
import SupportCard from "./components/SupportCard";
import ContactCard from "./components/ContactCard";
import { MdMail } from "react-icons/md";
import { FaMessage } from "react-icons/fa6";
import InfoCard from "../Dashboard/components/InfoCard";
import secondImg from "../../assets/Visual.png";
const Support = () => {
  return (
    <DashboardLayout>
      <Stack gap={10}>
        <SupportCard
          leftComponent={<ContactCard />}
          title="Contact Us"
          text="Have a question or just want to know more? Feel free to reach out to
          us."
          icon={MdMail}
        />
        <SupportCard
          leftComponent={
            <InfoCard
              imgUrl={secondImg}
              text="Creative minds explore unknown ideas through curious learnin"
              tagText="Loan"
              inverted={true}
            />
          }
          title="Live Chat"
          text="Don’t have time to wait for the answer? Chat with us now."
          icon={FaMessage}
        />
      </Stack>
    </DashboardLayout>
  );
};

export default Support;
