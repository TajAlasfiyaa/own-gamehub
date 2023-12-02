import { Divider, Grid, GridItem } from "@chakra-ui/react";
import { NavBar } from "./components/NavBar";
import GameGrid from "./components/GameGrid";

function App() {
  return (
    <>
      <Grid
        templateAreas={`"nav nav " " side main" `}
        h="200px"
        gap="1"
        color="blackAlpha.700"
        fontWeight="bold"
      >
        <GridItem area={"nav"}>
          <NavBar />
          <Divider />
        </GridItem>

        <GridItem p={3} bg={""} area={"side"}></GridItem>
        <GridItem p={3} area={"main"}>
          <GameGrid />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
