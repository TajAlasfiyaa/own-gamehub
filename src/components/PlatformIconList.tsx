import {
  FaLinux,
  FaWindows,
  FaAndroid,
  FaXbox,
  FaPlaystation,
  FaApple,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { Platform } from "../hooks/useGames";
import { HStack, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";
interface Props {
  platforms: { platform: Platform }[];
}
const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    playstation: FaPlaystation,
    linux: FaLinux,
    android: FaAndroid,
    pc: FaWindows,
    xbox: FaXbox,
    mac: FaApple,
    ios: MdPhoneIphone,
    nintendo: SiNintendo,
    web: BsGlobe,
  };
  return (
    <HStack my={1}>
      {platforms.map(({ platform }) => (
        <Icon color="gray.500" as={iconMap[platform.slug]} />
      ))}
    </HStack>
  );
};

export default PlatformIconList;
