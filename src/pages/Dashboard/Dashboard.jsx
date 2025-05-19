import { Grid, GridItem } from "@chakra-ui/react";
import DashboardLayout from "../../componentsFolder/DashboardLayout";
import PortFolioSection from "./components/PortFolioSection";
import PriceSection from "./components/PriceSection";
import Transations from "./components/Transations";
import InfoCard from "./components/InfoCard";
import img from "../../assets/Shapes.png";
import secondImg from "../../assets/Visual.png";

const Dashboard = () => {
  return (
    <DashboardLayout title="Dashboard">
      <Grid
        gridTemplateColumns={{
          base: "repeat(1,1fr)",
          md: "repeat(2,1fr)",
        }}
        gap={6}
      >
        <GridItem
          colSpan={{
            base: 1,
            md: 2,
          }}
        >
          <PortFolioSection />
        </GridItem>
        <GridItem colSpan={1}>
          <PriceSection />
        </GridItem>
        <GridItem colSpan={1}>
          <Transations />
        </GridItem>
        <GridItem colSpan={1}>
          <InfoCard
            imgUrl={img}
            text="Creative minds explore unknown ideas through curious learnin"
            tagText="Loan"
            inverted={false}
          />
        </GridItem>
        <GridItem colSpan={1}>
          <InfoCard
            imgUrl={secondImg}
            text="for solving difficult real-world problems efficiently together."
            tagText="Contact"
            inverted={true}
          />
        </GridItem>
      </Grid>
    </DashboardLayout>
  );
};

export default Dashboard;
