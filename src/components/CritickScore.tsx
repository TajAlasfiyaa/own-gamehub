import { Badge } from "@chakra-ui/react";
interface Props {
  score: number;
}
const CritickScore = ({ score }: Props) => {
  const color = score > 93 ? "green" : score > 90 ? "yellow" : "red";
  return <Badge colorScheme={color}>{score}</Badge>;
};

export default CritickScore;
