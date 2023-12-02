import {
  Box,
  Button,
  HStack,
  Switch,
  Text,
  useColorMode,
} from "@chakra-ui/react";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const NavBar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <HStack justifyContent="space-between" p="10px">
        <Text m={3}>RAWG</Text>
        <Switch onChange={toggleColorMode} />
      </HStack>
    </>
  );
};
