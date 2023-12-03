import { Badge } from "@chakra-ui/react";
interface Props {
  score: number;
}
const CritickScore = ({ score }: Props) => {
  return <Badge>{score}</Badge>;
};

export default CritickScore;
