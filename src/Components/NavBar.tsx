import { HStack, Image, Link, Button, Icon } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import { FaGithub } from "react-icons/fa";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack padding="1rem">
      <Image src={logo} boxSize="60px"></Image>
      <SearchInput onSearch={onSearch}></SearchInput>
      <Link target="_blank" href="https://github.com/MiniNInjaP/game-hub">
        <Button fontSize={12} leftIcon={<Icon as={FaGithub} color="#19df16" />}>
          GitHub Repo
        </Button>
      </Link>
      <ColorModeSwitch></ColorModeSwitch>
    </HStack>
  );
};

export default NavBar;
