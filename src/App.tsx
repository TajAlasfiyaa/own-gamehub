import { Grid, GridItem } from "@chakra-ui/react";
import { NavBar } from "./components/NavBar";

function App() {
  return (
    <>
      <Grid
        templateAreas={`"nav nav " " side main" `}
        gridTemplateColumns={"150px 1fr"}
        h="200px"
        gap="1"
        color="blackAlpha.700"
        fontWeight="bold"
      >
        <GridItem area={"nav"}>
          <NavBar />
        </GridItem>

        <GridItem p={3} bg={""} area={"side"}></GridItem>
        <GridItem p={3} area={"main"}></GridItem>
      </Grid>
    </>
  );
}

export default App;
