import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <Card width={"300px"} borderRadius={12} boxShadow="2xl" overflow="hidden">
      <Skeleton height={220} />
      <CardBody pb={53}>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default GameCardSkeleton;
