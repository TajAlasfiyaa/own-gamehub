import { HStack, Switch, Text, useColorMode, Image } from "@chakra-ui/react";
import roblox from "../assets/roblox.svg";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const NavBar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <HStack justifyContent="space-between" p="10px">
        <HStack>
          <Image boxSize="40px" src={roblox} />
          <Text m={3}>RAWG {colorMode}</Text>
        </HStack>
        <Switch onChange={toggleColorMode} />
      </HStack>
    </>
  );
};
