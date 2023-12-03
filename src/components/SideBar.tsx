import useGenres from "../hooks/useGenres";
import { Box, Text } from "@chakra-ui/react";

const SideBar = () => {
  const { data, erorr } = useGenres();
  return (
    <Box>
      {erorr && <Text>{erorr}</Text>}
      {data.map((genre) => (
        <Text>{genre.name}</Text>
      ))}
    </Box>
  );
};

export default SideBar;
