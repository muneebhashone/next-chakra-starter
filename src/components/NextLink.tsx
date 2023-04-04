import Link from "next/link";
import { Link as ChakraLink, ChakraProps } from "@chakra-ui/react";

const NextLink = (props: ChakraProps) => {
  return <ChakraLink as={Link} {...props} />;
};

export default NextLink;
