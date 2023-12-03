import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";
interface Props {
  children: ReactNode;
}
const GameCardContainer = ({ children }: Props) => {
  return (
    <Box width={"300px"} borderRadius={12} boxShadow="2xl" overflow="hidden">
      {children}
    </Box>
  );
};

export default GameCardContainer;
