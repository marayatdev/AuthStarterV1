import "@mantine/carousel/styles.css";
import { DefaultLayout } from "../../components/ui@layout/DefultLayout";

function Dashboard() {
  return (
    <DefaultLayout>
      <h1>Dashboard</h1>
      {/* <Paper w={"80%"}>
        <Carousel
          slideSize="70%"
          height={200}
          slideGap="md"
          loop
          withControls={false}
          withIndicators
        >
          <Carousel.Slide bg={"blue"}>1</Carousel.Slide>
          <Carousel.Slide bg={"blue"}>2</Carousel.Slide>
          <Carousel.Slide bg={"blue"}>3</Carousel.Slide>
        </Carousel>
      </Paper> */}
    </DefaultLayout>
  );
}

export default Dashboard;
