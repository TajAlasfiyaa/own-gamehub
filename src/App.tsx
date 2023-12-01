import { Box, Text } from "@chakra-ui/react";

function App() {
  return (
    <>
      <Box h={"100vh"} bg="#151515">
        <NavBar />
      </Box>
    </>
  );
}

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
