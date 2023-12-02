import {
  Box,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Switch,
  Text,
} from "@chakra-ui/react";

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
        <GridItem bg={"black"} area={"nav"}>
          <NavBar />
        </GridItem>

        <GridItem p={3} bg={""} area={"side"}></GridItem>
        <GridItem p={3} area={"main"}>
          <FormControl display="flex" alignItems="center">
            <FormLabel htmlFor="email-alerts" mb="0">
              Enable email alerts?
            </FormLabel>
            <Switch id="email-alerts" />
          </FormControl>
        </GridItem>
      </Grid>
    </>
  );
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const NavBar = () => {
  return (
    <>
      <Box
        alignItems="center"
        justifyContent="space-around"
        display="flex"
        w={"100vw"}
        h={"40px"}
        bg={"black"}
      >
        <Text m={3} color="white">
          RAWG
        </Text>
        <Box w={"844px"} h={"35px"} borderRadius={20} bg="white"></Box>
        <Box w={"224px"} h={"35px"} borderRadius={20} bg="white"></Box>
      </Box>
    </>
  );
};
export default App;
